import React from "react";
import {
  StyleSheet,
  Image
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import NavBar from '../components/NavBar';

import { Text, View } from '../components/Themed';
import { BodyText, HeadingText } from '../components/ui/StyledText';
import { SecondaryView } from '../components/ui/StyledView';
import PrimaryButton from "../components/ui/PrimaryButton";

export default function BoxDetail({ navigation, route }) {
  const { box: box } = route.params;
  
  const closeWindow = () => {
    console.log("CLOSE WINDOW");
    navigation.goBack(null);
  };

  var dynamicPath = getImagePath(box.image_name);

  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar navTitle={box.name} onBack={closeWindow} />
        <SecondaryView style={styles.boxDetail}
          lightColor="rgba(245,245,245,1)"
          darkColor="rgba(30,30,30,1)">
          <Image style={styles.boxImage} source={dynamicPath} />
          <Text style={{ padding: 10 }}>{box.description}</Text>
          <SecondaryView style={{flex: 1, flexDirection: 'row', borderRadius: 10 }}
            lightColor="rgba(245,245,245,1)"
            darkColor="rgba(30,30,30,1)">
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, backgroundColor: 'rgba(0,0,0,0)', borderRadius: 10, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, width: 50 }}>${box.price}</Text>            
              <View style={{flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0)', borderRadius: 10}}>
                <PrimaryButton onButtonPress={() => { alert("Go to Buy") }} buttonText="Buy now "  />
              </View>
            </View>
          </SecondaryView>
        </SecondaryView>
      </View>
    </ScrollView>
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
  container: {
    top: 25,
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    flexDirection: 'column'
  },
  boxDetail: {
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
  },
  boxImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    maxWidth: '100%',
    height: 200
  }
});
