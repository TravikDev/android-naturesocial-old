import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { ScreenUserProfile } from './ScreenUserProfile'
// import { ScreenUserSettings } from './ScreenUserSettings'
import { Icon } from '@react-native-material/core'
// import { ScreenGardenPage } from './ScreenGardenPage'
// import { NavigatorGardenSettings } from '../NavigatorGardenSettings'
import { View } from 'react-native'
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ScreenPublicGardenPage } from './ScreenPublicGardenPage'
import { ScreenPublicGardenFeed } from './ScreenPublicGardenFeed'
// import { ScreenPublicGardenPage } from './ScreenPublicGardenPage'
// import { ScreenPublicGardenFeed } from './ScreenPublicGardenFeed'
// import { ScreenPublicGardenPage } from './ScreenPublicGardenPage'
// import { ScreenPublicGardenPage } from './ScreenPublicGardenPage'
// import { ScreenPublicGardenPage } from './ScreenPublicGardenPage/ScreenPublicGardenPage'
// import { ScreenPublicGardenFeed } from './ScreenPublicGardenFeed/ScreenPublicGardenFeed'
// import { ScreenGardenPage } from './ScreenGardenPage'
// import { ScreenGardenFeed } from './ScreenGardenFeed/ScreenGardenFeed'

const Tab = createMaterialTopTabNavigator()

/* @ts-ignore */
export const NavigatorPublicGarden = ({ route, navigation }) => {

  return (
    <Tab.Navigator
      initialRouteName='PublicGardenPage'
      screenOptions={{
        tabBarActiveTintColor: '#1A6111',
        tabBarInactiveTintColor: "#000",
        tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
      }}>
      <Tab.Screen
        name="PublicGardenPage"
        initialParams={route.params}
        component={ScreenPublicGardenPage}
        options={{
          title: 'Description',
          // tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />,
          // headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>

        }}
      />
      <Tab.Screen
        name="PublicGardenFeed"
        initialParams={route.params}
        component={ScreenPublicGardenFeed}
        options={{
          title: 'Feed'
          // headerShown: false,
          // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
        }} />
    </Tab.Navigator>
  )
}
