import * as React from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SearchBar } from 'react-native-elements';


import { BoxesContext } from '../context/BoxesContext';
import BoxTile from '../components/BoxTile';
import { BodyText, HeadingText } from '../components/ui/StyledText';
import Swipable from 'react-native-gesture-handler/Swipeable';

export default function TabTwoScreen() {
  const { boxes } = React.useContext(BoxesContext);
  const swipeableRef = React.useRef(null);  
  
  const LeftAction = () => {
    return(
      <View style={styles.rightAction}>
        <BodyText>+ Wishlist</BodyText>
      </View>
    )
  };

  console.log("boxes: " + JSON.stringify(boxes));
  
  
  const renderNoStateMessage = () => {
    return(
      <View style={styles.emptyBoxContainer}>
        <HeadingText style={{textAlign: 'center'}}>Add some friends to your list!</HeadingText>
      </View>
    );
  }

  
  function confirmWishlistBox(item) {
    Alert.alert(
      "",
      "'" + item.name + "' added to your wishlist",
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

  // state = {
  //   search: '',
  // };

  // updateSearch = (search) => {
  //   this.setState({ search });
  // };


  // const { search } = this.state;

  return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar style={styles.searchBar}
            placeholder="Type Here..."
            // onChangeText={this.updateSearch}
            // value={search}
          />
        </View>
      <View style={styles.boxesContainer}>
          <FlatList
            style={[styles.list]}
            data={boxes}
            renderItem={({ item }) => {
              console.log("item: " + JSON.stringify(item));
              return (
                <Swipable renderLeftActions={LeftAction} onSwipeableLeftOpen={() => confirmWishlistBox(item)} ref={swipeableRef}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column'
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
