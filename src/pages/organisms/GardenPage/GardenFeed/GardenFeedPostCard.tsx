import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { Children } from 'react'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const GardenFeedPostCard = ({ title, image = '', children, categories }) => {



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

                        <View style={{ overflow: 'hidden', borderRadius: 5}}>
                            <Image style={{ height: 150, width: "100%" }} source={require('../../../../assets/images/posts/post1.jpeg')} />
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