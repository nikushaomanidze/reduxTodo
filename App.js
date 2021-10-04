import * as React from "react";
import "react-native-gesture-handler";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AddTodo />
      </PersistGate>
    </Provider>
  );
}
