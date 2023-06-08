import { Box, makeStyles } from "@material-ui/core";
import NavBar from "../components/Home/NavBar";
import Slide from "../components/Home/Slide";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts } from "../redux/actions/productActions";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Home = () => {
  const classes = useStyle();

  const getAllProducts = useSelector((state) => state.getProducts);
  const { products, error } = getAllProducts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        {error && error.data ? (
          "There was a error fetching the request. Pleae try again later"
        ) : (
          <Slide data={products} title="Products" timer={false} multi={true} />
        )}
      </Box>
    </>
  );
};

export default Home;
