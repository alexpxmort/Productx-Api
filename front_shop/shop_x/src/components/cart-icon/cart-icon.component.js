import React,{useContext} from 'react'
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';   
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import CartContext from '../../contexts/cart/cartIconContext';
import { selectCartItemsCount } from '../../redux/selectors/cart.selector';

const CartIcon = ({itemCount}) =>{

    const {toggleHidden} = useContext(CartContext);

    const _changesValContext = () =>{
        toggleHidden();
    }
    return(
        
        <div className='cart-icon'  onClick={_changesValContext}>
            <ShoppingIcon  className='shopping-icon'/>
            {
  
                <span className='item-count'>{itemCount}</span>
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount,
})
export default connect(mapStateToProps,{})(CartIcon);