import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";




const Body = () => {
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [restaurants,setRestaurants] = useState([]);
    const [searchText, setSearchText]=useState("");



    

    useEffect(()=>{
        
        getRestaurants();
        
    },[]);



    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        console.log(res);
            
        setAllRestaurants(res?.data?.cards[2].data?.data?.cards);
        setRestaurants(res?.data?.cards[2].data?.data?.cards);
        
        
    }

    const online = useOnline();
    if(!online){
        return <h1>Please check your internet connection</h1>;
    }

    if(!allRestaurants) return null;


    const dispatch = useDispatch();
    handleAddItem=(restaurant)=>{
        dispatch(addItem(restaurant));
    }

    


    

    return (restaurants?.length === 0)? <Shimmer/> : (
        <div className="bg-slate-100">
        <div className="p-5 bg-blue-200 my-5 ">
            <input type="text" className="focus:bg-blue-50 focus:border-blue-100" placeholder="Search" value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>


            <button className="m-2 p-2 bg-slate-50 rounded-xl hover:bg-black hover:text-white " onClick={()=>{
                const data = filterData(searchText,allRestaurants);
                if(restaurants.length === 0){
                    return (
                        <h1>No Restaurant matches your Search</h1>
                    )
                }
               
                setRestaurants(data);
            }}>Search</button>

        </div>
        <div className="flex flex-wrap justify-between  ">
             {restaurants.map((restaurant)=>{
                return (
                <div>
                
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                <button className="flex justify-center p-2 font-bold text-lg bg-blue-50 hover:bg-black hover:text-white  border border-gray-950 rounded-full" 
                onClick={()=>handleAddItem(restaurant) }> Add to Cart </button>
                {console.log()}
                
                </div>
                )
            }
            )
            }
        
        </div>
        </div>
    );
}

export default Body;
