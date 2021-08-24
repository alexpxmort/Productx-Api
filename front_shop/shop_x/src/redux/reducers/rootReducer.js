import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import CartReducer from './CardReducer';


const rootReducer =  combineReducers({
    cart:CartReducer,
    auth:AuthReducer,
})

export default rootReducer;