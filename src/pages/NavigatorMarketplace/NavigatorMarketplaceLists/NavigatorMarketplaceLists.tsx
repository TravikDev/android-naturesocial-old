import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { ScreenProductsList } from './ScreenProductsList/ScreenProductsList'
import { ScreenStoresList } from './ScreenStoresList'

const Tab = createMaterialTopTabNavigator()

export const NavigatorMarketplaceLists = () => {
    return (
      <Tab.Navigator screenOptions={() => ({
        tabBarActiveTintColor: '#1A6111',
        tabBarInactiveTintColor: "#000",
        tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
      })}>
        <Tab.Screen
          name="Products"
          component={ScreenProductsList}
          options={{
            title: 'Products',
            // tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />,
            // headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
  
          }}
        />
        <Tab.Screen
          name="Stores"
          component={ScreenStoresList}
          options={{
            // headerShown: false,
            // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
    )
}
