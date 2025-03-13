import { LoginUser, User } from "../interface/user.interface";

//const API ='http://localhost:3000'

export const createUserRequest = (user: User) =>
    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const loginUserRequest = async (user: LoginUser) =>
    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
