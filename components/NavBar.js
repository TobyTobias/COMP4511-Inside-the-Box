import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Icon } from 'react-native-elements';
import { BodyText } from './StyledText';

export default function NavBar({ navTitle = "", onBack = f => f }) {
  return (
    <View style={styles.containerOuter}>
        <View style={styles.containerInner}>
            <View style={styles.navBarHeader}>
                <Icon
                    type="ionicon"
                    name="ios-arrow-back" 
                    iconStyle={{color: '#000'}}
                    size={38}
                    onPress={() =>{
                        onBack();
                    }}
                />
                <BodyText style={styles.navBarHeaderText}>{navTitle}</BodyText>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerOuter: {
        flexDirection: 'column',
        width: '100%',
    },
    containerInner: {
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    navBarHeader: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
    },
    navBarHeaderText: {
        marginLeft: 20,
        marginRight: 20,
    },
});
