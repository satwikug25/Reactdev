import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";








const AppLayout = () => {
    return (
        <>
        <HeaderComponent />
        <Outlet/>
        <Footer />
        </>

    );


}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <Body />,
            },
            {
                path:"/about",
                element: <About />,
            },

            {
                path:"/Contact",
                element: <Contact />,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/Instamart",
                element:<Instamart/>
            }
            

        ]


    },
    
    
    
]);






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);