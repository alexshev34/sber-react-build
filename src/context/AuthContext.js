import { createContext } from "react";

function noop(){}

export const AuthContext = createContext( {
    token: noop,
    login: noop,
    logout: noop,
    isAuthenticated: false
})