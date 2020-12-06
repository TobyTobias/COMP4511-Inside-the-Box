import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableHighlight, Image, Modal } from 'react-native';

import { HeadingText } from '../components/ui/StyledText';

// this user retrieval should be done on index but couldn't figure out how to get it to work with ts
import { useUser } from "../hooks/hooks";
import UserRegistrationForm from "../components/UserRegistrationForm";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from '../components/ui/PrimaryButton';

export default function ProfileSettingsScreen() {
  const { registeredUsers, registerUser, logoutUser } = useUser();

  const [modalVisible, setModalVisible] = useState(false);

  const hideModal = () => {
    console.log("CLOSE MODAL");
    setModalVisible(!modalVisible);
  };
  
  const renderNoStateMessage = () => {
    return(
      <View style={styles.emptyUserContainer}>
        <PrimaryButton onButtonPress={() => {setModalVisible(true)}} buttonText="Register" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <HeadingText>Profile</HeadingText>
        </View>
        <FlatList
          style={[styles.list]}
          data={registeredUsers}
          ListEmptyComponent={renderNoStateMessage}
          renderItem={({ item }) => {
            console.log("item: " + JSON.stringify(item));
            return (
              <>
                <TouchableHighlight
                  style={styles.button}
                  activeOpacity={0.6}
                  underlayColor="rgba(255,255,255,0.9)"
                  onPress={() => {}}
                >
                  <View style={styles.row}>
                    <Image
                      style={styles.profilePicture}
                      source={require('../assets/images/icon.png')}
                    />
                    <View style={styles.textContainer}>
                      <Text style={styles.buttonText}>
                        {item.first_name} {item.last_name}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Wishlist" />
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Availability" />
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Order History" />
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Help" />
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Contact Us" />
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Settings" />
                <PrimaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Logout" />
              </>
            );
          }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ScrollView style={styles.modalContainer}>
          <UserRegistrationForm onCloseModal={hideModal} onRegisterUser={registerUser} />
        </ScrollView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headingContainer: {
    paddingTop: 30,
    paddingLeft: 15,
  },
  list: {
    paddingTop: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#A5D0DD",
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
        height: 0,
        width: 0
    },
  },
  textContainer: {
    margin: 20,
    alignItems: 'flex-start',
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    color: "#000",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    height: 80,
    width: 80,
    margin: 5,
    borderRadius: 40,
    backgroundColor: "white"
  }
});
