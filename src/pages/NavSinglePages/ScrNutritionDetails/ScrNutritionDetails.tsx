import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ScrNutritionDetails = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
      <Text>
        Nutrition Details
      </Text>
    </SafeAreaView>
  )
}
