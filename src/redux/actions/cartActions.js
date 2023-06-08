import * as actionTypes from '../constants/cartConstants';

export const addToCart = (product, quantity) => async (dispatch, getState) => {
    try { 
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...product, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
    }
};

export const incrementCart = (product, quantity) => async (dispatch, getState) => {
    try { 
        dispatch({ type: actionTypes.INCREMENT_CART, payload: { ...product, quantity } });
       localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const decrementCart = (product, quantity) => async (dispatch, getState) => {
    try { 
      
        dispatch({ type: actionTypes.DECREMENT_CART, payload: { ...product, quantity } });
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
   
    } catch (error) {
        console.log('Error while calling cart API');
    }
};



export const removeFromCart = (id) => (dispatch, getState) => {
   dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};