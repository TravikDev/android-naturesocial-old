import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { ScreenUserProfile } from './ScreenUserProfile'
import { ScreenUserSettings } from './ScreenUserSettings'
import { Icon } from '@react-native-material/core'

const Tab = createBottomTabNavigator()

export const NavigatorUser = () => {
  return (
    <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen 
          name="Profile" 
          component={ScreenUserProfile} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='person' size={26} color='#666' />
          }} />
        <Tab.Screen 
          name="Settings" 
          component={ScreenUserSettings} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
  )
}
