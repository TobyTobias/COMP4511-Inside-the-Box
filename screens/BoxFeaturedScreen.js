import React from "react";
import { Alert, FlatList, StyleSheet, Modal } from 'react-native';
import { View } from '../components/Themed';

import BoxTile from '../components/BoxTile';
import { HeadingText } from '../components/ui/StyledText';

export default function BoxFeaturedScreen() {
  return (
    <>
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
