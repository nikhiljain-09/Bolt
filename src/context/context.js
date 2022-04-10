import React, {createContext, useReducer} from 'react';
import Routes from '../routes/routes';
import {CartReducer, cart} from '../reducers/cart_reducers';
import {productList, categories} from '../dummyData/data';

const MainStoreContext = createContext();

function AppContext(children) {
  const [cartState, dispatch] = useReducer(CartReducer, cart);
  return (
    <MainStoreContext.Provider
      value={{
        cartState,
        dispatch,
        productList,
        categories,
      }}>
      <Routes />
    </MainStoreContext.Provider>
  );
}

export {AppContext, MainStoreContext};
