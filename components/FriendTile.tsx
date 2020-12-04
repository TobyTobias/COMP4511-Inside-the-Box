import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { BodyText } from './ui/StyledText';

export default function FriendTile({
  friend,
  onPress = f => f
}) {
  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      underlayColor="rgba(255,255,255,0.9)"
      onPress={() => {onPress(friend)}}
    >
      <View style={styles.row}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/images/icon.png')}
        />
        <View style={styles.textContainer}>
          <BodyText style={styles.buttonText}>
            {friend.first_name} {friend.last_name}
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
    borderRadius: 10,
    // alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 1)",
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
        height: 0,
        width: 0
    },
  },
  textContainer: {
    margin: 20,
    flex: 1,
    alignItems: 'flex-start'
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    color: "#000"
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
