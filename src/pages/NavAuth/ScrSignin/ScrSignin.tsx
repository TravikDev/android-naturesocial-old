import { Icon, Snackbar } from '@react-native-material/core'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

/* @ts-ignore */
export const ScrSignin = ({ navigation, route }) => {

    const userRef = useRef(null)

    const [user, setUser] = useState('')
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [statusMsg, setStatusMsg] = useState('')


    const regSuccess = route.params?.regSuccess

    console.log(regSuccess)

    useEffect(() => {
        // console.log(regSuccess)
        if (regSuccess) {
            setStatusMsg(regSuccess)
        }
        setTimeout(() => { setStatusMsg('') }, 3000)
        console.log(regSuccess)
    }, [regSuccess])

    useEffect(() => {

    }, [])
    const handleSignin = () => {

    }

    return (
        <View style={{ display: 'flex', flex: 1, alignItems: 'center', top: '2%' }}>
            {statusMsg && <Snackbar
                message="Вы успешно зарегистрировались!"
                style={{ position: "absolute", start: 16, end: 16, bottom: 32 }}
            />}

            <View style={{ width: '90%', gap: 10 }}>
                <View style={errMsg ? style.shownErrMsg : style.offscreen}>
                    <Text>{errMsg}</Text>
                </View>
                <View style={style.loginView}>
                    <Text style={style.inputLabel}>Имя пользователя</Text>
                    <View style={style.inputView}>
                        <Icon name='account-box' color='#666' size={28} />
                        <TextInput
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            onChangeText={setUser}
                            value={user}
                            ref={userRef}
                            style={style.inputText}
                        />
                    </View>
                </View>
                <View>
                    <Text style={style.inputLabel}>Пароль</Text>
                    <View style={style.inputView}>
                        <Icon name='lock' color='#666' size={28} />
                        <TextInput
                            secureTextEntry
                            onChangeText={setPwd}
                            value={pwd}
                            style={style.inputText}
                        />
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Button
                        disabled={true}
                        // onPress={() => { setUser(''); setPwd('') }}
                        title='Не помню'
                        color='#116611' />
                    <Button
                        disabled={!!user && !!pwd ? true : false}
                        title='Вход'
                        color='#116611'
                        onPress={handleSignin}
                    />
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={{ color: '#333', fontSize: 16 }}>Еще не зарегистрированы?</Text>
                    <Button
                        color='#116611'
                        title='Регистрация'
                        onPress={() => navigation.navigate('Signup')}
                    />
                </View>
            </View>
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
    },
    loginView: {

    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#116611',
        padding: 5,
        height: 48
    },
    inputText: {
        paddingVertical: 0,
        fontSize: 18,
        width: '82%',
        color: '#111',
    },
    inputLabel: {
        fontSize: 16,
        color: '#111',
        marginBottom: 5
    },
    infoInput: {
        marginTop: 10,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#116611',
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    infoText: {
        fontSize: 14,
        color: '#111',
        // textAlignVertical: 'auto',
        verticalAlign: 'auto'
    }

})
