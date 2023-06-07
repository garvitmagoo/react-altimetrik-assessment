import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store';
  
describe("Components/Cart/CartItems", () => {
  //let store;

    //const initialState = {};
    const props = {
        item : {
            id: '1',
            thumbnail: 'abc.jpg',
            title:'Test Product',
            discountPercentage: '20',
            price: 100,
        },
        removeItemFromCart: jest.fn()
    }
  //    store = mockS

test("renders cart item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartItem {...props} />
      </BrowserRouter>
    </Provider>
  );

  const remove = screen.getByText('Remove')
  fireEvent.click(remove)
    expect(props.removeItemFromCart).toHaveBeenCalled()
    });
});