import React, { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Modal } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SearchBar } from 'react-native-elements';


import { BoxesContext } from '../context/BoxesContext';
import BoxTile from '../components/BoxTile';
import { BodyText, HeadingText } from '../components/ui/StyledText';
import Swipable from 'react-native-gesture-handler/Swipeable';

// this user retrieval should be done on index but couldn't figure out how to get it to work with ts
import { useUser } from "../hooks/hooks";
import UserRegistrationForm from "../components/UserRegistrationForm";
import { ScrollView } from "react-native-gesture-handler";

export default function BoxFeaturedScreen() {

  const [modalVisible, setModalVisible] = useState(true);

  const { registeredUsers } = useUser();
  const [localUser, setUser] = React.useState(registeredUsers);
  
  useEffect(() => {
    console.log("localUser: " + JSON.stringify(localUser));
    setModalVisible(registeredUsers.length == 0 ? true : false);
  }, [localUser] );

  const hideRegistrationModal = () => {
    console.log("CLOSE MODAL");
    setModalVisible(!modalVisible);
  };
  
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ScrollView style={styles.modalContainer}>
        <UserRegistrationForm onCloseModal={hideRegistrationModal} />
        </ScrollView>
      </Modal>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <HeadingText>Featured</HeadingText>
        </View>
        <View style={styles.boxesContainer}>
          <FlatList
            style={[styles.list]}
            data={[]}
            renderItem={({ item }) => {
              console.log("item: " + JSON.stringify(item));
              return (
                <BoxTile
                  key={item.id}
                  box={item}
                  // onPress={() =>                    
                  //   navigation.navigate("FriendDetails", {
                  //     friend: item
                  //   })
                  // }
                />
              );
            }}
          />
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column'
  },  
  headingContainer: {
    paddingTop: 30,
    paddingLeft: 15
  },
  searchBarContainer: {
    top: 25,
    height: 90,
    alignSelf: 'stretch',
  },
  searchBar: {
  },
  boxesContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    paddingTop: 5,
  },
  rightAction: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyBoxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    marginLeft: 25,
    marginRight: 25
  },
  modalContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    flex: 1,
    flexDirection: 'column'
  },
  modalContainerInner: {
    alignSelf: 'flex-end'
  }
});
