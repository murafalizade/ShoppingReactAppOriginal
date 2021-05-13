import React from 'react';



const CatogoryList = (props) => {
    return (
        <div className="catogories">
            <a className="cato" href="/products/burger">Burgers</a>
            <a className="cato" href="/products/pizza">Pizzas</a>
            <a className="cato" href="/products/sushi">Sushis</a>
            <a className="cato" href="/products/frie">Fries</a>
            <a className="cato" href="/products/salad">Salads</a>
            <a className="cato" href="/products/desert">Deserts</a>
            <a className="cato" href="/products/souce">Souces</a>
            <a className="cato" href="/products/drink">Drinks</a>
            <a className="cato" href="/products/coffie&tea">Coffeis and Teas</a>
        </div>
    );
};



export default CatogoryList;