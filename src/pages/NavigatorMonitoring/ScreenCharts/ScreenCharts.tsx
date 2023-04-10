import { StyleSheet, View } from "react-native"
import { Text } from '@react-native-material/core'
import React from 'react'
import { MultilineChart } from "./MultilineChart"

export const ScreenCharts = () => {
  return (
    <View style={styles.container}>
    <MultilineChart />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});