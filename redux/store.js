import { createStore, combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import TodoReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = persistReducer(persistConfig, TodoReducer);

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
