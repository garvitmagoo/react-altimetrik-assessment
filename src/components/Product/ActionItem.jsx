import { Button, Box, makeStyles } from '@material-ui/core';
import { ShoppingCart as Cart } from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import {  useDispatch } from 'react-redux';


const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '80%'
    },
    button: {
        width: '90%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}));

const ActionItem = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
        
    const dispatch = useDispatch();

    const addItemToCart = (product) => {
        dispatch(addToCart(product, 1));
        history.push('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product && product.thumbnail  ? product.thumbnail : ''} className={classes.productImage} alt="" /><br />
            <Button onClick={() => addItemToCart(product)} className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
            {/* <Button onClick={() => buyNow()} className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button> */}
        </Box>
    )
}

export default ActionItem;