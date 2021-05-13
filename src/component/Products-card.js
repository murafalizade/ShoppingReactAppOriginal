import React, { useEffect } from 'react';
import Cards from './Cards';
import { connect } from "react-redux";
import { getAll } from "../redux/actions";
import {useParams} from "react-router-dom";

const ProductCards = (props) => {

    const {brend} = useParams()
    console.log(props.data)
    useEffect(() => {
        props.getAll(brend);
    }, [])
    return (
        <div style={{ gridColumn: "4/-1", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(264px,1fr))", gridGap: "0 2.4rem" }} className="col-md-10 col-12 product-card">
            {
                    props.data.map(product => (
                        <Cards key={product._id}
                            catogory={product.product_catogory}
                            food={product}
                            title={product.product_name}
                            link={product.product_real_link}
                            img={product.product_img}
                            discripe={product.product_description}
                            price={product.product_price}
                        />
                    ))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.Productive.fs
    }
}


export default connect(mapStateToProps, { getAll })(ProductCards);