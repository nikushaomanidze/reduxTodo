import React, { useState } from "react";
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
  console.log(state);

  const AddList = (id, title) => {
    dispatch({ type: "ADD_TODO", title: title, id: id });
    setTitle("");
  };
  const DeleteList = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>hello</Text> */}
      <TextInput
        style={styles.textInput}
        placeholder="please add players name"
        placeholderTextColor="#6E7FAA"
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={(text) => setTitle(text)}
        onEndEditing={() => AddList(Math.random() * 999, title)}
      />
      <FlatList
        data={state}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.ViewStyle}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <TouchableOpacity onPress={(item) => DeleteList(item.id)}>
              <Text style={{ fontSize: 50 }}>-</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "100%",
          height: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, letterSpacing: 3, fontWeight: "bold" }}>
          next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "green",
  },
  textInput: {
    marginTop: 30,
    backgroundColor: "#B2AFAF",
    width: "90%",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
  },
  ViewStyle: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    marginVertical: 20,
    width: 300,
    height: 60,
    borderRadius: 10,
  },
});
