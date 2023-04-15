import { Portal, Pressable, Text } from '@react-native-material/core'
import { Dimensions } from "react-native"
import React, { useState } from 'react'
import { View } from "react-native"
import { ButtonIconCircle } from '../Button/ButtonIconCircle'

/* @ts-ignore */
export const Filter = ({ IconTitle, size, color, children }) => {

    const scrWidth = Dimensions.get('window').width
    const scrHeight = Dimensions.get('window').height

    const [popup, togglePopup] = useState(false)

    return (
        <>
            <View style={{ paddingRight: 10 }}>
                <ButtonIconCircle iconTitle='tune' size={32} color="#000" func={() => togglePopup(true)} />
            </View>

            {popup &&
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={() => togglePopup(false)} style={{ width: scrWidth, height: scrHeight, backgroundColor: "#000", opacity: 0.25, top: scrHeight / 2 - 48 }} />
                    <Pressable disabled style={{
                        top: scrHeight / 2,
                        position: "absolute",
                        backgroundColor: "#fff",
                        height: 300,
                        width: scrWidth * 0.9,
                        borderRadius: 10,
                        borderColor: "#ccc",
                        borderWidth: 1,
                        borderStyle: 'solid',
                        zIndex: 20
                    }}>
                        {children}
                    </Pressable></View>
            }
        </>
    )
}
