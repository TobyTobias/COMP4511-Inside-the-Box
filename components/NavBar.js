import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Icon } from 'react-native-elements';
import { HeadingText } from './StyledText';

export default function NavBar({ navTitle = "", onBack = f => f }) {
  return (
    <View style={styles.containerOuter}>
        <View style={styles.navBarHeader}>
            <View style={styles.navBarHeaderIcon}>
                <Icon
                    type="ionicon"
                    name="ios-arrow-back"
                    size={34}
                    iconStyle={{color: '#000'}}
                    onPress={() =>{
                        onBack();
                    }}
                />
            </View>
            <HeadingText style={styles.navBarHeaderText}>{navTitle}</HeadingText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerOuter: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    navBarHeader: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
    },
    navBarHeaderIcon: {
        alignSelf: 'center'
    },
    navBarHeaderText: {
        marginLeft: 40,
        marginRight: 20,
    },
});
