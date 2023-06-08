import { Box, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { Text } from "../../context/Language";
import { getCategoryDetails } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    margin: "55px 130px 0 130px",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  error: {
    color: "red",
    padding: "12px 8px",
    textAlign: "center",
  },
  container: {
    padding: "12px 8px",
    textAlign: "center",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: "capitalize",
    fontFamily: "inherit",
  },
}));

const NavBar = () => {
  const classes = useStyle();

  const getCategories = useSelector((state) => state.getCategory);
  const { categories, error } = getCategories;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategoryDetails());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    history.push(`/products/category/${e.target.value}`);
  };

  return error && error.data ? (
    <div className={classes.error}>
      There was a error fetching the request. Pleae try again later
    </div>
  ) : (
    <Box className={classes.component}>
      <div className={classes.label}>
        <Text tid={"Categories"} /> :{" "}
      </div>
      <select
        data-testid="select"
        onChange={handleCategoryChange}
        value={"all"}
      >
        <option key="Select" value="all">
          Select
        </option>
        {categories.map((temp) => (
          <option key={temp} value={temp}>
            {temp}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default NavBar;
