import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
//import configureStore from 'redux-mo'

describe("routes/Cart", () => {
  //let store;
  const props = {
    match :  {
      params: {}
    },
}

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart {...props} />
      </BrowserRouter>
    </Provider>
  );
 
    });
});