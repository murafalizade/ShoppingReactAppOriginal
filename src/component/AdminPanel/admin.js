import React,{useState,useEffect} from "react";
import LoginAdmin from "./Login";
import Main from "./main";
import jwt from "jwt-decode";

const Admin = () =>{
    const [cookie,setCookie] = useState(false);
    useEffect(()=>{
        const token = document.cookie.slice(11);
        try{
            const adminPermisson = jwt(token).role; 
            setCookie(adminPermisson);
        }
        catch(error){
            setCookie(false);
        }
    },[])
    return (
        <div className="adminpanel">
            {!cookie ? <LoginAdmin /> :<Main />}
        </div>
    )
}



export default Admin;