import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ScreenPostsList = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={{ }}>

            <View style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', height: scrHeight, paddingTop: 20, paddingBottom: 20, gap: 20 }}>
                <View
                    style={{ width: "90%", display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, overflow: 'hidden' }}
                >
                    <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    </View>
                    <View>
                        <Image style={{ height: 120, width: "100%" }} source={require('../../../assets/images/posts/post1.jpeg')} />
                    </View>
                    
                    <View style={{ margin: 15, gap: 15 }}>
                        <View>
                            <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>First title</Text>
                            <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>Category 1, Category 2</Text>
                        </View>

                        <Divider />

                        <Text style={{ fontWeight: "300", fontSize: 16, color: "#444" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>

                    <Divider style={{ marginBottom: 10 }}/>

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
                                onPress={() => navigation.push('PostDetails')}
                                trailing={
                                    /* @ts-ignore */
                                    props => <Icon name="send" size={30} color="#3e9b46" {...props} />
                                }

                            />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
