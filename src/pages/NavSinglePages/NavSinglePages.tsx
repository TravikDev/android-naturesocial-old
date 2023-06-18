import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ScrSystemDetails } from './ScrSystemDetails'
import { ScrNutritionDetails } from './ScrNutritionDetails'
// import { Text, View } from 'react-native'

const Stack = createNativeStackNavigator()

export const NavSinglePages = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name='SystemDetails'
        component={ScrSystemDetails}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='NutritionDetails'
        component={ScrNutritionDetails}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
