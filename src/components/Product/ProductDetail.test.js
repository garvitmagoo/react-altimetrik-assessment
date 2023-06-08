import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

describe("Components/Category/ProductDetail", () => {
  //let store;

  const props = {
    product :  {
      id: "1",
      title: 'title',
      price: '100',
      description: 'description',
      thumbnail: "1.jpg",
    },
   
  };

  test("renders ProductDetail item", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductDetail {...props} />
        </BrowserRouter>
      </Provider>
    );

  });
});
