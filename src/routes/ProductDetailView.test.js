import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetailView from "./ProductDetailView";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
//import configureStore from 'redux-mo'

describe("routes/ProductDetailView", () => {
  //let store;

  const initialState = {};

  //    store = mockS

test("renders ProductDetailView  link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductDetailView />
      </BrowserRouter>
    </Provider>
  );
 
    });
});