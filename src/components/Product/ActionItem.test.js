import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ActionItem from "./ActionItem";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

describe("Components/Product/ActionItem", () => {
  //let store;

  const props = {
    products :  {
      id: "1",
      title: 'title',
      price: '100',
      description: 'description',
      thumbnail: "1.jpg",
    },
   
  };

  test("renders ActionItem item", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ActionItem {...props} />
        </BrowserRouter>
      </Provider>
    );

    const addtocart = screen.getByText('Add to Cart')
    fireEvent.click(addtocart)


  });
});
