import React from "react";
import {
  StyleSheet,
} from "react-native";
import { View, Icon } from './Themed';
import { HeadingText } from './ui/StyledText';


export default function NavBar({ navTitle = "", onBack = f => f }) {
  return (
    <View style={styles.containerOuter}>
        <View style={styles.navBarHeader}>
            <View style={styles.navBarHeaderIcon}>
                <Icon
                    type="ionicon"
                    name="ios-arrow-back"
                    size={34}
                    padding={20}
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
        borderBottomColor: '#CCC',
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
