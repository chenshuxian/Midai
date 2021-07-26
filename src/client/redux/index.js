import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import user from "./users/users.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    user,
    form: formReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
