import { useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import CategoryItem from "../components/Category/CategoryItem";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";
import { getCategoryDetails } from "../redux/actions/productActions";
import { useHistory } from "react-router-dom";
import { Text } from "../context/Language";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
  },
  heading: {
    padding: "25px",
    textTransform: "capitalize",
  },
  productitem: {
    padding: 15,
  },
  image: {
    width: "100%",
    maxHeight: 250,
  },
  container: {
    background: "#FFFFFF",
    width: "100%",
    // margin: '0 80px',
    display: "flex",
  },
}));

const CategoryView = () => {
  const classes = useStyles();
  const { category } = useParams();
  const dispatch = useDispatch();

  const getCategories = useSelector((state) => state.getCategory);
  const { categories } = getCategories;
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategoryDetails());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    history.push(`/products/category/${e.target.value}`);
  };

  useEffect(() => {
    if (category === "all") {
      dispatch(listProducts());
    } else {
      dispatch(listProducts(category));
    }
  }, [dispatch, category]);

  const getProducts = useSelector((state) => state.getProducts);
  const { products, error } = getProducts;

  return (
    <div>
      <h1 className={classes.heading}>
        {category && category === "all" ? "Products" : category}
      </h1>

      <div>
        <div className={classes.label}>
          <Text tid={"Categories"} /> :
          <select onChange={handleCategoryChange} value={"all"}>
            <option key="Select" value="all">
              Select
            </option>
            {categories.map((temp) => (
              <option key={temp} value={temp}>
                {temp}
              </option>
            ))}
          </select>
        </div>
        {error && error.data ? (
          "There was a error fetching the request. Pleae try again later"
        ) : (
          <Grid container className={classes.container}>
            {products && products.length > 0 ? (
              <CategoryItem products={products} />
            ) : (
              "No Products in this category"
            )}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
