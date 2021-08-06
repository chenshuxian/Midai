import { GET_ACTIVITY_LIST } from "../actionTypes";
import { activityList } from "../../components/data";

const initState = {
  activityList: activityList,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ACTIVITY_LIST: {
      const list = { ...state.activityList };
      list.data.push(...action.payload.data);
      return {
        activityList: list,
      };
    }
    default:
      return state;
  }
};

export default reducer;
