import * as actionTypes from '../constants/cartConstants';
const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
    cartItems:  cart ? cart : [],
}



export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find(product => product.id === item.id);
            
            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map(product => product.id === item.id ? {...product,
                    cartQuantity: product.cartQuantity + 1} : product)
                }
            } else {
                item.cartQuantity = 1
                 let a =  { ...state, cartItems: [...state.cartItems, item]}
                return a;
            }
        case actionTypes.INCREMENT_CART:
            const incrementitem = action.payload;
                return {
                    ...state, cartItems: state.cartItems.map(product => product.id === incrementitem.id ? {...product,
                    cartQuantity: product.cartQuantity + 1} : product)
                }
        case actionTypes.DECREMENT_CART:
            const decrementtitem = action.payload;
                        return {
                            ...state, cartItems: state.cartItems.map(product => product.id === decrementtitem.id ? {...product,
                            cartQuantity: product.cartQuantity - 1} : product)
                        }
        case actionTypes.REMOVE_FROM_CART:
             let s =  {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
            return s;

        default:
            return state;
    }
}