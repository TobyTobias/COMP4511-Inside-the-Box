import * as React from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Searchbar } from 'react-native-paper';
import BoxTile from '../components/BoxTile';
import { BodyText, HeadingText } from '../components/ui/StyledText';
import Swipable from 'react-native-gesture-handler/Swipeable';

import { BoxesContext } from '../context/BoxesContext';

export default function BoxSearchScreen({navigation}) {
  const { boxes } = React.useContext(BoxesContext);
  const [localBoxes, setBoxes] = React.useState(boxes);

  const swipeableRef = React.useRef(null);  
  
  const LeftAction = () => {
    return(
      <View style={styles.rightAction}>
        <BodyText>+ Wishlist</BodyText>
      </View>
    )
  };

  const renderNoStateMessage = () => {
    return(
      <View style={styles.emptyBoxContainer}>
        <HeadingText style={{textAlign: 'center'}}>Loading boxes...</HeadingText>
      </View>
    );
  };

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
  };

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query)  => {
    console.log('search for: ' + query);
    setSearchQuery(query);
    if (query != "") {
      setBoxes(localBoxes.filter(item => {
        return item.name?.indexOf(query) > -1;    
      }));
    } else {
      setBoxes(boxes);
    }
  };

  return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <HeadingText>Search</HeadingText>
        </View>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{borderRadius: 10}}
          />
        </View>
        <View style={styles.boxesContainer}>
          <FlatList
            style={[styles.list]}
            data={localBoxes}
            ListEmptyComponent={renderNoStateMessage}
            renderItem={({ item }) => {
              console.log("item: " + JSON.stringify(item));
              return (
                <Swipable renderLeftActions={LeftAction} onSwipeableLeftOpen={() => confirmWishlistBox(item)} ref={swipeableRef}>
                  <BoxTile
                    key={item.id}
                    box={item}
                    onPress={() =>                    
                      navigation.navigate("BoxDetail", {
                        box: item
                      })
                    }
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
  headingContainer: {
    paddingTop: 30,
    paddingLeft: 15,
  },
  searchBarContainer: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  }
});
