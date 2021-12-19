
import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_LOADING } from '../../Type';

export const initialState = {
    Token:null,
    isAuthenticated:null,
    User:null,
    Modules:null,
    Loading:false,
    Error:false
}

const AuthReducer = (State = initialState, Action) => {

    const {type, payload} = Action;

    switch (type) {
        case AUTH_LOGIN:
            return {
                ...State,
                Token:payload.data.token,
                isAuthenticated:true,
                Loading:false,
                User:payload.data.user,
                Modules:payload.data.modules,
                Error:false
            }

        case AUTH_LOGIN_ERROR:
            return {
                ...State,
                Token:null,
                isAuthenticated:null,
                User:null,
                Modules:null,
                Loading:false,
                Error:true
            }
        case AUTH_LOADING:
            return {
                ...State,
                Loading:true,
                Error:false
            }
        default:
            return State;
    }

}

export default AuthReducer;