import React, { createContext, useReducer } from "react";
import { UserReducer } from "./context";
export const UserContext = createContext<any>({
  cart: [],
  isLogin: false,
});

const initialState: any = {
  cart: [],
  isLogin: false,
};

const UserContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const addToCart = (payload: any) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const contextValues = {
    addToCart,
    ...state,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
