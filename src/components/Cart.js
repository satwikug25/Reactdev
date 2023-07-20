import React from 'react'
import { useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';



const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items );
  return (
    <div>
        <h1 className='font-bold text-3xl p-2 m-2'>Cart</h1>
        






    </div>
  )
}

export default Cart;