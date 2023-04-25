import React from 'react'
import { View } from 'react-native'

/* @ts-ignore */
export const GardenPageInfoDevice = ({ children }) => {
  return (
    <View style={{
      height: 100, width: 100, borderRadius: 10,
      // borderBottomRightRadius: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {children}
    </View>
  )
}
