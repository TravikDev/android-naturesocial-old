import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { Children } from 'react'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const PostCard = ({ title, image = '', children, categories }) => {

    // return (
    //     <View
    //         style={{ width: "100%", display: 'flex', overflow: 'hidden' }}
    //     >
    //         <View style={{ margin: 15 }}>
    //             <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>{title}</Text>
    //             <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{categories}</Text>
    //         </View>

    //         <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#999' }}>
    //             <Image style={{ height: 180, width: "100%" }} source={require('../../../assets/images/posts/post1.jpeg')} />
    //         </View>

    //         <View style={{ margin: 15, gap: 15 }}>


    //             <Text style={{ fontWeight: "300", fontSize: 16, color: "#444" }} accessibilityLanguage='en-US' selectable>
    //                 {children}
    //             </Text>
    //         </View>

    //         <Divider />

    //         <View style={{ paddingHorizontal: 10, paddingTop: 5, display: 'flex', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between' }}>
    //             <View>
    //                 <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#b9b9b9' />
    //             </View>
    //             <View style={{ marginBottom: 5 }}>
    //                 <Button
    //                     title="Read"
    //                     tintColor='#fff'
    //                     color='#090'
    //                 // variant='outlined'
    //                 // onPress={() => navigation.push('PostDetails')}
    //                 // trailing={
    //                 //     /* @ts-ignore */
    //                 //     props => <Icon name="send" size={30} color="#3e9b46" {...props} />
    //                 // }

    //                 />
    //             </View>
    //         </View>
    //         <Divider />
    //     </View>
    // )

    return (
        <ScrollView contentContainerStyle={{}}>

                <View
                    style={{ display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
                >
                    {/* <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                            <Avatar label="Kent Dodds" autoColor size={48} />
                            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>OverGrower</Text>
                                <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>30 level</Text>
                            </View>
                        </View>
                        <View>
                            <ButtonIconCircle iconTitle="more-vert" size={32} color='#666' />
                        </View>
                    </View> */}


                    <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>
                        <View>
                            <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>{title}</Text>
                            <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{categories}</Text>
                        </View>
                        

                        {/* <Divider /> */}

                        <View style={{ overflow: 'hidden', borderRadius: 5}}>
                            <Image style={{ height: 150, width: "100%" }} source={require('../../../assets/images/posts/post1.jpeg')} />
                        </View>

                        {/* <Divider /> */}

                        <Text style={{ fontWeight: "300", fontSize: 16, color: "#444" }}>
                            {children}
                        </Text>
                    </View>

                    <Divider style={{ marginBottom: 10 }} />

                    <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Button
                                title="Read"
                                tintColor='#fff'
                                color='#3FB049'
                                variant='outlined'
                            // onPress={() => navigation.push('PostDetails')}
                            // trailing={
                            //     /* @ts-ignore */
                            //     props => <Icon name="send" size={30} color="#3e9b46" {...props} />
                            // }

                            />
                        </View>
                    </View>
                </View>


        </ScrollView>
    )
}