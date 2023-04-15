import { Icon, Pressable } from '@react-native-material/core'
import React from 'react'
import { View } from 'react-native'

/* @ts-ignore */
export const ButtonIconCircle = ({ iconTitle, size, color, func = f => f }) => {
    return (
        <View style={{ borderRadius: 25, overflow: 'hidden'}}>
            <Pressable 
                onPress={func}
                style={{ width: size, height: size, borderRadius: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={iconTitle} size={size*0.7} color={color} />
            </Pressable>
        </View>
    )
}
