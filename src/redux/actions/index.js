import axios from "axios";


export const getAllCart = (url) => dispatch => {
    if (url) {
        axios.get(`/api/v1/users/${url}/cart`).then(response => dispatch({
            type: "GET_ALL_CART",
            payload: response.data
        })).catch(error => dispatch({ type: "GET_ALL_CART", payload: error }));
    }
    else {
        dispatch({
            type: "GET_ALL_CART_EMPTY",
            payload: "please login and return this page"
        })
    }
}



export const addCart = (url, food) => dispatch => {
    axios.post(`/api/v1/users/${url}/cart`, food).then(response => dispatch({
        type: "ADD_CART",
        payload: response.data
    })).catch(err => dispatch({
        type: "ADD_CART_UNSUCCES",
        payload: err
    }))
}

export const deleteCart = (url, id) => dispatch => {
    axios.delete(`/api/v1/users/${url}/cart/${id}`).then(response => dispatch({ type: "DELETE_CART" })).catch(err => dispatch({ type: "DELETE_CART", payload: err }))
}


export const clearCart = () => {
    return {
        type: "CLEAR_CART",
        payload: ""
    }
}


export const changeSearchText = (values) => {
    return {
        type: "CHANGE_SEARCH_TEXT",
        payload: values
    }
}

export const getAll = (url) => dispatch => {
    if (url === "All") {
        console.log(document.cookie);
        axios.get("/api/v1/products")
            .then(response => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data }))
            .catch(error => dispatch({ type: "GET_PRODUCTS_FAIL", payload: "erorrr" }))
    }
    else {
        axios.get(`/api/v1/products/${url}`)
            .then(response => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data }))
            .catch(error => dispatch({ type: "GET_PRODUCTS_FAIL", payload: "erorrr" }))
    }
}


export const filterForPrice = (foods, sort) => dispatch => {
    console.log(foods,sort);
    dispatch({
        type: "FILTER_FOR_PRICE",
        payload: {
            sort: sort,
            product: sort === "lower" ? foods.sort((a, b) => a.product_price - b.product_price) :
                foods.sort((a, b) => a.product_price > b.product_price ? -1 : 1)
        }
    })
}



export const filterProductForBrend = (foods, brendName) => dispatch => {
    dispatch({
        type: "FILTER_PRODUCT_FOR_BREND",
        payload: {
            filter: brendName,
            product: foods.filter(item => item.compony_name === brendName)
        }
    })
}



export const filterProductForCatogory = (foods, catogoryName) => dispatch => {
    dispatch({
        type: "FILTER_PRODUCT_FOR_CATOGORY",
        payload: {
            product: foods.filter(item => item.product_catogory === catogoryName)
        }
    })
}