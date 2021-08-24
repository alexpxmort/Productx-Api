import {AuthActionsTypes} from '../actions/types';

const INITIAL_STATE = {
    currentUser:null
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case AuthActionsTypes.SET_CURRENT_USER:
            return{...state,currentUser:action.payload};
            break;

            case AuthActionsTypes.SIGN_OUT:
                return {
                    ...state,
                    currentUser:null,
                    error:null
                }
                break;
            default:
                return state;
            break;
    }
}