import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { ScreenProfilePage } from './ScreenUserProfile'
import { ScreenProfileSettings } from './ScreenProfileSettings'
import { Icon } from '@react-native-material/core'

const Tab = createBottomTabNavigator()

export const NavigatorProfile = () => {
  return (
    <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen 
          name="UserProfile" 
          component={ScreenProfilePage}
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='person' size={26} color='#666' />
          }} />
        <Tab.Screen 
          name="Settings" 
          component={ScreenProfileSettings} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
  )
}
