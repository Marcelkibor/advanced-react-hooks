// this is an authentication module as a Higher Order Component(HOC)
// A HOC is a function that takes in a component as an argument and returns another component with additional functionality
import { useEffect, useState } from "react"
import VerifyAuth from "./VerifyAuth"

const AuthenticateUser =(props)=>{
    const [auth,setAuth] = useState(false);
        useEffect(()=>{
           setTimeout(()=>{
            setAuth(true);
           },3000)
        },[]);
    return <VerifyAuth {...props} isAuth={auth}/>
}
export default AuthenticateUser
