import React from 'react'
import { Text, View } from 'react-native'

export const ScreenMiddle = () => {
  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: "#111" }}>
        Middle
      </Text>
    </View>
  )
}
