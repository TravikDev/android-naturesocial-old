import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { ScrSystemDetails } from '../NavSinglePages/ScrSystemDetails'
import { NavPublicGardenTabs } from './NavGardenTabs'
import { Dimensions, Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { Avatar, Pressable } from '@react-native-material/core'
import { ScrNutritionDetails } from '../NavSinglePages/ScrNutritionDetails'
import { ScrPostDetails } from '../NavSinglePages/ScrPostDetails'
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle'
import { useNavigation } from '@react-navigation/native'
import { NavCalculator } from '../NavCalculator'

const Stack = createNativeStackNavigator()

const scrWidth = Dimensions.get('screen').width

export const NavPublicGarden = () => {

  const [calcType, setCalcType] = useState('HPG')

  const handleChangeCalcType = () => {
    calcType === 'FREE' && setCalcType('HPG')
    calcType === 'HPG' && setCalcType('FREE')
  }

  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName='GardenTabs'>
      <Stack.Screen
        name='GardenTabs'
        component={NavPublicGardenTabs}
        options={{
          header: () => <SafeAreaView>
            <StatusBar backgroundColor="#ffffff66" translucent />

            <View style={{ position: 'absolute', top: '12%', left: '4%', zIndex: 50 }}>
              { /* @ts-ignore */ }
              <ButtonIconCircle size={42} iconTitle='keyboard-backspace' color='#fff' func={() => navigation.pop()} />
            </View>
            <View style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
              <View>
                <Image
                  style={{ width: scrWidth, height: 200 }}
                  source={{ uri: 'https://telegra.ph/file/a4c4adc5ec111c1c4a08b.jpg' }}
                />
              </View>
              <View style={{ position: 'absolute', top: 50 }}>
                <Avatar style={{ borderRadius: 50, borderWidth: 2, borderColor: '#fff', overflow: 'hidden' }} label="Kent Dodds" image={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }} autoColor size={100} />
              </View>
            </View>
          </SafeAreaView>
        }}
      />

      <Stack.Screen
        name='PostDetails'
        component={ScrPostDetails}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='SystemDetails'
        component={ScrSystemDetails}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='NavCalculator'
        component={NavCalculator}
        options={{
          title: 'Профиль питания',
          headerRight: () => (
            <View style={{ overflow: 'hidden', borderRadius: 5, marginTop: 4 }}>
            <Pressable style={{ alignItems: 'center', backgroundColor: '#eee', padding: 4, paddingHorizontal: 8 }} onPress={handleChangeCalcType}>
              <Text style={{ color: '#666', fontSize: 16 }}>
                {calcType}
              </Text>
            </Pressable>
            </View>
          ),
          // headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
