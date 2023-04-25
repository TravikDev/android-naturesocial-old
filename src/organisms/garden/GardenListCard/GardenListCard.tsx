import { Avatar, Icon, Pressable } from '@react-native-material/core'
import React from 'react'
import { Text, View } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'

export const GardenListCard = ({
  gardenId = 0,
  avatarSrc = 'https://mui.com/static/images/avatar/4.jpg',
  level = 1,
  name = 'Unknown User',
  about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi officia.',
  position = 1,
  /* @ts-ignore */
  navigation
}) => {
  return (
    <Pressable onPress={() => { navigation.navigate('PublicGarden', { gardenId }) }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 15, paddingLeft: 15, paddingRight: 10, paddingVertical: 10, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, maxWidth: '80%' }}>
          <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', gap: 5 }}>
            <Avatar image={{ uri: avatarSrc }} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', width: '85%' }}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>{name}</Text>
            <Text style={{ color: '#666', fontSize: 14, fontWeight: '300' }}>{about}</Text>
          </View>
        </View>

        <View style={{ width: '13%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: "center"  }}>

          {position === 0 && <Icon name='emoji-events' color='#FFD700' size={38} />}
          {position === 1 && <Icon name='emoji-events' color='#C0C0C0' size={38} />}
          {position === 2 && <Icon name='emoji-events' color='#D2B48C' size={38} />}

          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#111' }}>{level}</Text>
          </View>

        </View>

      </View>
    </Pressable>
  )
}
