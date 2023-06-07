import React, { useContext } from "react";
import { makeStyles, Box, Typography, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { languageOptions } from "../../languages";
import { LanguageContext } from "../../context/Language";
import { Text } from '../../context/Language';

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex"
  },
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 12,
      marginLeft: 12,
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: 12,
      alignItems: "center",
    }},
  
}));

const CustomButtons = () => {
  const classes = useStyle();
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  const cartDetails = useSelector((state) => state.cart);
  console.log(cartDetails)
  const { cartItems } = cartDetails;
  let total = 0;
  cartItems.map((item)=>{
    total += item.cartQuantity
    return total
  })


  return (
    <Box className={classes.wrapper}>
      <Link to="#">
        <Typography style={{ marginTop: 2 }}>
          <select onChange={handleLanguageChange} value={userLanguage}>
            {Object.entries(languageOptions).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={total? total: '0'} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}><Text tid={'Cart'} /></Typography>
      </Link>
    </Box>
  );
};

export default CustomButtons;
