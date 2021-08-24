import React from   'react'

import './cart-item.styles.scss'
import {connect} from 'react-redux'
import { removeItem } from '../../redux/actions/CartAction';


const CartItem = ({item,removeItem}) =>{

    return(
        <div className='cart-item'>
            <img src={item.imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='name'>{item.name}</span>
                <span className='price'>
                  {item.quantity} x ${item.price}</span>
                <span className={'del'} onClick={() => removeItem(item)}>&times;</span>
            </div>
        </div>
        );
}




const mapDispatchToProps = dispatch =>({
    removeItem:item =>dispatch(removeItem(item)),
})
  
  export default connect(null,mapDispatchToProps)(CartItem)
  
