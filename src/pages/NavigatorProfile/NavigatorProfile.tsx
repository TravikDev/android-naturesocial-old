import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { ScreenProfilePage } from './ScreenProfilePage'
// import { ScreenProfileSettings } from './ScreenProfilesSettings'
import { Icon } from '@react-native-material/core'
import { ScreenProfilesPage } from './ScreenProfilesPage'
import { ScreenProfilesSettings } from './ScreenProfilesSettings'
// import { ScreenProfilePage } from './ScreenProfilesPage'

const Tab = createBottomTabNavigator()

export const NavigatorProfile = () => {
  return (
    <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen 
          name="UserProfile" 
          component={ScreenProfilesPage}
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='person' size={26} color='#666' />
          }} />
        <Tab.Screen 
          name="Settings" 
          component={ScreenProfilesSettings} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
  )
}
