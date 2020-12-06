import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TextInput
} from "react-native";

import { View, Icon } from './Themed';
import PrimaryButton from "./ui/PrimaryButton";
import { BodyText } from './ui/StyledText';
import { SecondaryView } from './ui/StyledView';

import { useUser } from "../hooks/hooks";

export default function UserRegistrationForm({ onCloseModal = f => f, onRegisterUser = f => f }) {
  const { registeredUsers, registerUser } = useUser();
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const _registerUser = () => {
    console.log("REGISTER USER SUBMIT");
    var error = "";
    if (firstNameValue.trim() == "") {
      error += "Please enter your first name\n";
    }
    if (lastNameValue.trim() == "") {
      error += "Please enter your last name\n";
    }
    if (emailValue.trim() == "") {
      error += "Please enter your email\n";
    }
    if (passwordValue.trim() == "") {
      error += "Please enter a password";
    }
    if (error) {
      alert(error);
    } else {
      onRegisterUser(firstNameValue, lastNameValue, emailValue, passwordValue);
      onCloseModal(); 
    }
  };

  return (
    <SecondaryView style={styles.container}
    lightColor="rgba(245,245,245,1)"
    darkColor="rgba(30,30,30,1)">
      <View style={styles.modalHeader}>
        <BodyText style={styles.modalHeaderText}>Register</BodyText>
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
          ref={firstNameInput}
          style={styles.txtInput}
          value={firstNameValue}
          onChangeText={text => setFirstNameValue(text)}
          autoCapitalize="none"
          placeholder="first name"
        />
        <BodyText style={styles.txtLabel}>Last name:</BodyText>
        <TextInput
          ref={lastNameInput}
          style={styles.txtInput}
          value={lastNameValue}
          onChangeText={text => setLastNameValue(text)}
          autoCapitalize="none"
          placeholder="last name"
        />
        <BodyText style={styles.txtLabel}>Email:</BodyText>
        <TextInput
          ref={emailInput}
          style={styles.txtInput}
          value={emailValue}
          onChangeText={text => setEmailValue(text)}
          autoCapitalize="none"
          placeholder="email"
        />
        <BodyText style={styles.txtLabel}>Password:</BodyText>
        <TextInput
          ref={passwordInput}
          style={styles.txtInput}
          value={passwordValue}
          onChangeText={text => setPasswordValue(text)}
          autoCapitalize="none"
          placeholder="password"
        />
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, backgroundColor: 'rgba(0,0,0,0)' }}>
        <PrimaryButton onButtonPress={_registerUser} buttonText="Register" />
      </View>
    </SecondaryView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 2,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
        height: 0,
        width: 0
    },
    top: 50,
    flex: 1,
    paddingBottom: 100
  },
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 20,
    marginBottom: 0,
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
    fontSize: 24,
    fontWeight: 'bold'
  },
  txtLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  txtInput: {
    fontSize: 20,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    fontSize: 20,
    backgroundColor: 'rgba(200, 200, 200, 0.2)'
  },
});
