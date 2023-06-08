import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryView from "./CategoryView";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
//import configureStore from 'redux-mo'
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }));

describe("routes/CategoryView", () => {
  //let store;
  const props = {
    match :  {
      params: {}
    },
}

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CategoryView {...props} />
      </BrowserRouter>
    </Provider>
  );

  const select = screen.getByTestId('select')
  fireEvent.change(select, { target: { value: 'all' } })
  expect(mockHistoryPush).toHaveBeenCalledWith('/products/category/all');
 
    });
});