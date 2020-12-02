import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";

import { View, Icon } from './Themed';
import PrimaryButton from "./ui/PrimaryButton";
import { BodyText } from './ui/StyledText';
import { SecondaryView } from './ui/StyledView';


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
    <SecondaryView style={styles.container}
    lightColor="rgba(245,245,245,1)"
    darkColor="rgba(30,30,30,1)">
      <View style={styles.modalHeader}>
        <BodyText style={styles.modalHeaderText}>Add Friend</BodyText>
        <Icon
          type="ionicon"
          name="ios-close"
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
    </SecondaryView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 2,
    top: 50,
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 20,
    flexDirection: "column",
  },
  modalHeader: {
    backgroundColor: 'rgba(0,0,0,0)',
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
