import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    console.log(params)
  return (
    <div className="restaurant-menu">

        <h1>Restaurant Id: {id}</h1>
        <h2>Namaste</h2>


    </div>
  )
}

export default RestaurantMenu