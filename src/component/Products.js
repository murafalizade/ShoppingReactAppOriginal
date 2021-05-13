import React from 'react';
import ProductCards from "./Products-card";
import FilterPanel from "./FilterPanel";
const Products = () => {

    return (
        <>
            <FilterPanel />
            <ProductCards />
        </>
    );
};

export default Products;