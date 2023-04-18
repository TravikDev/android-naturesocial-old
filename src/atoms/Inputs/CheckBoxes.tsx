import { Icon } from '@react-native-material/core'
import { useState } from 'react'
import { Pressable, View } from "react-native"

/* @ts-ignore */ 
export const CheckBoxes = ({ checked = false, handleToggleCheck = () => {} }) => {

  return (
    /* @ts-ignore */
    <Pressable onPress={() => handleToggleCheck(state => !state)} 
    style={{ 
        borderWidth: 1, 
        borderColor: '#666', 
        width: 24, 
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {checked ? <View style={{ top: -2, left: -2 }}><Icon name='done' size={26} /></View> : null}
    </Pressable>
  )
}
