import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_LOADING } from '../../Type';
import {API} from '../../../Helpers/Api';

export const loginUser = (Email, Password) => async dispatch =>{
    const Config = {
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const Body = { email:Email, password:Password };

    try{
        dispatch({ type: AUTH_LOADING });
        const Res = await API.post('/login', Body, Config);
        dispatch({ 
            type: AUTH_LOGIN,
            payload: Res
        })
    }
    catch (Err){
        dispatch({ 
            type: AUTH_LOGIN_ERROR
        });
    }
}