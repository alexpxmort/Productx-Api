import {createContext} from 'react';

const cartIconContext = createContext({
    hidden:true,
    toggleHidden:()=>{},
    changeIsMovie:()=>{},
    isMovie:false
})

export default cartIconContext;