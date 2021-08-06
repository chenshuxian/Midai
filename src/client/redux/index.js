import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import user from "./users/users.reducer";
import activity from "./Activitys/Activitys.reducer";
import common from "./Commons/Commons.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  user,
  activity,
  common,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
