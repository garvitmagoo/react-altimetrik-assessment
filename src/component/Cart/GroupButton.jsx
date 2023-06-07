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
    const handleIncrement = (id) => {
        setCounter(counter => counter + 1 );
        dispatch(incrementCart(id,1))
    };

    const handleDecrement = (id) => {
        if(counter === 1){
           dispatch(removeFromCart(id));
        } else{
            dispatch(decrementCart(id,1))
    
        }
        
        setCounter(counter => counter - 1 );
    
    };

    return (
        <ButtonGroup key={item.id} className={classes.component} >
            <Button className={classes.button} onClick={() => handleDecrement(item.id)} disabled={counter === 0}>-</Button>
            <Button disabled>{counter}</Button>
            <Button className={classes.button} onClick={() => handleIncrement(item.id)}>+</Button>
        </ButtonGroup>
    );
}

export default GroupedButton;