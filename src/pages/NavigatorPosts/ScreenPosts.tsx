import { Avatar, Button, Icon, Surface } from '@react-native-material/core'
import React from 'react'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../atoms/Button/ButtonIconCircle'
import { Spoiler } from '../../atoms/Spoiler/Spoiler'
import { createDrawerNavigator } from '@react-navigation/drawer'

const scrWidth = Dimensions.get('window').width

/* @ts-ignore */
export const ScreenPosts = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 20, gap: 20 }}>

            <View style={{ padding: 20 }}>
                <Spoiler title="Spoiler title">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Spoiler>
            </View>

            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Surface
                    elevation={2}
                    category="medium"
                    style={{ width: (scrWidth * 0.9), display: 'flex' }}
                >
                    <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                            <Avatar label="Kent Dodds" autoColor size={48} />
                            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>OverGrower</Text>
                                <Text style={{ fontWeight: "400", fontSize: 14, color: "#666" }}>Алексей Петрович</Text>
                            </View>
                        </View>
                        <View>
                            <ButtonIconCircle iconTitle="more-vert" size={32} color='#666' />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 120, width: (scrWidth * 0.9) }} source={require('../../assets/images/posts/post1.jpeg')} />
                    </View>
                    <View style={{ margin: 15, gap: 15 }}>
                        <View>
                            <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>First title</Text>
                            <Text style={{ fontWeight: "400", fontSize: 14, color: "#666" }}>Category 1, Category 2</Text>
                        </View>
                        <Text style={{ fontWeight: "400", fontSize: 16, color: "#444" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Button
                                title="More"
                                tintColor='#fff'
                                color='#3FB049'
                                variant='outlined'
                                onPress={() => { }}
                                trailing={
                                    /* @ts-ignore */
                                    props => <Icon name="send" size={30} color="#3e9b46" {...props} />
                                }

                            />
                        </View>
                    </View>
                </Surface>
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Surface
                    elevation={2}
                    category="medium"
                    style={{ width: (scrWidth * 0.9), display: 'flex' }}
                >
                    <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                            <Avatar label="Kent Dodds" autoColor size={48} />
                            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>OverGrower</Text>
                                <Text style={{ fontWeight: "400", fontSize: 14, color: "#666" }}>Алексей Петрович</Text>
                            </View>
                        </View>
                        <View>
                            <ButtonIconCircle iconTitle="more-vert" size={32} color='#666' />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 120, width: (scrWidth * 0.9) }} source={require('../../assets/images/posts/post1.jpeg')} />
                    </View>
                    <View style={{ margin: 15, gap: 15 }}>
                        <View>
                            <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>First title</Text>
                            <Text style={{ fontWeight: "400", fontSize: 14, color: "#666" }}>Category 1, Category 2</Text>
                        </View>
                        <Text style={{ fontWeight: "400", fontSize: 16, color: "#444" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Button
                                title="More"
                                tintColor='#fff'
                                color='#3FB049'
                                variant='outlined'
                                onPress={() => { }}
                                trailing={
                                    /* @ts-ignore */
                                    props => <Icon name="send" size={30} color="#3e9b46" {...props} />
                                }

                            />
                        </View>
                    </View>
                </Surface>
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Surface
                    elevation={2}
                    category="medium"
                    style={{ width: (scrWidth * 0.9), display: 'flex' }}
                >
                    <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                            <Avatar label="Kent Dodds" autoColor size={48} />
                            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>OverGrower</Text>
                                <Text style={{ fontWeight: "400", fontSize: 14, color: "#666" }}>Алексей Петрович</Text>
                            </View>
                        </View>
                        <View>
                            <ButtonIconCircle iconTitle="more-vert" size={32} color='#666' />
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: 120, width: (scrWidth * 0.9) }} source={require('../../assets/images/posts/post1.jpeg')} />
                    </View>
                    <View style={{ margin: 15, gap: 15 }}>
                        <View>
                            <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>First title</Text>
                            <Text style={{ fontWeight: "400", fontSize: 14, color: "#666" }}>Category 1, Category 2</Text>
                        </View>
                        <Text style={{ fontWeight: "400", fontSize: 16, color: "#444" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Button
                                title="More"
                                tintColor='#fff'
                                color='#3FB049'
                                variant='outlined'
                                onPress={() => { }}
                                trailing={
                                    /* @ts-ignore */
                                    props => <Icon name="send" size={30} color="#3e9b46" {...props} />
                                }

                            />
                        </View>
                    </View>
                </Surface>
            </View>
        </ScrollView>
    )
}
