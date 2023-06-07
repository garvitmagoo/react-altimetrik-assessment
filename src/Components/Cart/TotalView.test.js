import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TotalView from "./TotalView";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

describe("Components/Cart/TotalView", () => {
  //let store;

  const props = {
    cartItems : [ {
      id: "1",
      price: '100',
      cartQuantity: "1",
      discountPercentage: '100'
    }],
   
  };

  test("renders cart item", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TotalView {...props} />
        </BrowserRouter>
      </Provider>
    );

  });
});
