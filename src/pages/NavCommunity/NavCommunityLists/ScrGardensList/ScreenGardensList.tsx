import { Avatar, Button, Divider, ListItem, Pressable } from '@react-native-material/core'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { LevelBadge } from '../../../../atoms/levels/LevelBadge'
import { GardenListCard } from '../../../../organisms/garden/GardenListCard/GardenListCard'

/* @ts-ignore */
export const ScreenGardensList = ({ navigation }) => {

    const gardensList = [
        { gardenId: 1, name: 'Mary Jane', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 41, position: 0, avatarSrc: 'https://mui.com/static/images/avatar/4.jpg' },
        { gardenId: 2, name: 'John Smith', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 39, position: 1, avatarSrc: 'https://mui.com/static/images/avatar/5.jpg' },
        { gardenId: 3, name: 'Mike Vazovsky', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 27, position: 2, avatarSrc: 'https://mui.com/static/images/avatar/6.jpg' },
        { gardenId: 4, name: 'Hey Dude', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 19, position: 3, avatarSrc: 'https://mui.com/static/images/avatar/1.jpg' },
        { gardenId: 5, name: 'Artem', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 14, position: 4, avatarSrc: 'https://mui.com/static/images/avatar/2.jpg' },
    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
            <View>

                {
                    gardensList.map((garden, idx) => (
                        <View key={garden.avatarSrc}>
                            <GardenListCard
                                name={garden.name}
                                about={garden.about}
                                avatarSrc={garden.avatarSrc}
                                level={garden.level}
                                position={garden.position}
                                navigation={navigation}
                                gardenId={garden.gardenId} />
                            <Divider />
                            {/* {idx !== usersList.length && <Divider />} */}
                        </View>
                    ))
                }

            </View>
        </ScrollView>
        </View>
    )
}
