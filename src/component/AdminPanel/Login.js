import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
const LoginAdmin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const login =async (email,psw) => {
        const sending = {
            email,
            password:psw
        }
        // name === ADMIN_USERNAME ? psw === ADMIN_PASSWORD?props.admin():alert("wrong passwrod"):alert("wrong email")
        const admin = await axios.post('/api/v1/login', sending);
        const role = jwt(admin.data).role;
        console.log(document.cookie,role);
        if(role){
            document.cookie = `TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
            document.cookie = `ADMIN-TOKEN=${admin.data}`;
            window.location.reload();
        }
    }
    return (
        <form style={{ display: "flex", position: "relative", left: "35%", top: "200px", width: "250px" }}>
            <div className="form-group">
                <h2 style={{ position: "relative", left: "50px" }}>ADMIN PANEL</h2>
                <input type="email" value={user.email} onChange={(e) => { setUser({...user, email: e.target.value }) }} placeholder="admin" className="form-control mx-5 my-2" type="text" />
                <input type="password" value={user.password} placeholder="password" onChange={(e) => { setUser({ ...user,password: e.target.value }) }} className="form-control mx-5 my-2"  />
                <button type="button" onClick={() => login(user.email,user.password)} className="btn btn-primary ml-4">LOG IN</button>
            </div>
        </form>
    )
}

export default LoginAdmin;