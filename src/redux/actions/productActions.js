import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProducts = (category) => async (dispatch) => {
    try {
        if(!category){
            const  {data}  = await axios.get(`${actionTypes.GET_BASE_URL}/products`);
            dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
        } else{
            const  {data}  = await axios.get(`${actionTypes.GET_BASE_URL}/products/category/${category}`);
            dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
        
        }
  
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getCategoryDetails = () => async (dispatch) => {
    try {
        const  {data} = await axios.get(`${actionTypes.GET_BASE_URL}/products/categories`);
        dispatch({ type: actionTypes.GET_CATEGORY_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_CATEGORY_DETAILS_FAIL, payload: error.response});

    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const  {data} = await axios.get(`${actionTypes.GET_BASE_URL}/products/${id}`);
      
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};

export const removeProductDetails = () => (dispatch) => { 
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};
