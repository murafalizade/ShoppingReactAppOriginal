import React from 'react';
import { addCart  } from "../redux/actions/index";
import { connect } from "react-redux";
import jwt from "jwt-decode";
var url = jwt(document.cookie.substring(6)).id; 


const Cards = (props) => {

    return (
        <div className="card" style={{ width: " 18rem", margin: "15px" }}>
                <img style={{ width: "100%" }} className="card-img-top" src={props.img} alt="triple_cheeseburger_web" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.discripe}</p>
                <p>{props.price}</p>
                <button onClick={()=>{props.addCart(url,props.food)}} className="btn btn-outline-primary">ADD Cart</button>
                <a href={props.link} rel="noopener noreferrer" target="_blank"><button className="btn btnlink mt-2 btn-outline-primary">Go to Website</button></a>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        cart: state.Productive.cart    
    }
}

export default connect(
    mapStateToProps,
    { addCart })
    (Cards);