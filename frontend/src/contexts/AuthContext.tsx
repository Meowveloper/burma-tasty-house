import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";
import IUser from "../types/IUser";
import EnumAuthReducerActionTypes from "../types/EnumAuthReducerActionTypes";
import axios from '../utilities/axios';

interface IProps 
{
    children : ReactNode;
}

interface AuthState 
{
    user : IUser | null;
}


type AuthAction = { type : EnumAuthReducerActionTypes.LoginOrRegister, payload : IUser } | { type : EnumAuthReducerActionTypes.Logout };

interface AuthContextType extends AuthState 
{
    dispatch : Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType>({
    user : null, 
    dispatch : () => null
});

export const AuthContextProvider = ({ children } : IProps) => {
    const [ state, dispatch ] = useReducer(
        (state : AuthState, action : AuthAction) => {
            switch(action.type) {
                case EnumAuthReducerActionTypes.LoginOrRegister : return { user : action.payload };
                case EnumAuthReducerActionTypes.Logout : return { user : null };
                default : return state; 
            }
        }, 
        { user : null }
    );

    useEffect(() => {
        console.log('Checking useEffect from AuthContext');
        axios.get('/users/me').then(res => {
            const user : IUser = res.data.data;
            if(user) {
                dispatch({ type : EnumAuthReducerActionTypes.LoginOrRegister, payload : user });
            } else {
                dispatch({ type : EnumAuthReducerActionTypes.Logout });
            }
        }).catch(error => {
            console.error(error);
            dispatch({ type : EnumAuthReducerActionTypes.Logout });
        })
    }, []);

    return <AuthContext.Provider value={{ ...state, dispatch }}>{ children }</AuthContext.Provider>
};