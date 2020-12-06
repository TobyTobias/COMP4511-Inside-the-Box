import React from "react";

import {
  StyleSheet,
  TouchableHighlight
} from "react-native";

import { Icon } from '../Themed';

import { BodyText } from './StyledText';

export default function SecondaryButton({ onButtonPress = f => f, buttonText = "", iconName = ""}) {
  return (
    <>
      <TouchableHighlight
        underlayColor="#CCCCCC80"
        style={styles.buttonContainer}
        onPress={() =>{
          console.log("SecondaryButton onPress");
          onButtonPress();
        }}
      >
        <>
          <BodyText style={styles.buttonContainerText}>{buttonText}</BodyText>
          <Icon
            type="ionicon"
            name={iconName} 
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
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonContainerText: {    
      fontSize: 14,
    }
});