import { Box, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { Text } from '../../context/Language';
import { getCategoryDetails } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'40px',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'capitalize',
        fontFamily: 'inherit'
    }
}));

const NavBar = () => {
    const classes = useStyle();
    
    const getCategories = useSelector(state => state.getCategory);
     const { categories} = getCategories;
     const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(getCategoryDetails())
    }, [dispatch])
  

    const handleCategoryChange = e => {
        history.push(`/products/category/${e.target.value}`);
    }
   
    return (
        <Box className={classes.component}>
          <div className={classes.label}><Text tid={'Categories'} />  : </div>  
          <select data-testid="select" onChange={handleCategoryChange} value={'all'}>
           <option key='Select' value='all'>Select</option>
            {categories.map((temp) => (
              <option key={temp} value={temp}>
                {temp}
              </option>
            ))}
          </select> 
            {/* {
                categories.map(temp => (
                    <Link key={temp} to={`/products/category/${temp}`} style={{textDecoration: 'none'}}>
               
                    <Box key={temp} className={classes.container}>
                        <Typography className={classes.text}><Text tid={temp} /></Typography>
                    </Box>
                    </Link>
                ))
            } */}
        </Box>
    )
}

export default NavBar;