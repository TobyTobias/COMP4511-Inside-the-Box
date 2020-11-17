import * as React from 'react';
import { useRef, useState } from 'react';

import { StyleSheet, FlatList, TouchableHighlight, Alert, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import Swipout from 'react-native';
import Swipable from 'react-native-gesture-handler/Swipeable';

import { useFriends } from "../hooks/hooks";

import FriendForm from "../components/FriendForm";
import FriendTile from '../components/FriendTile';
import { Text, View } from '../components/Themed';

export default function FriendsScreen({navigation}) {
  const { friends, addFriend, removeFriend } = useFriends();

  const [modalVisible, setModalVisible] = useState(false);

  const swipeableRef = useRef(null);  

  const RightAction = () => {
    return(
      <View style={styles.rightAction}>
        <Text>Remove</Text>
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
    <View>
      <Text>You have no employers in your favorite list.</Text>
    </View>
  }

  const hideModal = () => {
    console.log("CLOSE MODAL");
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.friendContainer}>
        <FlatList
          style={[styles.list]}
          data={friends}
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
            color='#C9E3EB'
            iconStyle={{color: '#000'}}
            onPress={() =>{
              setModalVisible(true);
            }}
          />
        </TouchableHighlight>
      </View>

      {/* https://reactnative.dev/docs/modal */}
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
  friendContainer: {
    top: 25,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  list: {
    flex: 1,
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
  modalContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    flexDirection: 'column'
  },
  modalContainerInner: {
    alignSelf: 'flex-end'
  }
});
