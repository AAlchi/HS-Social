import { combineReducers } from "redux";

let sideBarIsOpen = true;

if (window.innerWidth < 780) {
  sideBarIsOpen = false;
} else {
  sideBarIsOpen = true;
}

export const initialState = {
  isSidebarOpen: sideBarIsOpen,
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  someSlice: phoneReducer,
});

export default mainReducer;
