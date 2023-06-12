import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

/* @ts-ignore */
export const ScrSignin = ({ navigation, route }) => {

    const regSuccess = route.params?.regSuccess

    useEffect(() => {}, [regSuccess])

    return (
        <View>
            <Text>{regSuccess ? 'Success' : ''}</Text>
            <Text>Login</Text>

            <View><Pressable onPress={() => {navigation.navigate('Signup')} }><Text>Register</Text></Pressable></View>
        </View>
    )
}

const style = StyleSheet.create({
    shownErrMsg: {
        backgroundColor: '#222222',
        borderRadius: 10,
        borderColor: '#006600',
        borderWidth: 1
    },
    offscreen: {
        display: 'none',
    }
})
