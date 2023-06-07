import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';
  
describe("components/Header/Search", () => {
  //let store;
 
test("renders Search item", () => {


  render(
    <Provider store={store}>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </Provider>
  );

});

});