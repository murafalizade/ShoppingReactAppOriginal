import React, { useEffect, useState } from 'react';
import Login from './login';
import SignUp from "./signup";
import jwt from "jwt-decode";
import axios from "axios";

const ProfilLogin = () => {
    const [userName, setUserName] = useState("");
    const [toogleLogin, setToogleLogin] = useState(false);
    useEffect(async () => {
        if (document.cookie.substring(6) !== "") {
            
            const url = jwt(document.cookie.substring(6));
            console.log(userName);
            console.log(url.id)
            const user = await axios.get(`/api/v1/users/${url.id}`);
            setUserName(user.data.name);
        }
    }, [])

    const toogler = cond => {
        setToogleLogin(cond);
    }

    console.log(toogleLogin);

    return (
        <div className="mt-5" style={{ width: "500px", display: "grid", marginLeft: "25%" }} >
            {userName === "" ?
                (toogleLogin ? <SignUp toogler={toogler} /> : <Login toogler={toogler} />)
                :
                (<div>
                    <h1>
                        Welcome  {userName}
                    </h1>
                    <p>Let's first choose new <a className="d-inline mx-0" href="/products/All">fast foods</a> , add to cart  and check to <a className="d-inline" href="/cart">cart</a></p>
                    <a href="/profile" onClick={() => { document.cookie = `TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`; setToogleLogin(true); }} className="bg-dark text-light btn btn-dark">Log Out</a>
                </div>)}
        </div>
    );
};


export default ProfilLogin;