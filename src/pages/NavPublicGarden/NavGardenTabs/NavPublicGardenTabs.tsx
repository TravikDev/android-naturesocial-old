import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScrPublicGardenPage } from './ScrPublicGardenPage'
import { ScrPublicGardenFeed } from './ScrPublicGardenFeed'
import { ScrPublicGardenSystems } from './ScrPublicGardenSystems'
import { ScrPublicGardenNutritions } from './ScrPublicGardenNutritions'
import { ScrPublicGardenDiaries } from './ScrPublicGardenDiaries'

const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()

/* @ts-ignore */
export const NavPublicGardenTabs = ({ route, navigation }) => {

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
          title: 'Записи'
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
        name="PublicGardenDiaries"
        initialParams={route.params}
        component={ScrPublicGardenDiaries}
        options={{
          title: 'Дневник'
          // headerShown: false,
          // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
        }} />


    </Tab.Navigator>
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