import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableHighlight, Image, Modal } from 'react-native';

import { HeadingText } from '../components/ui/StyledText';

// this user retrieval should be done on index but couldn't figure out how to get it to work with ts
import { useUser } from "../hooks/hooks";
import UserRegistrationForm from "../components/UserRegistrationForm";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';

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
                      <Text style={styles.buttonTextSecondary}>
                        Edit profile
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <SecondaryButton onButtonPress={() => { alert("Go to Wishlist"); }} buttonText="Wishlist" iconName="ios-heart" />
                <SecondaryButton onButtonPress={() => { alert("Go to Availability"); }} buttonText="Availability" iconName="ios-calendar" />
                <SecondaryButton onButtonPress={() => { alert("Go to Order History"); }} buttonText="Order History" iconName="ios-archive" />
                <View style={styles.separator} />
                <SecondaryButton onButtonPress={() => { alert("Go to Help"); }} buttonText="Help" iconName="ios-help-buoy" />
                <SecondaryButton onButtonPress={() => { alert("Go to Contact Us"); }} buttonText="Contact Us" iconName="ios-mail" />
                <SecondaryButton onButtonPress={() => { alert("Go to Settings"); }} buttonText="Settings" iconName="md-cog" />
                <SecondaryButton onButtonPress={() => {logoutUser(item)}} buttonText="Logout" iconName="md-exit" />
                <View style={styles.bottomSpacer} />
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
    paddingTop: 5
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
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#CCC',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  bottomSpacer: {
    height: 50
  }
});
