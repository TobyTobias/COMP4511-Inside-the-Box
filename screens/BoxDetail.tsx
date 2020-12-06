import React from "react";
import {
  StyleSheet,
} from "react-native";
import NavBar from '../components/NavBar';

import { Text, View } from '../components/Themed';
import { BodyText, HeadingText } from '../components/ui/StyledText';

export default function BoxDetail({ navigation, route }) {
  const { box: box } = route.params;
  
  const closeWindow = () => {
    console.log("CLOSE WINDOW");
    navigation.goBack(null);
  };

  return (
    <View style={styles.container}>
      <NavBar navTitle={box.name} onBack={closeWindow} />
      <BodyText>box: {JSON.stringify(box)}</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 25,
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    flexDirection: 'column'
  }
});
