import React from 'react';
import './checkout-item.styes.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='value'>{quantity}</span>
      </span>
      <span className='price'>{price}</span>
    </div>
  );
};


export default CheckoutItem;