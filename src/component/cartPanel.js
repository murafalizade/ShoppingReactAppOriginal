import React, { useEffect , useState } from 'react';
import Cart from './cart';
import { clearCart } from "../redux/actions";
import { connect } from "react-redux";
import jwt from "jwt-decode";
import axios from "axios";


const CartPanel = (props) => {

    const [price, setPrice] = useState(0.0);
    const [userName,setUserName] = useState("");

    const totalPrice = (data) => {
        let total = price;
        if(data!==null){
            data.map(item => (
                total += item.product_price
            ))
        }
        setPrice(total);
    }

    useEffect(async () => {
        if (document.cookie.substring(6) !== "") {
            const url = jwt(document.cookie.substring(6));
            console.log(userName);
            console.log(url.id)
            const user = await axios.get(`/api/v1/users/${url.id}`);
            setUserName(user.data.name);
        }
    }, [])
    return (<div >
      {
        userName ?
            <>        
                <h1>Welcome {userName}</h1>
                <div style={{ backgroundColor: "white" }}>
                    <h5>Order details</h5>
                    <Cart calc={totalPrice} />
                    <hr />
                    <h5>Total cost : {price.toFixed(2)} AZN</h5>
                </div>
                <button onClick={() => { props.clearCart();window.location.reload(false) }} className="btn btn-block my-3 bg-danger btn-danger">Clear</button></>
            : 
            <p>Please <a href="/profile">login</a></p>
        }

    </div>

    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.Productive.cart
    }
}



export default connect(mapStateToProps, { clearCart })(CartPanel);