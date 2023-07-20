import { useState  } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Title = ()=> (
    <a href="/">
    <img className="h-32 p-3"  alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgA54o0u6hQT7q4Yt3tsl9dLlWo6yqFJeCK6J4kKhngcbeoBvvjR9_gXACgR4URZDs4w&usqp=CAU"/>
    </a>
);

const HeaderComponent = () => {

    const isOnline = useOnline();

    const {name,email} = useContext(userContext);

    const cartItems = useSelector((store) => store.cart.items );
    

    
    return (
        <div className="flex justify-between bg-blue-200 shadow-xl ">
            <Title/>
            {(!isOnline)?<h1>🔴</h1>:<h1>🟢</h1>}
            {name}
            {email}
            <div className="navItems ">
                <ul className="flex py-10 ">
                    <Link to="/" className="px-2 py-2 hover:shadow-lg hover:bg-black hover:text-white font-bold"><li>Home</li></Link>
                    <Link to="/about" className="px-2 py-2 hover:shadow-lg hover:bg-black hover:text-white font-bold"><li>About</li></Link>
                    <Link to="/contact" className="px-2 py-2 hover:shadow-lg hover:bg-black hover:text-white font-bold"><li>Contact</li></Link>
                    <Link to="/Instamart" className="px-2 py-2 hover:shadow-lg hover:bg-black hover:text-white font-bold "><li>Instamart</li></Link>
                    <Link to="/Cart" className="px-2 py-2 hover:shadow-lg hover:bg-black hover:text-white mr-4 font-bold"><li>Cart-{cartItems.length}</li></Link>
                    
                    
                    
                </ul>
            </div>
            
        </div>
    );
}

export default HeaderComponent;
