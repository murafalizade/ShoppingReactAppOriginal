import React, { useState } from 'react';
import axios from "axios";


const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [compassword, setCompassword] = useState("");

    const postUser = async (name, email, psw, compsw) => {
        if (psw === compsw) {
            const User = {
                name: name ? name : alert("this is a impossible"),
                email: email ? email : alert("this is a impossible"),
                password: psw ? psw : alert("this is a impossible")
            }
            const  token = await axios.post("/api/v1/signup", User);
            // let userData = jwt(token.data);
            // userData = userData.id;
            let day = new Date();
            const time = String(day).substring(0, 7) + String(day.getDate() + 1) + String(day).substring(11);
            console.log(Date(time));
            document.cookie = `TOKEN=${token.data}; expires=${time};`;
        }
        else {
            alert("password is equal comfired password");
            console.log(psw, compsw)
        }
        window.location.reload();
    }
    


    return (
        <form className="form" >
            <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" required />
                <label htmlFor="e-name">e-mail</label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" required />
                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" required />
                <label htmlFor="Password-comfire">Password Comfired</label>
                <input className="form-control" value={compassword} onChange={(e) => { setCompassword(e.target.value) }} type="password" />
                <button type="button" onClick={() => postUser(name, email, password, compassword)} className="btn mt-3 btn-lg text-light btn-block btn-primary" >LOG IN</button>
                <hr />
                 <p className="subtitle" onClick={()=>props.toogler(true)}>You have already account</p>
            </div>
        </form>
    );
};

export default Login;