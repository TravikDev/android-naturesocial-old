import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SpoilerCultures } from '../../../../atoms/Spoilers/SpoilerCultures'
import { Divider, Pressable } from '@react-native-material/core'
// import { SpoilerCultures } from '../../../../atoms/Spoilers/SpoilerCultures'
// import { Divider, ListItem, Pressable } from '@react-native-material/core'
// import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
// import { ScrollView } from 'react-native-gesture-handler'

export const ScrPublicGardenCultures = () => {

  // const data: any[] = []

  const data = [
    {
      cultureId: 123,
      title: 'Огурец',
      verieties: [
        {
          title: 'Кафкас',
          verietyId: 1234,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
        {
          title: 'Герман',
          verietyId: 1235,
          country: 'Россия',
          manufacturer: null,
          hybrid: 'F1'
        },
        {
          title: 'Вкусняшка',
          verietyId: 1236,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
      ]
    },
    {
      cultureId: 124,
      title: 'Томат',
      verieties: [
        {
          title: 'Кафкас',
          verietyId: 1237,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
        {
          title: 'Герман',
          verietyId: 1238,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
        {
          title: 'Вкусняшка',
          verietyId: 1239,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
      ]
    },
    {
      cultureId: 125,
      title: 'Перец',
      verieties: [
        {
          title: 'Хабанеро',
          verietyId: 1240,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
        {
          title: 'Скорпион',
          verietyId: 1241,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: null
        },
        {
          title: 'Чили',
          verietyId: 1242,
          country: 'Россия',
          manufacturer: 'АгроРусПром',
          hybrid: 'F1'
        },
      ]
    },
  ]

  return (
    <ScrollView style={{ display: 'flex', flex: 1, backgroundColor: '#fff' }}>
      {/* <Text>Cultures & Verieties</Text> */}

      { data.length ? (
        data.map(culture => (
          <SpoilerCultures key={culture.cultureId} title={culture.title}>
            {
              culture.verieties.map(veriety => (
                <React.Fragment key={veriety.verietyId}>
                  <Pressable
                    style={{ display: 'flex', height: 50, justifyContent: 'center', }}>

                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                      <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: 5,
                        alignItems: 'flex-start',
                        paddingHorizontal: 24,
                      }}>
                        <Text style={style.textInfo}>{veriety.title}</Text>
                        <View>{veriety.hybrid && <Text style={style.textInfo}>{' '}{veriety.hybrid}</Text>}</View>
                      </View>
                      <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 20,
                        gap: 5
                      }}>
                        <Text style={style.textInfo}>{veriety.country}</Text>
                        {/* {veriety.manufacturer && <Text style={style.textInfo}>{veriety.manufacturer}</Text>} */}
                        {/* <ButtonIconCircle iconTitle='open-in-new' size={36} color="#111" /> */}
                      </View>
                    </View>
                  </Pressable>
                  <Divider />
                </React.Fragment>
              ))
            }
          </SpoilerCultures>

        ))
      ) : (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 500}}>
          <Text style={{ color: '#111', fontSize: 18, fontWeight: '300' }}>Культуры и сорта отсутствуют</Text>
        </View>
      )}

    </ScrollView>
  )
}

const style = StyleSheet.create({
  textInfo: {
    color: '#111',
    fontWeight: '300',
    fontSize: 16
  }
})