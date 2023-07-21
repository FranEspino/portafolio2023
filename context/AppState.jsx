import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";

export const AppState = (props) => {

  const initialState = {
    dark_mode: false,

  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setIsDatkMode = (type) => {
    dispatch({
      type: 'DARK_MODE',
      payload: type,
    });
  } 

  return (
    <AppContext.Provider
      value={{
        ...state,
        setIsDatkMode
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};