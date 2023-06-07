import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CustomButtons from "./CustomButtons";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';
  
describe("Components/Header/CustomButtons", () => {
  //let store;

test("renders cart item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CustomButtons />
      </BrowserRouter>
    </Provider>
  );

});

});