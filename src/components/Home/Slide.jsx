import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { Text } from '../../context/Language';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        background: '#FFFFFF'
    }, 
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    image: {
        width: 'auto',
        height: 150
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    wrapper: {
        padding: '25px 15px'
    },
    
}));

const MultiSlide = ({ data, title }) => {
    const classes = useStyle();
   
    
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}><Text tid={title} /></Typography>
                
                 <Link className={classes.button} key={'all'} to={`/products/category/all`} style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="primary" className={classes.button}><Text tid={'View All'} /></Button>
                </Link>

            </Box>
            <Divider />
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    data.map(temp => (
                        <Link key={temp.id} to={`product/${temp.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={temp.thumbnail} className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{temp.title}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{temp.price}</Typography>
                                 <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{temp.description}</Typography>
                </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    )
}

const Slide = (props) => {
    return (
        <>
            {
                props.multi === true ? <MultiSlide {...props} /> : ''      
            }
        </>
    )
}

export default Slide;