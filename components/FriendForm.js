import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from "react-native";

export default function FriendForm({ onNewFriend = f => f, onCloseModal = f => f }) {
  const [inputValue, setValue] = useState("");
  const input = useRef();
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue}
          onChangeText={text => setValue(text)}
          autoCapitalize="none"
          placeholder="first name"
        />
        <Button
          title="add"
          onPress={() => {
            console.log("CLOSE MODAL FriendForm");
            onCloseModal();
            input.current.blur();
            onNewFriend(inputValue);
            setValue("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 2,
    top: 50,
    flex: 1,
  },
  formContainer: {
    margin: 20,
    marginTop: 50,
    flexDirection: "row",
    alignSelf: 'flex-end'
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5
  },
});
