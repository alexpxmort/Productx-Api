import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import reducers from './reducers/rootReducer';


const middleWares = [];

if(process.env.NODE_ENV ==='development'){
    middleWares.push(logger);
}



export const store  = createStore(reducers,applyMiddleware(...middleWares));



export default  {store};