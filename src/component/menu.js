import React from 'react';
import { useState } from 'react';
import SearchIcon from "./assets/icons/searchIcon";
import AccountIcon from "./assets/icons/accountIcon";
import CartIcon from "./assets/icons/cartIcon";
import {connect} from "react-redux";
import {changeSearchText} from "../redux/actions"
import MenuBarIcon from "./assets/icons/menuBarIcon";


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [searchbar, setSearchbar] = useState("All");
    // useEffect(()=>{
    //     if (props.changeSearchText!='')
    //         setSearchbar(props.changeSearchText);
    // })
    // const searctScript =(search)=>{
    //     let newsearch = search.toLowerCase();
    // }
    return (
        <nav className="navbar-light  navbar  navbar-expand-xl">
            <a href="/" className="fx navbar-brand">THIS F00D</a>
            <div className="acc fx ml-auto">
                <a href="/profile" ><span><AccountIcon /></span><span className="d-md-inline d-none" >Profile</span></a >
                <a href="/cart" ><span><CartIcon /></span><span className="d-md-inline d-none">Cart</span></a >
                <span onClick={() => { setIsOpen(!isOpen); }} style={{ marginRight: "0" }}>
                    <MenuBarIcon />
                </span>
            </div>
            <form  className="form">
                <input value={props.searchText} onChange={(e)=>{props.changeSearchText(e.target.value);}} className="forsearch" placeholder="Foods , Restaurants and Catogories " />
                <button type="button" id="search" className="btn btn-small">
                    <a href={`/products/${props.searchText}`}> <SearchIcon /></a>
                </button>
            </form>
            <div style={isOpen ? { display: "block" } : null} className="secret-menu">
                <span onClick={() => { setIsOpen(!isOpen); }} id="close" style={{ cursor: "pointer" }}>X</span>
                <h3>
                    Menu
                </h3>
                <div>
                    <a className="px-2 mb-3" href="/products/burger">Burgers</a>
                    <a className="px-2 mb-3" href="/products/pizza">Pizzas</a>
                    <a className="px-2 mb-3" href="/products/sushi">Sushis</a>
                    <a className="px-2 mb-3" href="/products/frie">Fries</a>
                    <a className="px-2 mb-3" href="/products/salad">Salads</a>
                    <a className="px-2 mb-3" href="/products/desert">Deserts</a>
                    <a className="px-2 mb-3" href="/products/souce">Souces</a>
                    <a className="px-2 mb-3" href="/products/drink">Drinks</a>
                    <a className="px-2 mb-3" href="/products/coffie&tea">Coffeis and Teas</a>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps=(state)=>{
    return{
        searchText: state.SeacrhText.search
    }
}

export default connect(
    mapStateToProps,
    {changeSearchText})
    (Menu);