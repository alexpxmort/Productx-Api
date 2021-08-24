export const AUTH = {
    email:'lexpdigi@gmail.com',
    password:'123456'
};

export const USER = {
    email:'lexpdigi@gmail.com',
    name:'Alex',
    id:1
}

export const validateCredentials = (userCredentials)=>{
    return userCredentials.email === AUTH.email && userCredentials.password === AUTH.password
}