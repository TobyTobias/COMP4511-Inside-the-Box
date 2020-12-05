import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { BodyText } from './ui/StyledText';
import { Icon } from 'react-native-elements';

export default function BoxTile({
  box,
  onPress = f => f
}) {
  console.log('box: ' + JSON.stringify(box));
  // have to map db images?? https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
  var dynamicPath = getImagePath(box.image_name);

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {onPress(box)}}
      underlayColor="rgba(255,255,255,0.9)"
    >
      <>
        <View style={styles.imageContainer}>
          <Image
            style={styles.boxPicture}
            source={dynamicPath}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {box.name}
            </Text>
          </View>
          <View style={styles.textFooter}>
            <Text style={styles.boxPrice}>
              ${box.price.toString()}
            </Text>
            <Icon
              color="#000"
              type="ionicon"
              name="ios-heart"
              size={30}
              onPress={() =>{}}
            />
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
}

function getImagePath(image_name) {
  console.log("getImagePath: " + image_name);
  var image_path;
  switch (image_name) {
    case "diysuccgarden.jpg":
      image_path = require('../assets/images/boxes/diysuccgarden.jpg');
      break;
    case "cocktailmixer.jpg":
      image_path = require('../assets/images/boxes/cocktailmixer.jpg');
      break;
    case "paella.jpg":
      image_path = require('../assets/images/boxes/paella.jpg');
      break;
    case "sushi1.jpg":
      image_path = require('../assets/images/boxes/sushi1.jpg');
      break;
    case "whittling.png":
      image_path = require('../assets/images/boxes/whittling.png');
      break;
    case "KnitBeginners.jpg":
      image_path = require('../assets/images/boxes/KnitBeginners.jpg');
      break;
    case "yoga2.jpg":
      image_path = require('../assets/images/boxes/yoga2.jpg');
      break;
    case "soccer2.jpg":
      image_path = require('../assets/images/boxes/soccer2.jpg');
      break;
    case "rockpainting.jpg":
      image_path = require('../assets/images/boxes/rockpainting.jpg');
      break;
    case "Badminton.jpg":
      image_path = require('../assets/images/boxes/Badminton.jpg');
      break;
    case "KimchiKit.jpg":
      image_path = require('../assets/images/boxes/KimchiKit.jpg');
      break;
    case "SucculentTerrarium.jpg":
      image_path = require('../assets/images/boxes/SucculentTerrarium.jpg');
      break;
    case "KnitVeggie.jpg":
      image_path = require('../assets/images/boxes/KnitVeggie.jpg');
      break;
    case "SucculentBirdhouse.jpg":
      image_path = require('../assets/images/boxes/SucculentBirdhouse.jpg');
      break;
    case "KnitFrogBiology.jpg":
      image_path = require('../assets/images/boxes/KnitFrogBiology.jpg');
      break;
    case "SucculentAnimals.jpg":
      image_path = require('../assets/images/boxes/SucculentAnimals.jpg');
      break;
    case "KnitLarge.jpg":
      image_path = require('../assets/images/boxes/KnitLarge.jpg');
      break;
    default:
      image_path = require('../assets/images/icon.png');
  }
  console.log("getImagePath image_path: " + image_path);
  return image_path;
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
        height: 0,
        width: 0
    },
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }, 
  boxPicture: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    left: 100,
    right: 0,
    height: '100%',
    // flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: 'flex-start',
  },
  descriptionContainer: {
    flexDirection: "column",
    alignItems: 'flex-start',
    flex: 1
  },
  description: {
    flex: 1, 
    flexWrap: 'wrap',
    fontSize: 18
  },
  textFooter: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: 'flex-end'
  },
  boxPrice: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    flex: 1,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: "row",
  },
});
