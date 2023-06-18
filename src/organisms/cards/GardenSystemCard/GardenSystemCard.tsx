import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { Children } from 'react'
import { useNavigation } from '@react-navigation/native'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const GardenSystemCard = ({ title, image = '', children, type = '', substrate = '', culturesCount = 0, verietiesCount = 0, isActive = false, imageSystemUrl = '', systemId = 0 }) => {

    const data = {
        id: 1,
        title: 'Title',
        content: 'Content',
    }

    const navigation = useNavigation()

    return (
        <ScrollView contentContainerStyle={{}}>

            <View
                style={{ display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
            >

                <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>
                    <View>
                        <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>{title}</Text>
                        <Divider style={{ marginVertical: 5 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Text style={{ fontWeight: "300", fontSize: 18, color: "#111" }}>{type}</Text>
                                <Text style={{ fontWeight: "300", fontSize: 18, color: "#111" }}>{substrate}</Text>
                            </View>
                            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Text style={{ fontWeight: "300", fontSize: 18, color: "#111" }}>{culturesCount} культур</Text>
                                <Text style={{ fontWeight: "300", fontSize: 18, color: "#111" }}>{verietiesCount} сортов</Text>
                            </View>
                        </View>
                        <Divider style={{ marginTop: 5 }} />
                    </View>


                    {/* <Divider /> */}

                    { !!imageSystemUrl && <View style={{ overflow: 'hidden', borderRadius: 5 }}>
                        <Image style={{ height: 150, width: "100%" }} source={{ uri: imageSystemUrl }} />
                    </View>}

                    {/* <Divider /> */}

                    <View>
                        {children}
                    </View>
                </View>

                <Divider style={{ marginBottom: 10 }} />

                <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        {isActive ? (
                            <Button
                                title="Включена"
                                tintColor='#fff'
                                color='#3FB049'
                                variant='outlined'
                            />
                        ) : (
                            <Button
                            title="Выключена"
                            tintColor='#fff'
                            color='#990000'
                            variant='outlined'
                            disabled
                        />
                        )
                    }
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <Button
                            title="Открыть"
                            tintColor='#fff'
                            color='#3FB049'
                            variant='outlined'
                            /* @ts-ignore */
                            onPress={() => navigation.push('SystemDetails', { systemId })}
                        />
                    </View>
                </View>
            </View>


        </ScrollView>
    )
}