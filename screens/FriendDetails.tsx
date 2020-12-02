import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { HeadingText, BodyText } from '../components/ui/StyledText';
import NavBar from '../components/NavBar';

export default function FriendDetail({ navigation, route }) {
  const { friend: friend } = route.params;
  
  const closeWindow = () => {
    console.log("CLOSE WINDOW");
    navigation.goBack(null);
  };

  return (
    <View style={styles.container}>
      <NavBar navTitle={friend.firstName} onBack={closeWindow} />
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
