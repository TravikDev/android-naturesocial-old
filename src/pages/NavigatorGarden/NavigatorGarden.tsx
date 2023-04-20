import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { ScreenUserProfile } from './ScreenUserProfile'
// import { ScreenUserSettings } from './ScreenUserSettings'
import { Icon } from '@react-native-material/core'
import { ScreenGardenPage } from './ScreenGardenPage'
import { ScreenGardenSettings } from './ScreenGardenSettings'

const Tab = createBottomTabNavigator()

export const NavigatorGarden = () => {
  return (
    <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen 
          name="GardenPage" 
          component={ScreenGardenPage}
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />
          }} />
        <Tab.Screen 
          name="Settings" 
          component={ScreenGardenSettings} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
          }} />
      </Tab.Navigator>
  )
}
