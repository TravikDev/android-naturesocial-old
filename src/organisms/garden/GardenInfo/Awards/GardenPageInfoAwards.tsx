import React from 'react'
import { View } from 'react-native'

/* @ts-ignore */
export const GardenPageInfoAwards = ({ children }) => {
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
