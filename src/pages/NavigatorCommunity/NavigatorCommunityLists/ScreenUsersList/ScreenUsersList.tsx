import { Avatar, Divider, ListItem, Pressable } from '@react-native-material/core'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { LevelBadge } from '../../../../atoms/levels/LevelBadge'
import { UserListCard } from '../../../organisms/community/UserListCard'

/* @ts-ignore */
export const ScreenUsersList = ({ navigation }) => {


    const usersList = [
        { id: '1', name: 'Mary Jane', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 41, position: 0, avatarSrc: 'https://mui.com/static/images/avatar/4.jpg' },
        { id: '2', name: 'John Smith', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 39, position: 1, avatarSrc: 'https://mui.com/static/images/avatar/5.jpg' },
        { id: '3', name: 'Mike Vazovsky', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 27, position: 2, avatarSrc: 'https://mui.com/static/images/avatar/6.jpg' },
        { id: '4', name: 'Hey Dude', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 19, position: 3, avatarSrc: 'https://mui.com/static/images/avatar/1.jpg' },
        { id: '5', name: 'Artem', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 14, position: 4, avatarSrc: 'https://mui.com/static/images/avatar/2.jpg' },
    ]

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#fff' }}>

                {
                    usersList.map((user, idx) => (
                        <View key={user.avatarSrc}>
                        <UserListCard name={user.name} about={user.about} avatarSrc={user.avatarSrc} level={user.level} position={user.position} />
                        <Divider />
                        {/* {idx !== usersList.length && <Divider />} */}
                        </View>
                    ))
                }

            </View>
        </ScrollView>
    )
}
