import {cartConstants} from '../constants/cartConstants';

const cart = [];

const CartReducer = (state = cart, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      let tempCart = state.filter(item => item.id === action.payload.id);
      if (tempCart < 1) {
        state = [
          ...state,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      } else {
        state = state;
      }
      break;

    case cartConstants.REMOVE_CART:
      state = state.filter(item => item.id !== action.payload.id);

      break;

    case cartConstants.INCREASE:
      state = state.map(item => {
        if (item.id === action.payload.id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });

      break;

    case cartConstants.DECREASE:
      state = state.map(item => {
        if (item.id === action.payload.id) {
          return {...item, quantity: item.quantity - 1};
        }
        return item;
      });

      break;

    case cartConstants.EMPTY_CART:
      state = [];

      break;
    default:
      break;
  }
  return state;
};

export {cart, CartReducer};
