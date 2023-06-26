import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { ScrSystemDetails } from '../NavSinglePages/ScrSystemDetails'
import { NavPublicGardenTabs } from './NavGardenTabs'
import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native'
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
              { /* @ts-ignore */}
              <ButtonIconCircle size={42} iconTitle='keyboard-backspace' color='#fff' func={() => navigation.pop()} />
            </View>
            <View style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
              <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <ImageBackground
                  resizeMode='cover'
                  style={{ width: scrWidth, height: scrWidth / 16 * 9, justifyContent: 'center', alignItems: 'center', gap: 10 }}
                  source={{ uri: 'https://telegra.ph/file/a4c4adc5ec111c1c4a08b.jpg' }}
                >
                  <View style={{ borderRadius: 50, borderWidth: 2, borderColor: '#fff', overflow: 'hidden', justifyContent: 'center', alignContent: 'center', width: 100, height: 100 }}>
                    <Avatar label="Kent Dodds" image={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }} autoColor size={100} />

                  </View>
                </ImageBackground>

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
