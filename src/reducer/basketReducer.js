export const initialBasketState = {
  items: [],
};

export function basketReducer(state = initialBasketState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.product_id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + (action.payload.quantity ?? 1),
              }
            : item,
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.product_id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product_id !== action.payload.id,
        ),
      };
    case "CLEAR_BASKET":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
