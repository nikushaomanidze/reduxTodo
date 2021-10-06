import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
export default function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log(state);


  const AddList = (title) => { 
    if (title.length > 4)
     dispatch({ type: "ADD_TODO", payload: title });
    setTitle("")
    }
    
  const DeleteList = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ტექსტის შეყვანა */}
      <TextInput
        style={styles.textInput}
        style={[{  borderColor:  title.length  > 4 ||   title.length === 0 ? 'white' : 'red' }, styles.textInput]}
        placeholder="add min 5 letters..."
        placeholderTextColor="#6E7FAA"
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={(text) => setTitle(text)}
        onEndEditing={() => AddList(title)}
        minLength={5}
      />

    {/* აითემების გამოტანა */}
      {state.teamList.length === 0 ? (
        <View style={{ backgroundColor: "blue" }}>
          <Text style={{ fontSize: 20 }}>
            click textInput and add teams name
          </Text>
        </View>
      ) : (
        <FlatList
          data={state.teamList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.ViewStyle}>
              <Text style={{ fontSize: 20 }}>{item.title}</Text>
              <TouchableOpacity onPress={() => DeleteList(item.id)}>
                <Text style={{ fontSize: 50 }}>-</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* ნავიგაციის ღილაკი */}
      {state.teamList.length < 2 ? (
        <TouchableOpacity style={styles.TouchableStyle1}>
          <Text style={{ fontSize: 30, letterSpacing: 3, fontWeight: "bold" }}>
            next
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.TouchableStyle2}>
          <Text style={{ fontSize: 30, letterSpacing: 3, fontWeight: "bold" }}>
            next
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "space-between",
  },
  textInput: {
    marginTop: 30,
    backgroundColor: "#B2AFAF",
    width: "90%",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
    borderWidth:2,
  },
  ViewStyle: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    marginVertical: 20,
    width: 340,
    height: 60,
    borderRadius: 10,
  },
  TouchableStyle1: {
    opacity: 0.5,
    backgroundColor: "red",
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  TouchableStyle2: {
    opacity: 1,
    backgroundColor: "red",
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
