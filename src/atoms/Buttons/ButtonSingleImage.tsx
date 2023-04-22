import { Pressable } from '@react-native-material/core'
import React from 'react'
import { Text } from 'react-native'


/* @ts-ignore */
export const ButtonSingleImage = ({ children, func = f => f, colorButton = '#393', colorText = "#fff" }) => {
  return (
    <Pressable style={{ height: 42, backgroundColor: colorButton, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={func}>
      {children}
    </Pressable>
  )
}