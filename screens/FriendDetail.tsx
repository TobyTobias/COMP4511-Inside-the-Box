import React from "react";
import {
  StyleSheet,
} from "react-native";
import NavBar from '../components/NavBar';

import { Text, View } from '../components/Themed';
import { BodyText, HeadingText } from '../components/ui/StyledText';

export default function FriendDetail({ navigation, route }) {
  const { friend: friend } = route.params;
  
  const closeWindow = () => {
    console.log("CLOSE WINDOW");
    navigation.goBack(null);
  };

  return (
    <View style={styles.container}>
      <NavBar navTitle={friend.first_name} onBack={closeWindow} />
      <BodyText>friend: {JSON.stringify(friend)}</BodyText>
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
