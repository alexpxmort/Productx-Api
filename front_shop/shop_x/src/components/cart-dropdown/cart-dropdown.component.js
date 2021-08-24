import React,{createRef,useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selector';
import Pdf from 'react-to-pdf';
import { selectCurrentUser } from '../../redux/selectors/user.selector';
import { useDispatch } from 'react-redux';
import {clearCart} from '../../redux/actions/CartAction';

const ref =  createRef();

const CartDropDown = ({cartItems,currentUser,total}) =>{
    const [display,setDisplay] = useState('block');
    const [style,setStyle] = useState({});
    const [styleItems,setStyleItems] = useState({display:'none'});
    const [styleCartItems,setStyleCartItems] = useState({display:'block'});
   
    const dispatch = useDispatch();

    return(
    <div>
        
        <Pdf target={ref} filename="comprovante.pdf">

        {({toPdf, targetRef}) =>  (
        <div style={style}  ref={targetRef}>
            {
                <div className='cart-dropdown'>
                <div>Client: {currentUser.name || 'User Test'}</div>

                <div style={styleItems}>
                    {
                        cartItems.map((cartItem,idx) => (
                            <div key={idx}>
                             <span>Nome: {cartItem.name}</span><br/>
                             <span>Preço: ${cartItem.price}</span><br/>
                             <span>Quantidade: ${cartItem.quantity}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='cart-items' style={styleCartItems}>
                    {
                        cartItems.length ? (
                        cartItems.map((cartItem,idx) => (
                        <CartItem isMovie={false} key={idx} item={cartItem} />
                        ))
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )
     
                    }
                </div>
                    $TOTAL:{total}
                    <br/>
                    <CustomButton  style={{width:100,display:display}} onClick={()=>{
                        setDisplay('none')
                        setStyle({width: 800, height: 800,margin:0,padding:0})
                        setStyleCartItems({display:'none'})
                        setStyleItems({display:'block'})
                        setTimeout(()=>{
                            toPdf()
                        },2000)

                        setTimeout(()=>{
                            setStyle({})
                            setDisplay('block')
                            setStyleCartItems({display:'block'})
                            setStyleItems({display:'none'})
                            dispatch(clearCart())
                        },2000)

                    }}>Checkout </CustomButton>
                </div>
            }
        </div>
        )}
        </Pdf>
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal,
    currentUser:selectCurrentUser
});

export default  withRouter(connect(mapStateToProps,{})(CartDropDown));