import React, { useRef } from 'react'
import { Dimensions, FlatList, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'
import { SpoilerCultures } from '../../../../atoms/Spoilers/SpoilerCultures'
import { Divider, Pressable } from '@react-native-material/core'
// import { SpoilerCultures } from '../../../../atoms/Spoilers/SpoilerCultures'
// import { Divider, ListItem, Pressable } from '@react-native-material/core'
// import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
// import { ScrollView } from 'react-native-gesture-handler'
const scrWidth = Dimensions.get('screen').width

export const ScrPublicGardenCycles = () => {


  // const data: any[] = []

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a01-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58634a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a3f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

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


  type ItemProps = { title: string };


  const Item = ({ title }: ItemProps) => (
    <View style={{
      // justifyContent: 'center',
      // alignItems:
      width: '64%'

    }}>
      {/* // <View style={styles.item}> */}
      <View style={{
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      }}>
        <View style={{ padding: 10, flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1, gap: 10 }}>
            <View style={{ flex: 1, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              {/* <Text style={{ fontSize: 12, fontWeight: '300', color: '#111', top: 6 }}>сегодня</Text> */}
              <Text style={{ fontSize: 42, fontWeight: '300', color: '#111' }}>23</Text>
              <Text style={{ fontSize: 12, fontWeight: '300', color: '#111', top: -6 }}>дней</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, gap: 10 }}>
              <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#111', fontSize: 24 }}>{'<'}</Text>
              </View>
              <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#111', fontSize: 24 }}>{'>'}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 4, height: 148, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}><Text style={{ color: '#111' }} >{title}</Text></View>

        </View>
        {/* <Text style={styles.title}>{title}</Text> */}
      </View>
    </View>
    // </View>
  );

  const flatListRef = useRef(null)

  // console.log(flatListRef.current)

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* 
      <SectionList
        pagingEnabled
        sections={DATA}
        horizontal
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      /> */}

      <FlatList
        data={DATA}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        // alwaysBounceHorizontal
        // snapToStart
        // scrollsToTop
        // showsVerticalScrollIndicator
        ref={flatListRef}

      />

      <FlatList
        data={DATA}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        // alwaysBounceHorizontal
        // snapToStart
        // scrollsToTop
        // showsVerticalScrollIndicator
        ref={flatListRef}

      />

      {/* <FlatList
        data={DATA}
        horizontal
        renderItem={({ item }) => (

          <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, width: '100%', gap: 12, flexDirection: 'row' }}>
            <View>

              <View style={{ flexDirection: 'row' }}>
                <View></View>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '300', color: '#111' }}>Test</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: "flex-start", gap: 12 }}>

                <View style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, }}>
                  <Text style={{ fontSize: 36, fontWeight: '300', color: '#111' }}>28</Text>
                  <Text style={{ fontSize: 12, fontWeight: '300', color: '#111', top: -6 }}>сент.</Text>
                </View>

              </View>

            </View>

            <View style={{ flex: 1, backgroundColor: '#efefef', height: 170 }}>
              <Text>Text</Text>
            </View>

          </View>

        )}
        keyExtractor={item => item.id}
      /> */}



    </View>
  )
}

const styles = StyleSheet.create({
  textInfo: {
    color: '#111',
    fontWeight: '300',
    fontSize: 16
  },
  container: {
    flex: 1,
    // padding: 5
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    // padding: 20,
    // margin: 5,

    // width: scrWidth,
    paddingVertical: 12,
    paddingHorizontal: 10,

    // margin: 4,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#111'
  },
})