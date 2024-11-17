/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  
  const cartItems = useSelector((state) => state.cart.cart);

 
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='NAv-main'>
      <div>
        <span className='logo'>Redux Store</span>
      </div>
      <div>
        <Link className='font-inter font-bold navLink' to="/">
          Home
        </Link>
        <Link className='font-inter font-bold navLink' to="/cart">
          Cart
        </Link>
        <span className='cartCount'>
          Cart Items: {totalQuantity}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
