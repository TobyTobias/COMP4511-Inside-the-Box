import React from "react";
import Color from "color";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";

export default function FriendDetail({ route }) {
  const { friend: friend } = route.params;
  return (
    <View style={styles.container}>
      <Text>friend: {JSON.stringify(friend)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
