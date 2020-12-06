import React from "react";

import {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";

import { Icon } from 'react-native-elements';

export default function PrimaryButton({ onButtonPress = f => f, buttonText = ""}) {
  return (
    <>
      <TouchableHighlight
        underlayColor="#7560C780"
        style={styles.buttonContainer}
        onPress={() =>{
          console.log("PrimaryButton onPress");
          onButtonPress();
        }}
      >
        <>
          <Text style={styles.buttonContainerText}>{buttonText}</Text>
          <Icon
            type="ionicon"
            name="ios-arrow-round-forward" 
            iconStyle={{color: '#FFF'}}
            size={30}
          />
        </>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 5,
      padding: 15,
      backgroundColor: '#7560C7',
      margin: 0,
      elevation: 2,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
          height: 0,
          width: 0
      },
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonContainerText: {    
      fontSize: 20,
      color: '#FFF'
    }
});