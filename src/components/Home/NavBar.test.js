import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }));
  
describe("routes/NavBar", () => {
  //let store;

  const initialState = {};

  //    store = mockS

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );

  const select = screen.getByTestId('select')
  fireEvent.change(select, { target: { value: 'all' } })
  expect(mockHistoryPush).toHaveBeenCalledWith('/products/category/all');
 
    });
});