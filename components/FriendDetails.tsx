import React from "react";
import Color from "color";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { BodyText } from './StyledText';

export default function FriendDetail({ route }) {
  const { friend: friend } = route.params;
  return (
    <View style={styles.container}>
      <BodyText>friend: {JSON.stringify(friend)}</BodyText>
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
