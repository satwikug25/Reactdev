
import { url } from "../config";





const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
    
    return (
        <div className="w-[200px] p-2 m-3 shadow-lg bg-blue-50 ">
            
            <img src ={url+ cloudinaryImageId} />
            <h2 className="font-bold text-lg ">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            

            
                
            
            


        </div>
        

    );
}

export default RestaurantCard;