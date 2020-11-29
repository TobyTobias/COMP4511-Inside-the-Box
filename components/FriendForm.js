import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { Icon } from 'react-native-elements';
import PrimaryButton from "./ui/PrimaryButton";
import { BodyText } from './StyledText';

export default function FriendForm({ onNewFriend = f => f, onCloseModal = f => f }) {
  const [inputValue, setValue] = useState("");
  const input = useRef();

  const addFriend = () => {
    console.log("ADD FRIEND");
    if (inputValue.trim() != "") {
      input.current.blur();
      onNewFriend(inputValue);
      setValue("");
      onCloseModal();
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.modalHeader}>
      <BodyText style={styles.modalHeaderText}>Add Friend</BodyText>
      <Icon
        type="ionicon"
        name="ios-close" 
        iconStyle={{color: '#000'}}
        size={30}
        onPress={() =>{
          onCloseModal();
        }}
      />
    </View>
      <View style={styles.formContainer}>
        <BodyText style={styles.txtLabel}>First name:</BodyText>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue}
          onChangeText={text => setValue(text)}
          autoCapitalize="none"
          placeholder="first name"
        />

        <PrimaryButton onButtonPress={addFriend} buttonText="Add friend" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 2,
    top: 50,
    flex: 1,
  },
  formContainer: {
    margin: 20,
    flexDirection: "column",
  },
  modalHeader: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontSize: 24
  },
  txtLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  txtInput: {
    fontSize: 20,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#C9E3EB',
    marginBottom: 20,
    fontSize: 20,
  },
});
