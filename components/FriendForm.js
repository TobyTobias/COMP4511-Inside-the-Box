import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { Icon } from 'react-native-elements';

export default function FriendForm({ onNewFriend = f => f, onCloseModal = f => f }) {
  const [inputValue, setValue] = useState("");
  const input = useRef();
  return (
    <View style={styles.container}>
    <View style={styles.modalHeader}>
      <Text style={styles.modalHeaderText}>Add Friend</Text>
      <Icon
        type="ionicon"
        name="ios-close" 
        iconStyle={{color: '#000'}}
        size={40}
        onPress={() =>{
          onCloseModal();
        }}
      />
    </View>
      <View style={styles.formContainer}>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue}
          onChangeText={text => setValue(text)}
          autoCapitalize="none"
          placeholder="first name"
        />
        <TouchableHighlight
          underlayColor="#FFF"
          style={styles.buttonContainer}
          onPress={() => {
            if (inputValue.trim() != "") {
              input.current.blur();
              onNewFriend(inputValue);
              setValue("");
              onCloseModal();
            }
          }}
        ><>
          <Text style={styles.buttonContainerText}>Add friend</Text>
          <Icon
            type="ionicon"
            name="ios-arrow-round-forward" 
            iconStyle={{color: '#FFF'}}
            size={30}
          /></>
        </TouchableHighlight>
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
    margin: 50,
    flexDirection: "column",
  },
  modalHeader: {
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontSize: 30
  },
  txtInput: {
    fontSize: 20,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#C9E3EB',
    marginBottom: 20
  },
  buttonContainer: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#E47E6D',
    marginBottom: 20,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainerText: {    
    fontSize: 20,
    color: '#FFF'
  }
});
