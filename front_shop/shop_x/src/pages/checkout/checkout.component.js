import React, { createRef } from 'react'

import './checkout.styles.scss';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/selectors/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Pdf from 'react-to-pdf';
import CustomButton from '../../components/custom-button/custom-button.component';
import { selectCurrentUser } from '../../redux/selectors/user.selector';


const    CheckoutPage = ({total,cartItems,onClick,currentUser}) =>(
   <div>
        <div className='checkout-page' >
        <div className='checkout-header' style={{display:'none'}}>
            <h2>{currentUser.name}</h2>
            <div className='header-block'>
                <span>Produtos</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
        </div>
        <div  style={{display:'none'}}>
            { cartItems.map(cardItem =>
                <CheckoutItem key={cardItem.id} cartItem={cardItem}/>
                )}
        </div>
       
        <div className='total' style={{display:'none'}}>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
   </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems,
    total:selectCartTotal,
    currentUser:selectCurrentUser
})

export default   connect(mapStateToProps,{})(CheckoutPage);