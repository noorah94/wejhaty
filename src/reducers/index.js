import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import signIn from "./login";
import setOrder from "./order";

const reducers = combineReducers({ signIn, setOrder });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
