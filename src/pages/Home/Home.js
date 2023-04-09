import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from "react-native"
import { Button, Icon } from "@react-native-material/core";
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="Click Me" onPress={() => { }} />
      <Icon name="home" size={30} color="#900" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const Home = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={HomeScreen} />
        <Drawer.Screen name="Article" component={SettingsScreen} />
      </Drawer.Navigator>
  );
}
