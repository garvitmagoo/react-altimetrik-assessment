import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';
  
describe("Components/Header/Header", () => {
  //let store;

test("renders Header item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

});

});