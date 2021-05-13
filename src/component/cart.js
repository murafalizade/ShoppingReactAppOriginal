import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteCart, addCart, getAllCart} from "../redux/actions";
import jwt from "jwt-decode";
const url = jwt(document.cookie.substring(6)).id; 



const Cart = (props) => {

    useEffect(() => {
        console.log(url)
        props.getAllCart(url);
    }, []);
    useEffect(() => {
        const data = props.cart;
        props.calc(data);
    },[props.cart])

    return (
        <table className="table" style={{ width: "80%", height: "80px" }} >
            <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Quantify</th>
                    <th className="text-center">Price</th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.cart!==[]?
                    props.cart.map(item => (
                        <tr key={item._id}> 
                            <th className="text-center">{item._id}</th>
                            <td className="text-center">
                                <img style={{ width: "50px", height: "50px" }} src={item.product_img} alt={item.name} />
                            </td>
                            <td className="text-center">
                                {item.product_name}
                            </td>
                            <td className="text-center">
                               <span className="counter">-</span> {item.quantity} <span className="counter">+</span>
                            </td>
                            <td className="text-center">
                                {item.product_price}
                            </td>
                            <td className="text-center">
                                <button className="btn btn-outline-secondary" onClick={() => { props.deleteCart(url,item._id) }}>X</button>
                            </td>
                            <td className="text-center">
                               <a href={item.product_real_link}> <button className="btn btn-outline-dark" >Go</button></a>
                            </td>
                        </tr>
                    )) :
                    <h2>Your Cart is empty</h2>
                }
            </tbody>
            
        </table>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.Productive.cart
    }
}


export default connect(
    mapStateToProps,
    { deleteCart, addCart, getAllCart })
    (Cart);