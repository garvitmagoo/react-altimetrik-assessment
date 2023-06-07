import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EmptyCart from "./EmptyCart";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';
  
describe("components/Cart/EmptyCart", () => {
  //let store;

test("renders cart item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <EmptyCart />
      </BrowserRouter>
    </Provider>
  );

});

});