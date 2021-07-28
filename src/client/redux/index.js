import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import user from "./users/users.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
// const rootReducer = combineReducers({
//     // ...your other reducers here
//     // you have to pass formReducer under 'form' key,
//     // for custom keys look up the docs for 'getFormState'
//     user,
//     form: formReducer
// })
const store = createStore(user, composeWithDevTools(applyMiddleware(thunk)));

export default store;
