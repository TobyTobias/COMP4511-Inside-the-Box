import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Image } from "react-native";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FriendsScreen from '../screens/FriendsScreen';
import FriendDetails from '../screens/FriendDetails';
import BoxSearchScreen from '../screens/BoxSearchScreen';
import TabThreeScreen from '../screens/ProfileSettingsScreen';
import TabFourScreen from '../screens/ProfileSettingsScreen';
import TabFiveScreen from '../screens/ProfileSettingsScreen';
import { BottomTabParamList, FriendsScreenParamList, TabTwoParamList, TabThreeParamList, TabFourParamList, TabFiveParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({navigator}) {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabThree"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel: false}}
      >
      <BottomTab.Screen
        name="FriendsScreen"
        component={FriendsScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-people" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="BoxSearchScreen"
        component={BoxSearchScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={BoxSearchScreenNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarImage color={color} focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={BoxSearchScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-contact" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarImage(props: { color: string, focused: boolean }) {
  const colorScheme = useColorScheme();
  return <View style={[{
      backgroundColor: props.focused ? '#7560C7' : Colors[colorScheme].background
    }, {
      borderColor: '#ccc',
      borderRadius: 30, 
      elevation: 5,
      shadowOpacity: 0.3,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }}]} {...props}>
      <Image style={{ width: 40, height: 40, margin: 10 }} source={require('../assets/images/logo.png')} />
    </View>;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FriendsScreenStack = createStackNavigator<FriendsScreenParamList>();

function FriendsScreenNavigator({navigation}) {
  return (
    <FriendsScreenStack.Navigator headerMode="none">
      <FriendsScreenStack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{ headerTitle: 'Friends Screen' }}
      />
      <FriendsScreenStack.Screen
        name="FriendDetails"
        component={FriendDetails}
        options={{ headerTitle: 'Friend Detail' }}
      />
    </FriendsScreenStack.Navigator>
  );
}

const BoxSearchScreenStack = createStackNavigator<BoxSearchScreenParamList>();

function BoxSearchScreenNavigator() {
  return (
    <BoxSearchScreenStack.Navigator headerMode="none">
      <BoxSearchScreenStack.Screen
        name="BoxSearchScreen"
        component={BoxSearchScreen}
      />
    </BoxSearchScreenStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator headerMode="none">
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Tab Three Title' }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator headerMode="none">
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerTitle: 'Tab Four Title' }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator headerMode="none">
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        options={{ headerTitle: 'Tab Five Title' }}
      />
    </TabFiveStack.Navigator>
  );
}
