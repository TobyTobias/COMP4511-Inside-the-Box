import * as React from 'react';
import { useRef, useState } from 'react';

import { StyleSheet, FlatList, TouchableHighlight, Alert, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import Swipable from 'react-native-gesture-handler/Swipeable';

import { useFriends } from "../hooks/hooks";

import FriendForm from "../components/FriendForm";
import FriendTile from '../components/FriendTile';
import { Text, View } from '../components/Themed';
import { BodyText, HeadingText } from '../components/ui/StyledText';

export default function FriendsScreen({navigation}) {
  const { friends, addFriend, removeFriend } = useFriends();

  const [modalVisible, setModalVisible] = useState(false);

  const swipeableRef = useRef(null);  

  const RightAction = () => {
    return(
      <View style={styles.rightAction}>
        <BodyText>Remove</BodyText>
      </View>
    )
  };

  function confirmRemoveFriend(item) {
    Alert.alert(
      "Are you sure?",
      "This will remove '" + item.firstName + "' from your list",
      [
        {
          text: "Cancel",
          onPress: () => swipeableRef.current.close(),
          style: "cancel"
        },
        { text: "OK", onPress: () => removeFriend(item) }
      ],
      { cancelable: false }
    );
  }

  const renderNoStateMessage = () => {
    return(
      <View style={styles.emptyFriendContainer}>
        <HeadingText style={{textAlign: 'center'}}>Add some friends to your list!</HeadingText>
      </View>
    );
  }

  const hideModal = () => {
    console.log("CLOSE MODAL");
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <HeadingText>Friends</HeadingText>
        </View>
        <FlatList
          style={[styles.list]}
          data={friends}
          ListEmptyComponent={renderNoStateMessage}
          renderItem={({ item }) => {
            console.log("item: " + JSON.stringify(item));
            return (
              <Swipable renderRightActions={RightAction} onSwipeableRightOpen={() => confirmRemoveFriend(item)} ref={swipeableRef}>
                <FriendTile
                  key={item.id}
                  friend={item}
                  onPress={() =>                    
                    navigation.navigate("FriendDetails", {
                      friend: item
                    })
                  }
                />
              </Swipable>
            );
          }}
        />
        <TouchableHighlight
          underlayColor="#FFF"
          style={styles.addFriendButton}          
        >
          <Icon
            raised
            reverse
            type="ionicon"
            name="ios-person-add" 
            color='#7560C7'
            iconStyle={{color: '#fff'}}
            onPress={() =>{
              setModalVisible(true);
            }}
          />
        </TouchableHighlight>
      </View>

      {/* https://reactnative.dev/docs/modal */}
      {/* This doesn't want to work on iOS but the idea is to have a mask over the main screen that the modal sits on top of, it's separate so it doesn't slide with the actual modal */}
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalBackground} />
      </Modal> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalContainer}>
          <FriendForm onCloseModal={hideModal} onNewFriend={addFriend} />
        </View>
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
    paddingLeft: 15
  },
  emptyFriendContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    marginLeft: 25,
    marginRight: 25
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
  addFriendButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 50,
    right: 25,
  },
  modalBackground: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  modalContainerInner: {
    alignSelf: 'flex-end'
  }
});
