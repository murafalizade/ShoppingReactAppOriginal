const INITIAL_STATE = {
    Foods: [
        //     _id: 3,
        //     name: "Göbələkli Pizza",
        //     company_name: "PizzaHuts",
        //     catogory: "pizza",
        //     img: "https://az.pizzahut.ru/img/pizza/mushroom.png",
        //     discripe: "Tomat sousu, pendir, göbələk",
        //     price: 7.00
    ],
    fs: [],
    cart: [],
}


const Productive = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return {
                ...state, fs: action.payload
            }
        case "GET_PRODUCTS_FAIL":
            return {
                ...state, message: action.payload
            }
        case "ADD_CART":
            return {
                ...state, cart: [...state.cart, action.payload]
            };
        case "GET_ALL_CART":
            return {
                ...state, cart:action.payload
            }
        case "DELETE_CART":
            return  state.cart
        case "CLEAR_CART":
            return {
                ...state, cart: []
            }
        case "FILTER_PRODUCT_FOR_BREND":
            return {
                ...state, fs: action.payload.product
            };
        case "FILTER_FOR_PRICE":
            return {
                ...state, fs: action.payload.product
            }
        case "FILTER_PRODUCT_FOR_CATOGORY":
            return {
                ...state, fs: action.payload.product
            }
        default:
            return state;
    }

}

export default  Productive;