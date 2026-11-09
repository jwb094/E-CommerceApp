import { createContext, useContext, useReducer } from "react";

import { basketReducer, initialBasketState } from "../reducer/basketReducer";

export const BasketContext = createContext(undefined);

export function BasketProvider({ children }) {
  const [state, dispatch] = useReducer(basketReducer, initialBasketState);   

    return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
}

export function  useBasketContext() { 
    const context = useContext(BasketContext);
    
    if (!context) {
        throw new Error("useBasket must be used within a BasketProvider");
    }
    return context;
}