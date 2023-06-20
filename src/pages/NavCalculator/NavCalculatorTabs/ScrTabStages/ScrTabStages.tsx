import React, { useRef, useState } from 'react'
import { Alert, Dimensions, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { ScrollView, Switch, TextInput } from 'react-native-gesture-handler'
import { NutritionLineChart } from '../../../../organisms/nutrition/charts/LineChart/LineChart'
import { Button, Divider, Icon, IconButton, Pressable } from '@react-native-material/core'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProfilesElementsPost } from '../../../../organisms/profiles/ProfilesElementsPost'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { ProfilesElementsCharts } from '../../../../organisms/profiles/ProfilesElementsCharts/ProfilesElementsCharts'

const screen = Dimensions.get('window')

export const ScrTabStages = () => {
  const insets = useSafeAreaInsets();
  const topBarHeight = insets.top;

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    labelsIncluded: [false, true, true, false, true, true, false, false],
    datasets: [
      {
        data: [75, 105, 115, 140, 140, 100, 80, 60],
        color: (opacity: number) => 'rgba(0, 179, 179, 1)', // Цвет первой линии
        strokeWidth: 1, // Ширина первой линии
        name: 'N',
        include: true,
        legendColor: 'rgba(0, 179, 179, 1)'
      },
      {
        data: [40, 50, 60, 80, 100, 130, 110, 90],
        color: (opacity: number) => 'rgba(0, 74, 31, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'P',
        include: true,
        legendColor: 'rgba(0, 74, 31, 1)'
      },
      {
        data: [80, 100, 140, 260, 300, 260, 220, 240],
        color: (opacity: number) => 'rgba(0, 150, 0, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'K',
        include: true,
        legendColor: 'rgba(0, 150, 0, 1)'
      },
      {
        data: [65, 95, 100, 110, 100, 75, 65, 55],
        color: (opacity: number) => 'rgba(153, 153, 153, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'Ca',
        include: true,
        legendColor: 'rgba(153, 153, 153, 1)'
      },
      {
        data: [45, 55, 60, 65, 55, 50, 45, 40],
        color: (opacity: number) => 'rgba(230, 200, 0, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'Mg',
        include: true,
        legendColor: `rgba(230, 200, 0, 1)`
      },
      {
        data: [35, 40, 45, 50, 55, 55, 60, 65],
        color: (opacity: number) => 'rgba(255, 165, 0, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'S',
        include: true,
        legendColor: 'rgba(255, 165, 0, 1)'
      },
    ],
  };

  // console.log('data: ', data)


  return (

    <ScrollView style={{ display: 'flex', flex: 1, backgroundColor: "#fff", paddingHorizontal: 15, zIndex: 20, paddingTop: 15 }}>
      <View style={{ gap: 15, paddingBottom: 40 }}>

        <View>

          <ProfilesElementsCharts
            title='Макроэлементы'
            data={data} />
        </View>

        <View>
          <ProfilesElementsCharts
            title='Микроэлементы'
            data={data} />
        </View>

        <View>
          <ProfilesElementsCharts
            title='Соотношение форм азота'
            data={data}
            filtersCount={1} />
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    zIndex: 6,
    // backgroundColor: '#cccccccc'
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    // alignItems: 'center',
    width: '80%',
    gap: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: 2,
    // },
    // shadowOpacity: 0.9,
    // shadowRadius: 5,
    elevation: 4,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc'
    // elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#efefef',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 18,
    color: '#111',
    fontWeight: '400',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
    paddingVertical: 2,
    color: '#111',
    fontSize: 18,
    fontWeight: '300'

  },
  overlay: {
    position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});