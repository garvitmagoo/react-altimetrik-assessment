import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
//import configureStore from 'redux-mo'

describe("routes/App", () => {
  //let store;

  const initialState = {};

  //    store = mockS

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
 
    });
});