import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Slide from "./Slide";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';
  
describe("components/Home/Slide", () => {
  //let store;

    //const initialState = {};
    const props = {
        data : [{
            id: '1',
            thumbnail: 'abc.jpg',
            title:'Test Product',
            description: '20',
            price: 100,
        }],
        title: 'title'
    }
  //    store = mockS

test("renders Slide item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Slide {...props} />
      </BrowserRouter>
    </Provider>
  );

    });
});