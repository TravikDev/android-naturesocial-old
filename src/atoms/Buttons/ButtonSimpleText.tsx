import { Pressable } from '@react-native-material/core'
import React from 'react'
import { Text } from 'react-native'

/* @ts-ignore */
export const ButtonSimpleText = ({ children, func = f => f, colorButton = '#393', colorText = "#fff" }) => {
  return (
    <Pressable style={{ height: 36, backgroundColor: colorButton, paddingHorizontal: 10, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={func}>
      <Text style={{ color: colorText, fontSize: 16, textTransform: 'uppercase', fontWeight: '500' }}>{children}</Text>
    </Pressable>
  )
}
