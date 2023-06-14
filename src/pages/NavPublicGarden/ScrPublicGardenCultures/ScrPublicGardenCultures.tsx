import React from 'react'
import { Text, View } from 'react-native'
import { SpoilerCultures } from '../../../atoms/Spoilers/SpoilerCultures'

export const ScrPublicGardenCultures = () => {
  return (
    <View>
      <Text>Cultures & Verieties</Text>
      <SpoilerCultures title='Огурец'>
        <Text>Кафкас</Text>
      </SpoilerCultures>
    </View>
  )
}
