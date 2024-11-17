/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';// Adjust the import path according to your project structure

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      <div className='cartWrapper'>
        {
          products && products.length > 0 ? (
            products.map(product => (
              <div className='cartCard' key={product.id}>
                <img src={product.image} alt='img' />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <h4>{product.quantity}</h4>
                <button className='btn' onClick={() => handleRemove(product.id)}>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )
        }
      </div>
    </div>
  );
}

export default Cart;
