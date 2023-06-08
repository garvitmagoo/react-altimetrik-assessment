import { useEffect } from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import ProductDetail from "../components/Product/ProductDetail";
import ActionItem from "../components/Product/ActionItem";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  error: {
    color: "red",
    padding: "12px 8px",
    textAlign: "center",
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
}));

const DetailView = () => {
  const classes = useStyles();
  const { id } = useParams();

  const getProduct = useSelector((state) => state.getProductDetails);
  const { product, error } = getProduct;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Box className={classes.component}>
      <Box></Box>
      {error && error.data ? (
        <div className={classes.error}>
          There was a error fetching the request. Pleae try again later
        </div>
      ) : (
        product &&
        Object.keys(product).length && (
          <Grid container className={classes.container}>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={8}
              xs={12}
              className={classes.rightContainer}
            >
              <Typography>{product.title}</Typography>
              <Typography>
                <span className={classes.price}>
                  $
                  {(
                    (product.price * (100 - product.discountPercentage)) /
                    100
                  ).toFixed(2)}
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className={classes.greyTextColor}>
                  <strike>${product.price}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>
                  {product.discountPercentage}% off
                </span>
              </Typography>
              <ProductDetail product={product} />
            </Grid>
          </Grid>
        )
      )}
    </Box>
  );
};

export default DetailView;
