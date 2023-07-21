import {
    DARK_MODE
  } from "./AppTypes";
  
  export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case DARK_MODE:{
        return {
        ...state,
        dark_mode: payload
        }
      }
      default:
        return state;
    }
  };