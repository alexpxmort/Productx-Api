import {CardActionTypes} from './types';

export const toggleCartHidden = ()=>{
    return({
        type:CardActionTypes.TOOGLE_CART_HIDDEN
    })
}


export const clearCart = () => ({
    type:CardActionTypes.CLEAR_CART
})

export const addItem = (item)=>{
    console.log(item);
    return({
        type:CardActionTypes.ADD_ITEM,
        payload:item
    })
}


export const removeItem = (item)=>{
    return({
        type:CardActionTypes.REMOVE_ITEM_TO_CHART,
        payload:item
    })
}


export const clearItemFromCart = (item) =>({
    type:CardActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})