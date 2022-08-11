import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess } from "./userRedux"
import { publickRequest } from "../requestMethod"

export const login = async (dispatch,user) => {
    dispatch(loginStart())
    try{
        const res = await publickRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutStart())
    try{
        dispatch(logoutSuccess())
    }catch(err){
        
    }
}