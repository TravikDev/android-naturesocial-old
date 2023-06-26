import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import React, { Children, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const GardenFeedPostCard = ({ title, image = '', children, categories, postId = 1 }) => {

    const [isPressed, toggleIsPressed] = useState(false)

    const [isLiked, toggleIsLicked] = useState(false)

    const navigation = useNavigation()

    return (
        <ScrollView contentContainerStyle={{}}>

            <View
                style={{ display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
            >

                <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>
                    <View>
                        <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>{title}</Text>
                        <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{categories}</Text>
                    </View>


                    {/* <Divider /> */}

                    <TouchableWithoutFeedback
                        onLongPress={() => { toggleIsPressed(true); console.log('evt') }}
                        onPressOut={() => { toggleIsPressed(false) }}

                        style={{ overflow: 'hidden', borderRadius: 5 }}>
                        <ImageBackground style={{ height: 250, width: "100%", overflow: 'hidden' }} source={{ uri: 'https://telegra.ph/file/cba4855a063f0937ac02a.png' }}>
                            {isPressed && (
                                <View style={{ flex: 1, justifyContent: 'space-between', gap: 10 }}>
                                    <View style={{ backgroundColor: '#000000aa', paddingVertical: 4, paddingHorizontal: 8, flexDirection: 'row', gap: 8, justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <View style={{ flexDirection: "row", alignItems: 'center', gap: 2 }}>
                                            <Icon name='favorite' color='#fff' size={16} />
                                            <Text style={{ fontWeight: "400", fontSize: 16, color: "#fff" }}>2k</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: 'center', gap: 2 }}>
                                            <Icon name='remove-red-eye' color='#fff' size={16} />
                                            <Text style={{ fontWeight: "400", fontSize: 16, color: "#fff" }}>13k</Text>
                                        </View>

                                    </View>
                                    <View style={{ backgroundColor: "#000000cc", paddingVertical: 4, paddingHorizontal: 8, gap: 2 }}>
                                        <Text style={{ fontWeight: "400", fontSize: 16, color: "#fff" }}>
                                            {children}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        </ImageBackground>
                    </TouchableWithoutFeedback>

                    {/* <Divider /> */}

                </View>

                <Divider style={{ marginBottom: 10 }} />

                <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        {isLiked ? (<ButtonIconCircle iconTitle='favorite-outline' size={36} color='#ccc' func={() => { toggleIsLicked(state => !state) }} />) : (
                            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#116611' func={() => { toggleIsLicked(state => !state) }} />
                        )}
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <Button
                            title="Читать"
                            tintColor='#fff'
                            color='#3FB049'
                            variant='outlined'
                            /* @ts-ignore */
                            onPress={() => navigation.push('PostDetails', { postId, })}
                        />
                    </View>
                </View>
            </View>


        </ScrollView>
    )
}