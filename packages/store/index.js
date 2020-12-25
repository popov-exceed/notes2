import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import localUtils from "./localUtils";

export const useDispatch = localUtils.useDispatch;
export const useSelector = localUtils.useSelector;

const persistConfig = {
  key: "editor",
  storage,
  whitelist: ["editor"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default () => {
  let store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store);
  return { store, persistor };
};

// const store = createStore(persistedReducer, {}, middleware);
//   let persistor = persistStore(store);

// export default  { store, persistor };
