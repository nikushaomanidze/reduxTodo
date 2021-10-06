import * as React from "react";
import "react-native-gesture-handler";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

export default function App() {
  return (

    //hello everyone 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AddTodo />
      </PersistGate>
    </Provider>

  );
}


// import React, { useState, useEffect } from 'react'
// import { Text, View } from 'react-native'

// export default App = () => {

//   const [secs, setSecs] = useState(400)


//   useEffect(() => {
//     const timerId = setInterval(() => {
//       if (secs <= 0) {
//         alert('times up')
//       }
//       else setSecs(s => s - 1)
//     }, 1000)
//     return () => clearInterval(timerId);
//   }, [secs])


//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 40 }}>
//         {secs < 10 && 0}{secs}
//       </Text>

//     </View>
//   )
// }
