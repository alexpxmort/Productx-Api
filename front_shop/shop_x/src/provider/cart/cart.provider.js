import React,{createContext,useEffect,useState} from 'react'
import {addItemToChart,removeItemFromCart} from '../../redux/utils/cart.utils'

export const CartContext = createContext({
    hidden:true,
    toogleHidden:()=>{},
    cartItems:[],
    addItem:()=>{},
    removeItem:()=>{},
    clearItemsFromCart:()=>{},
    cartItemsCount:0
})

const CartProvider = ({children}) =>{
    const [hidden,setHiden] = useState(true);
    const [cartItems,setCartItems] = useState([]);
    const [cartItemsCount,setCartItemsCount] = useState(0);

    const toogleHidden = () => setHiden(!hidden);
    const addItem = item =>setCartItems(addItemToChart(cartItems,item));

    return(
        <CartContext.Provider
        value={{
            hidden,
            toogleHidden,
            cartItems,
            addItem,
            cartItemsCount
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;