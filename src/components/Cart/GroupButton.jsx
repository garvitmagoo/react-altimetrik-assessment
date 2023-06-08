import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import {  useDispatch } from 'react-redux';
import { incrementCart, decrementCart, removeFromCart } from "../../redux/actions/cartActions";

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button :{
        borderRadius: '50%'
    }
})

const GroupedButton = ({item}) => {
    const classes = useStyle();
    const dispatch= useDispatch()
    const [ counter, setCounter ] = useState(item.cartQuantity);
   
    const handleIncrement = (item) => {
        setCounter(counter => counter + 1 );
        dispatch(incrementCart(item,1))
    };

    const handleDecrement = (item) => {
        if(counter === 1){
           dispatch(removeFromCart(item.id));
        } else{
            dispatch(decrementCart(item,1))
            setCounter(counter => counter - 1 );
        }
        
    };

    return (
        <ButtonGroup key={item.id} className={classes.component} >
            <Button className={classes.button} onClick={() => handleDecrement(item)} >-</Button>
            <Button disabled>{counter}</Button>
            <Button className={classes.button} onClick={() => handleIncrement(item)}>+</Button>
        </ButtonGroup>
    );
}

export default GroupedButton;