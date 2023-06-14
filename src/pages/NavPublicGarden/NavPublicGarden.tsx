import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { ScreenUserProfile } from './ScreenUserProfile'
// import { ScreenUserSettings } from './ScreenUserSettings'
import { Icon } from '@react-native-material/core'
// import { ScreenGardenPage } from './ScreenGardenPage'
// import { NavigatorGardenSettings } from '../NavigatorGardenSettings'
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ScrPublicGardenPage } from './ScrPublicGardenPage'
import { ScrPublicGardenFeed } from './ScrPublicGardenFeed'
import { ScrPublicGardenNutrition } from './ScrPublicGardenNutrition'
import { ScrPublicGardenSystems } from './ScrPublicGardenSystems'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrPublicGardenNutritions } from './ScrPublicGardenNutritions'
import { ScrPublicGardenCultures } from './ScrPublicGardenCultures'

const Tab = createMaterialTopTabNavigator()

/* @ts-ignore */
export const NavPublicGarden = ({ route, navigation }) => {

  return (
    // <ScrollView>
    // <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName='PublicGardenPage'
        screenOptions={{
          // tabBarBadge: () => ,
          tabBarActiveTintColor: '#1A6111',
          tabBarInactiveTintColor: "#000",
          tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 120 },
          tabBarStyle: {

          },

        }}>
        <Tab.Screen
          name="PublicGardenPage"
          initialParams={route.params}
          component={ScrPublicGardenPage}
          options={{
            title: 'Описание',
            // tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />,
            // headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>

          }}
        />
        {/* <Tab.Screen
          name="PublicGardenTest"
          initialParams={route.params}
          component={ScrPublicGardenNutrition}
          options={{
            title: 'Тест'
          }} /> */}
        <Tab.Screen
          name="PublicGardenFeed"
          initialParams={route.params}
          component={ScrPublicGardenFeed}
          options={{
            title: 'Посты'
            // headerShown: false,
            // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
        <Tab.Screen
          name="PublicGardenNutrition"
          initialParams={route.params}
          component={ScrPublicGardenNutritions}
          options={{
            title: 'Питание'
            // headerShown: false,
            // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
        <Tab.Screen
          name="Cultures"
          initialParams={route.params}
          component={ScrPublicGardenCultures}
          options={{
            title: 'Культуры'
            // headerShown: false,
            // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
        <Tab.Screen
          name="PublicGardenSystems"
          initialParams={route.params}
          component={ScrPublicGardenSystems}
          options={{
            title: 'Системы'
            // headerShown: false,
            // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
    // </NavigationContainer>
    // </ScrollView>
  )
}


const style = StyleSheet.create({
  tabBar: {
    opacity: 1
  }
})

{/* <View><Image
          style={{ width: '100%', height: 200 }}
          source={require('../../assets/images/gardenLayout.jpg')}
        /></View> */}