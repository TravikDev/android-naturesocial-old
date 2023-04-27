import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { ScrProductsList } from './ScreenProductsList/ScrProductsList'
import { ScrStoresList } from './ScreenStoresList'
// import { ScreenProductsList } from './ScreenProductsList/ScrProductsList'
// import { ScreenStoresList } from './ScreenStoresList'

const Tab = createMaterialTopTabNavigator()

export const NavMarketplaceLists = () => {
    return (
      <Tab.Navigator screenOptions={() => ({
        tabBarActiveTintColor: '#1A6111',
        tabBarInactiveTintColor: "#000",
        tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
      })}>
        <Tab.Screen
          name="Products"
          component={ScrProductsList}
          options={{
            title: 'Products',
            // tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />,
            // headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
  
          }}
        />
        <Tab.Screen
          name="Stores"
          component={ScrStoresList}
          options={{
            // headerShown: false,
            // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
    )
}
