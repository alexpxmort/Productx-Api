import{AuthActionsTypes} from './types';


export const signOut = ()=>({
    type:AuthActionsTypes.SIGN_OUT
})

export const checkUserSession = ()=>({
    type:AuthActionsTypes.CHECK_USER_SESSION
})

export const sign = (userCredentials) =>({
    type:AuthActionsTypes.SET_CURRENT_USER,
    payload:userCredentials
})

