 export const initialState = {
    wishlist: [],
  };

export function wishlistReducer(state = initialState, action) {
  console.log("Wishlist Reducer Action:", action); // Log the action for debugging
  console.log("Current State:", state); // Log the current state for debugging
  switch (action.type) {
    // Add cases for wishlist actions
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.includes(action.payload.id)
          ? state.wishlist
          : [...state.wishlist, action.payload.id],
      };
      // Remove item from wishlist
      case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item !== action.payload.id
        ),
      };
      // Clear wishlist
      case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };
      // Default case to return the current state
    default:
      return state;
  }
}
