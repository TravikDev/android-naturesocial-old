import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { ScreenUserProfile } from './ScreenUserProfile'
// import { ScreenUserSettings } from './ScreenUserSettings'
import { Icon } from '@react-native-material/core'
// import { ScreenGardenPage } from './ScreenGardenPage'
// import { NavigatorGardenSettings } from '../NavigatorGardenSettings'
import { Text, View } from 'react-native'
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ScrPublicGardenPage } from './ScrPublicGardenPage'
import { ScrPublicGardenFeed } from './ScrPublicGardenFeed'
import { ScrPublicGardenNutrition } from './ScrPublicGardenNutrition'
import { ScrPublicGardenSystems } from './ScrPublicGardenSystems'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()

/* @ts-ignore */
export const NavPublicGarden = ({ route, navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Кастомный View-элемент, отображаемый сверху */}
      <View style={{ backgroundColor: 'lightblue', padding: 20 }}>
        <Text>Custom Header</Text>
      </View>

      {/* Ваш Tab Navigator */}
      <NavigationContainer>
        <NavPublicGardenSlides route navigation />
      </NavigationContainer>
    </View>
  );
};


/* @ts-ignore */
export const NavPublicGardenSlides = ({ route, navigation }) => {

  return (
    <Tab.Navigator
      initialRouteName='PublicGardenPage'
      screenOptions={{
        tabBarActiveTintColor: '#1A6111',
        tabBarInactiveTintColor: "#000",
        tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 120 }
      
      }}>
      <Tab.Screen
        name="PublicGardenPage"
        initialParams={route.params}
        component={ScrPublicGardenPage}
        options={{
          title: 'Info',
          // tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />,
          // headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>

        }}
      />
      <Tab.Screen
        name="PublicGardenFeed"
        initialParams={route.params}
        component={ScrPublicGardenFeed}
        options={{
          title: 'Feed'
          // headerShown: false,
          // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
        }} />
      <Tab.Screen
        name="PublicGardenNutrition"
        initialParams={route.params}
        component={ScrPublicGardenNutrition}
        options={{
          title: 'Nutrition'
          // headerShown: false,
          // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
        }} />
      <Tab.Screen
        name="PublicGardenSystems"
        initialParams={route.params}
        component={ScrPublicGardenSystems}
        options={{
          title: 'Systems'
          // headerShown: false,
          // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
        }} />
    </Tab.Navigator>
  )
}
