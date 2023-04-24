import React from 'react'
import { Text, View } from 'react-native'
import { ProgressBar } from '../Progress/ProgressBar'

export const LevelBadge = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, marginBottom: 20 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Level 1</Text>
      </View>
      <View style={{ width: '80%' }}>
        <ProgressBar percent={40} />
      </View>
    </View>
  )
}
