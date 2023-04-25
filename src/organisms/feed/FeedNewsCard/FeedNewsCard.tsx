import { Avatar, Button, Divider } from '@react-native-material/core'
import { Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'

// const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const FeedNewsCard = ({
    newsId = 0,
    title = 'Unknown',
    imageUrl = 'https://telegra.ph/file/30c65e864c7edb24904a2.png',
    children = 'Unknown',
    categories = 'Unknown',
    newsDate = new Date().toLocaleDateString(),
    /* @ts-ignore */
    navigation
}) => {

    return (

        <View
            style={{ display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
        >
            <View style={{ paddingHorizontal: 15, paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                    <Avatar label="Kent Dodds" autoColor size={48} />
                    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>OverGrower</Text>
                        <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>30 level</Text>
                    </View>
                </View>
                <View>
                    <ButtonIconCircle iconTitle="more-vert" size={32} color='#666' />
                </View> */}


                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>{title}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{categories}</Text>
                        <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{newsDate}</Text>
                    </View>
                </View>

                <Divider />
            </View>


            <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>


                {/* <Divider /> */}

                <View style={{ overflow: 'hidden', borderRadius: 5 }}>
                    <Image style={{ height: 150, width: "100%" }} source={{ uri: imageUrl }} />
                </View>

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
                        onPress={() => {
                            navigation.navigate('NewsDetails', { newsId })
                        }}
                    />
                </View>
            </View>
        </View>
    )
}