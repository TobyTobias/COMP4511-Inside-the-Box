import * as React from 'react';
import { useRef, useState } from 'react';

import { StyleSheet, FlatList, TouchableHighlight, Alert, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import Swipable from 'react-native-gesture-handler/Swipeable';

import { useBoxes } from "../hooks/hooks";

import FriendTile from '../components/FriendTile';
import { Text, View } from '../components/Themed';
import { BodyText, HeadingText } from '../components/StyledText';

export default function WishlistScreen({navigation}) {
  const { boxes, removeBox } = useBoxes();

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
      "This will remove '" + item.name + "' from your list",
      [
        {
          text: "Cancel",
          onPress: () => swipeableRef.current.close(),
          style: "cancel"
        },
        { text: "OK", onPress: () => removeBox(item) }
      ],
      { cancelable: false }
    );
  }

  const renderNoStateMessage = () => {
    return(
      <View style={styles.emptyListContainer}>
        <HeadingText style={{textAlign: 'center'}}>Add some boxes to your wishlist!</HeadingText>
      </View>
    );
  }

  const hideModal = () => {
    console.log("CLOSE MODAL");
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          style={[styles.list]}
          data={boxes}
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    top: 25,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    marginLeft: 25,
    marginRight: 25
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
  modalBackground: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
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
