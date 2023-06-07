import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    productitem:{
        padding:15
    },
    image: {
        width: '100%',
        maxHeight: 250
    },
    container: {
        background: '#FFFFFF',
        width: '100%',
        // margin: '0 80px',
        display: 'flex',
        
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));


const CategoryItem = ({products}) => {
    const classes = useStyles();
   
    return(
        products.map(temp => (
            <Grid key={temp.id}  item lg={4} md={4} sm={12} xs={12}>
                <div  className={classes.productitem}>

                <Link key={temp.id} to={`/product/${temp.id}`} style={{textDecoration: 'none'}}>
                <Box textAlign="center" className={classes.wrapper}>
                    <img src={temp.thumbnail} className={classes.image} alt="" />
                    <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{temp.title}</Typography>
                    <Typography className={classes.text} style={{ color: 'green' }}>{temp.price}</Typography>
                    <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{temp.description}</Typography>
                </Box>
            </Link>
            </div>
            </Grid>
        ))
    )
}

export default CategoryItem