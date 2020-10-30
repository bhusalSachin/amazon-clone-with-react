export const initialState = {
  basket: [],
  user: null,
};

// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);
export const getBasketTotal = (basket) =>
  basket
    .map((item) => item.price)
    ?.reduce((total, amount) => total + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
      break;

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
