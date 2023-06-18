import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { Children } from 'react'
import { useNavigation } from '@react-navigation/native'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const GardenFeedPostCard = ({ title, image = '', children, categories, postId = 1 }) => {

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

                    <View style={{ overflow: 'hidden', borderRadius: 5 }}>
                        <Image style={{ height: 150, width: "100%" }} source={{ uri: 'https://telegra.ph/file/cba4855a063f0937ac02a.png' }} />
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