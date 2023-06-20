import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { useNavigation } from '@react-navigation/native'
// import { Children } from 'react'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ProfilesElementsStages = ({
    title = '',
    image = '',
    /* @ts-ignore */
    children,
    category = '',
    subCategory = '',
    system = '',
    substrate = '',
    nutritionId = 0,
}) => {

    const navigation = useNavigation()

    return (
        <ScrollView contentContainerStyle={{}}>

            <View
                style={{ display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
            >

                <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>
                    <View>
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>{title}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>{system}</Text>
                                <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>{substrate}</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>{category}</Text>
                                <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>{subCategory}</Text>
                            </View>
                        </View>
                    </View>


                    {/* <Divider /> */}
                    {/* 
                    <View style={{ overflow: 'hidden', borderRadius: 5 }}>
                        <Image style={{ height: 150, width: "100%" }} source={require('../../../../assets/images/posts/post1.jpeg')} />
                    </View> */}

                    {/* <Divider /> */}

                    {/* <View style={{ gap: 10 }}> */}
                    {children}
                    {/* </View> */}

                </View>

                {/* <Divider style={{ marginBottom: 10 }} /> */}

                <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Button
                            title="Сохранить"
                            tintColor='#fff'
                            color='#3FB049'
                            variant='outlined'
                        />
                    </View>
                    {/* <View>
                        <Button
                            title=""
                            tintColor='#fff'
                            color='#3FB049'
                            variant='outlined'
                        />
                    </View> */}
                    <View style={{ marginBottom: 5 }}>
                        <Button
                            title="Открыть"
                            tintColor='#fff'
                            color='#3FB049'
                            variant='outlined'
                            /* @ts-ignore */
                            onPress={() => navigation.push('NavCalculator', { nutritionId })}
                        />
                    </View>
                </View>
            </View>


        </ScrollView>
    )
}