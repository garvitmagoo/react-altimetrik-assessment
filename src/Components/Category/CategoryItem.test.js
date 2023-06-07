import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CategoryItem from "./CategoryItem";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

describe("Components/Cart/CategoryItem", () => {
  //let store;

  const props = {
    products : [ {
      id: "1",
      title: 'title',
      price: '100',
      description: 'description',
      thumbnail: "1.jpg",
    }],
   
  };

  test("renders cart item", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CategoryItem {...props} />
        </BrowserRouter>
      </Provider>
    );

  });
});
