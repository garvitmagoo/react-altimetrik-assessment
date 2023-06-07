import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import GroupButton from "./GroupButton";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

describe("components/Cart/GroupButton", () => {
  //let store;

  const props = {
    item: {
      id: "1",
      cartQuantity: "1",
    },
    handleDecrement: jest.fn(),
    handleIncrement: jest.fn(),
  };

  test("renders cart item", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GroupButton {...props} />
        </BrowserRouter>
      </Provider>
    );

    const add = screen.getByText("+");
    fireEvent.click(add);
  
    const remove = screen.getByText("-");
    fireEvent.click(remove);
  });
});
