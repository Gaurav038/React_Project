import { toast } from 'react-toastify'

const authReducer = (state = {}, action)=>{
    switch (action.type) {
        case "SIGN_IN":
            toast("Welcome Back...")
            return state;
        case "SIGN_IN_ERR":
            toast.error("Sign in ERRor...")
            return state
        case "SIGN_OUT":
            toast("u Sign OUT...")
            return state
        case "SIGN_UP":
            toast("Welcome...")
            return state;
        case "SIGN_UP_ERR":
            toast.error("Sign UP ERRor...")
            return state
        default:
            return state
    }
}

export default authReducer;