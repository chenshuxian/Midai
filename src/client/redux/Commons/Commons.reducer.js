import { SET_PAGE_POSITION } from "../actionTypes";

const initState = {
  page: "home",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PAGE_POSITION: {
      return {
        ...state,
        page: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
