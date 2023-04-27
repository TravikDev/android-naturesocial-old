import React from 'react'
import { Text, View } from 'react-native'
// import { InputElements } from '../../../atoms/inputs/InputElements'
import { InputElements } from '../../../atoms/inputs/InputMinerals'

export const ProfilesElements = ({
  microElementsList = [
    { id: 1, element: 'Fe', number: '100' },
    { id: 2, element: 'B', number: '100' },
    { id: 3, element: 'Zn', number: '100' },
    { id: 4, element: 'Mn', number: '100' },
    { id: 5, element: 'Cu', number: '100' },
    { id: 6, element: 'Mo', number: '100' },
  ]
}) => {



  return (
    <View>
      {microElementsList && (
        microElementsList.map(element => (
          <InputElements key={element.id} element={element.element} number={element.number} />
        )))
      }
    </View>
  )
}
