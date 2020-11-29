import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { BodyText } from './StyledText';

export default function FriendTile({
  friend,
  onPress = f => f
}) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {onPress(friend)}}
      underlayColor="#E47E6D"
    >
      <View style={styles.row}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/images/icon.png')}
        />
        <View style={styles.textContainer}>
          <BodyText style={styles.buttonText}>
            {friend.firstName} {friend.lastName}
          </BodyText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    // alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  textContainer: {
    margin: 20,
    flex: 1,
    alignItems: 'flex-start'
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    height: 80,
    width: 80,
    margin: 5,
    borderRadius: 40,
    backgroundColor: "white"
  }
});
