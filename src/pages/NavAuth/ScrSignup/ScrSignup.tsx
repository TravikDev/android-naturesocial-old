import { Icon } from '@react-native-material/core'
import React, { useEffect, useRef, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/

/* @ts-ignore */
export const ScrSignup = ({ navigation }) => {

    const userRef = useRef(null)
    const errRef = useRef(null)

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        /* @ts-ignore */
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async () => {
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2) {
            setErrMsg('Введены невереные данные')
            return
        }
        setSuccess(true)
        setUser('')
        setPwd('')
        setMatchPwd('')
        navigation.navigate('Signin', { regSuccess: true })
    }

    return (
        <View style={{ display: 'flex', flex: 1, alignItems: 'center', top: '2%' }}>
            <View style={{ width: '90%', gap: 10 }}>
                <View style={errMsg ? style.shownErrMsg : style.offscreen}>
                    <Text>{errMsg}</Text>
                </View>
                <View style={style.loginView}>
                    <Text style={style.inputLabel}>Имя пользователя</Text>
                    <View style={[style.inputView, !validName && { borderColor: '#661111' }]}>
                        <Icon name='account-box' color='#666' size={28} />
                        <TextInput
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            onChangeText={setUser}
                            value={user}
                            ref={userRef}
                            style={style.inputText} />
                        <Icon name={validName ? 'check' : 'close'} color={validName ? '#116611' : '#661111'} size={28} />
                    </View>
                    <View style={userFocus && user && !validName ? style.infoInput : style.offscreen}>
                        <Icon name='info' color='#116611' size={28} />
                        <Text style={style.infoText}>
                            От 4 до 24 символов.
                            {'\n'}Первый символ - буква.
                            {'\n'}Разрешены:
                            {'\n'}{'\t'}· латинские буквы,
                            {'\n'}{'\t'}· цифры,
                            {'\n'}{'\t'}· нижнее подчёркивание,
                            {'\n'}{'\t'}· дефис.
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={style.inputLabel}>Пароль</Text>
                    <View style={[style.inputView, !validPwd && { borderColor: '#661111' }]}>
                        <Icon name='lock' color='#666' size={28} />
                        <TextInput
                            secureTextEntry
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            onChangeText={setPwd}
                            value={pwd}
                            style={style.inputText}
                        />
                        <Icon name={validPwd ? 'check' : 'close'} color={validPwd ? '#116611' : '#661111'} size={28} />
                    </View>
                    <View style={pwdFocus && pwd && !validPwd ? style.infoInput : style.offscreen}>
                        <Icon name='info' color='#116611' size={28} />
                        <Text style={style.infoText}>
                            От 8 до 24 символов. {'\n'}
                            Пароль должен содержать:
                            {'\n'}{'\t'}· Как минимум 1 заглавную букву,
                            {'\n'}{'\t'}· Как минимум 1 строчную букву,
                            {'\n'}{'\t'}· Как минимум 1 цифру.
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={style.inputLabel}>Повторите пароль</Text>
                    <View style={[style.inputView, !(validMatch && !!matchPwd) && { borderColor: '#661111' }]}>
                        <Icon name='lock' color='#666' size={28} />
                        <TextInput
                            secureTextEntry
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            onChangeText={setMatchPwd}
                            value={matchPwd}
                            style={style.inputText}
                        />
                        <Icon name={validMatch && matchPwd ? 'check' : 'close'} color={validMatch && matchPwd ? '#116611' : '#661111'} size={28} />
                    </View>
                    <View style={matchFocus && matchPwd && !validMatch ? style.infoInput : style.offscreen}>
                        <Icon name='info' color='#116611' size={28} />
                        <Text style={style.infoText}>
                            Повторите пароль, {'\n'}введённый в строке выше.
                        </Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Button
                        disabled={!(!!user || !!pwd || !!matchPwd) ? true : false}
                        onPress={() => { setUser(''); setPwd(''); setMatchPwd('') }}
                        title='Очистить'
                        color='#116611' />
                    <Button
                        disabled={!validName || !validPwd || !validMatch ? true : false}
                        title='Регистрация'
                        color='#116611'
                        onPress={handleSubmit}
                    />
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={{ color: '#333', fontSize: 16 }}>Уже зарегистрированы?</Text>
                    <Button
                        color='#116611'
                        title='Вход'
                        onPress={() => navigation.navigate('Signin')}
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
