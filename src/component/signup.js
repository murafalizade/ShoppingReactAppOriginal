import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {

    const [semail, setsEmail] = useState("");
    const [spassword, setsPassword] = useState("");

    const postVariable = async (email, psw) => {
        const account = {
            email: email,
            password: psw
        }
        const token = await axios.post("/api/v1/login", account)
        // let userData = jwt(token.data);
        // userData = userData.id;
        let day = new Date();
        const time = String(day).substring(0, 7) + String(day.getDate() + 1) + String(day).substring(11);
        console.log(Date(time));
        document.cookie = `TOKEN=${token.data}; expires=${time};`;
        window.location.reload();
    }


    return (
        <form className="form"  >
            <div className="form-group">
                <label htmlFor="e-name">e-mail</label>
                <input value={semail} onChange={(e) => { setsEmail(e.target.value) }} className="form-control" required />
                <label htmlFor="Password">Password</label>
                <input value={spassword} onChange={(e) => { setsPassword(e.target.value) }} type="password" className="form-control" required />
                <button type="button" onClick={()=>postVariable(semail, spassword)} className="btn mt-3 btn-lg text-light btn-block btn-primary" >SIGN UP</button>
                <hr />
            </div>
        </form >
    )
}


export default SignUp;