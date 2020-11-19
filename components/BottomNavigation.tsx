import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bottomNavFiller}></View>
      <View style={styles.bottomNav}>
        <View style={styles.navBackgroundFiller}></View>
        <View style={styles.navBackground}>
          <View style={styles.friendsIconRow}>
            <EntypoIcon name="add-user" style={styles.friendsIcon}></EntypoIcon>
            <EntypoIcon name="dropbox" style={styles.boxIcon}></EntypoIcon>
            <FeatherIcon
              name="menu"
              style={styles.hamburgerMenuIcon}
            ></FeatherIcon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomNavFiller: {
    flex: 1
  },
  bottomNav: {
    width: 29,
    height: 32,
    marginBottom: 37,
    marginLeft: 38
  },
  navBackgroundFiller: {
    flex: 1
  },
  navBackground: {
    width: 414,
    height: 84,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginBottom: -34,
    marginLeft: -38
  },
  friendsIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  boxIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 29,
    height: 32,
    width: 29,
    marginLeft: 129
  },
  hamburgerMenuIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 29,
    height: 29,
    width: 29,
    marginLeft: 135,
    marginTop: 2
  },
  friendsIconRow: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 34,
    marginTop: 18
  }
});

export default Untitled;
