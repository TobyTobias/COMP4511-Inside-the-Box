import * as React from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SearchBar } from 'react-native-elements';


import { BoxesContext } from '../context/BoxesContext';
import BoxTile from '../components/BoxTile';
import { BodyText, HeadingText } from '../components/ui/StyledText';
import Swipable from 'react-native-gesture-handler/Swipeable';

export default function BoxSearchScreen() {
  const { boxes } = React.useContext(BoxesContext);
  const swipeableRef = React.useRef(null);  
  
  const RightAction = () => {
    return(
      <View style={styles.rightAction}>
        <BodyText>- Wishlist</BodyText>
      </View>
    )
  };

  console.log("boxes: " + JSON.stringify(boxes));
  
  
  const renderNoStateMessage = () => {
    return(
      <View style={styles.emptyBoxContainer}>
        <HeadingText style={{textAlign: 'center'}}>Loading boxes...</HeadingText>
      </View>
    );
  }

  
  function confirmWishlistBox(item) {
    Alert.alert(
      "",
      "'" + item.name + "' removed from your wishlist",
      [
        {
          text: "Cancel",
          onPress: () => swipeableRef.current.close(),
          style: "cancel"
        },
        { text: "OK", onPress: () => {} }
      ],
      { cancelable: false }
    );
  }

  return (
      <View style={styles.containerOuter}>
        <View style={styles.headingContainer}>
          <HeadingText>Wishlist</HeadingText>
        </View>
        <View style={styles.containerInner}>
          <View style={styles.boxesContainer}>
            <FlatList
              style={[styles.list]}
              data={boxes}
              ListEmptyComponent={renderNoStateMessage}
              renderItem={({ item }) => {
                console.log("item: " + JSON.stringify(item));
                return (
                  <Swipable renderRightActions={RightAction} onSwipeableRightOpen={() => confirmWishlistBox(item)} ref={swipeableRef}>
                    <BoxTile
                      key={item.id}
                      box={item}
                      // onPress={() =>                    
                      //   navigation.navigate("FriendDetails", {
                      //     friend: item
                      //   })
                      // }
                    />
                  </Swipable>
                );
              }}
            />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  containerOuter: {
    flex: 1,
    flexDirection: 'column',
  },
  containerInner: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headingContainer: {
    paddingTop: 30,
    paddingLeft: 15,
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
  }
});
