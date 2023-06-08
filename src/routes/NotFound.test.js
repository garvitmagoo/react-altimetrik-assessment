import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
//import configureStore from 'redux-mo'

describe("routes/NotFound", () => {
  //let store;

test("renders  NotFound link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>
  );
 
    });
});