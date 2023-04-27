import React from 'react'
import { Text, View } from 'react-native'
// import { InputElements } from '../../../atoms/inputs/InputElements'
import { InputElements } from '../../../atoms/inputs/InputMinerals'

export const ProfilesElements = ({
  macroElementsList = [
    { id: 1, element: 'N', number: '100' },
    { id: 2, element: 'P', number: '100' },
    { id: 3, element: 'K', number: '100' },
    { id: 4, element: 'Ca', number: '100' },
    { id: 5, element: 'Mg', number: '100' },
    { id: 6, element: 'S', number: '100' },
    { id: 7, element: 'NO₃', number: '100' },
    { id: 8, element: 'NH₄', divider: 'NO₃', number: '100' },
  ],
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
      <View>{macroElementsList && (
        macroElementsList.map(element => (
          <InputElements key={element.id} element={element.element} number={element.number} />
        )))
      }
      </View>
  )
}
