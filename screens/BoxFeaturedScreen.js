import * as React from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { BoxesContext } from '../context/BoxesContext';
import BoxTile from '../components/BoxTile';
import { BodyText, HeadingText } from '../components/ui/StyledText';
import Swipable from 'react-native-gesture-handler/Swipeable';

export default function BoxFeaturedScreen({navigation}) {
  const { featuredBoxes } = React.useContext(BoxesContext);
  const swipeableRef = React.useRef(null);  
  
  const LeftAction = () => {
    return(
      <View style={styles.leftAction}>
        <BodyText>+ Wishlist</BodyText>
      </View>
    )
  };

  console.log("featuredBoxes: " + JSON.stringify(featuredBoxes));
  
  
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

  return (
      <View style={styles.containerOuter}>
        <View style={styles.headingContainer}>
          <HeadingText>Featured</HeadingText>
        </View>
        <View style={styles.containerInner}>
          <View style={styles.boxesContainer}>
            <FlatList
              style={[styles.list]}
              data={featuredBoxes}
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
  leftAction: {
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
