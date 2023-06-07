import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
    }
};

export const incrementCart = (id, quantity) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

        dispatch({ type: actionTypes.INCREMENT_CART, payload: { ...data, quantity } });
       localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const decrementCart = (id, quantity) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

        dispatch({ type: actionTypes.DECREMENT_CART, payload: { ...data, quantity } });
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