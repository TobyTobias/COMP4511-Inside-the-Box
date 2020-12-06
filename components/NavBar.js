import React from "react";
import {
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Icon } from './Themed';
import { BodyText } from './ui/StyledText';


export default function NavBar({ navTitle = "", onBack = f => f }) {
  return (
    <View style={styles.containerOuter}>
        <View style={styles.navBarHeader}>
            <View style={styles.navBarHeaderIcon}>
                <TouchableOpacity style={styles.iconContainer} onPress={() =>{onBack();}}>
                    <Icon
                        type="ionicon"
                        name="ios-arrow-back"
                        size={34}
                    />
                </TouchableOpacity>
            </View>
            <BodyText style={styles.navBarHeaderText}>{navTitle}</BodyText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerOuter: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    },
    navBarHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    iconContainer: {
        padding: 10,
    },
    navBarHeaderIcon: {
        alignSelf: 'center'
    },
    navBarHeaderText: {
        paddingTop: 8,
        marginLeft: 10,
        marginRight: 40,
    },
});
