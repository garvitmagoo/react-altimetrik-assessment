import { Box, makeStyles } from '@material-ui/core';
import NavBar from '../Components/Home/NavBar';
import Slide from '../Components/Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts  } from '../redux/actions/productActions';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    const getAllProducts = useSelector(state => state.getProducts);
    const { products} = getAllProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <> 
            <NavBar products={products} />
            <Box className={classes.component}>
                 <Slide
                    data={products} 
                    title='Products'
                    timer={false} 
                    multi={true} 
                />
                
            </Box>
        </>
    )
}

export default Home;