import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, Image, Dimensions, StyleSheet, StatusBar } from "react-native"
import { Avatar, Divider, Icon, Pressable } from '@react-native-material/core'
import { GardenStatisticsIndicator } from '../../../../atoms/Indicators/GardenStatisticsIndicator'
import { GardenPageInfoAwards } from '../../../../organisms/garden/GardenInfo/Awards'
// import { GardenPageInfoAwards } from '../../../../organisms/garden/GardenInfo/Awards'
// import { GardenStatisticsIndicator } from '../../../../atoms/Indicators/GardenStatisticsIndicator'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useFocusEffect } from '@react-navigation/native'
// import { useCallback } from 'react'
// import { GardenStatisticsIndicator } from '../../../../atoms/Indicators/GardenStatisticsIndicator'

const scrWidth = Dimensions.get('screen').width
const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ScrPublicGardenPage = ({ route, navigation }) => {

  // console.log(route)
  const gardenId = route.params?.gardenId

  const gardensList = [
    { gardenId: 1, name: 'Mary Jane', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 41, position: 0, avatarSrc: 'https://mui.com/static/images/avatar/4.jpg', countFollowers: 1239, countNutrition: 12, countAwards: 7, countPosts: 29, countSystems: 3, countCultures: 5, countVerieties: 12 },
    { gardenId: 2, name: 'John Smith', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 39, position: 1, avatarSrc: 'https://mui.com/static/images/avatar/5.jpg', countFollowers: 1239, countNutrition: 12, countAwards: 7, countPosts: 29, countSystems: 3, countCultures: 5, countVerieties: 12 },
    { gardenId: 3, name: 'Mike Vazovsky', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 27, position: 2, avatarSrc: 'https://mui.com/static/images/avatar/6.jpg', countFollowers: 1239, countNutrition: 12, countAwards: 7, countPosts: 29, countSystems: 3, countCultures: 5, countVerieties: 12 },
    { gardenId: 4, name: 'Hey Dude', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 19, position: 3, avatarSrc: 'https://mui.com/static/images/avatar/1.jpg', countFollowers: 1239, countNutrition: 12, countAwards: 7, countPosts: 29, countSystems: 3, countCultures: 5, countVerieties: 12 },
    { gardenId: 5, name: 'Artem', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.', level: 14, position: 4, avatarSrc: 'https://mui.com/static/images/avatar/2.jpg', countFollowers: 1239, countNutrition: 12, countAwards: 7, countPosts: 29, countSystems: 3, countCultures: 5, countVerieties: 12 },
  ]

  const garden = gardensList[gardenId - 1]


  const awards = [
    { id: 1, title: 'First award' },
    { id: 2, title: 'Second award' },
    { id: 3, title: 'Third award' },
    { id: 4, title: 'Fourth award' },
    { id: 5, title: 'Fifth award' },
  ]

  const devices = [
    { id: 1, title: 'First device' },
    { id: 2, title: 'Second device' },
    { id: 3, title: 'Third device' },
    { id: 4, title: 'Fourth device' },
    { id: 5, title: 'Fifth device' },
  ]

  const subscriptions = [
    { id: 1, title: 'First device' },
    { id: 2, title: 'Second device' },
    { id: 3, title: 'Third device' },
    { id: 4, title: 'Fourth device' },
    { id: 5, title: 'Fifth device' },
  ]

  // useFocusEffect(
  //   useCallback(() => {
  //     StatusBar.setBarStyle('light-content'); // Настройте желаемый стиль статус-бара
  //     StatusBar.setBackgroundColor('#000000'); // Настройте желаемый цвет фона статус-бара
  //   }, [])
  // );

  return (

    // <SafeAreaView style={{}}>
    //   <StatusBar backgroundColor="transparent" translucent />
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>

      <View style={{}}>

        <View style={{ backgroundColor: "#fff" }}>

          <View style={styles.fullContainer}>

            <View style={{ marginVertical: 10, gap: 5 }}>
              <View style={styles.pressableContainer}>
                <View>
                  <Text style={styles.gardenTitle}>{garden?.name}'s Garden</Text>
                </View>

                <View style={styles.viewValue}>
                  <Pressable onPress={() => { console.log("clicked") }} style={{ backgroundColor: '#0d800d', padding: 6, paddingHorizontal: 10, borderRadius: 5 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}>Subscribe</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.pressableContainer}>
                <View>
                  <Text style={{ color: "#111", fontSize: 16, fontWeight: '300' }}>
                    {garden?.level} Level
                  </Text>
                </View>
                <View style={styles.viewValue}>
                  <Text style={{ color: "#111", fontSize: 16, fontWeight: '300' }}>
                    {garden?.countFollowers} Followers</Text>
                </View>
              </View>

            </View>

            <Divider />

            <View style={{ paddingVertical: 10, paddingHorizontal: 15, gap: 5 }}>

              <Text style={{ fontSize: 18, fontWeight: '400', color: '#111' }}>
                Description
              </Text>

              <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
                {garden?.about}
              </Text>
            </View>

          </View>

          <Divider />

          <View style={{ paddingVertical: 10, paddingHorizontal: 15, gap: 5 }}>

            <Text style={{ fontSize: 18, fontWeight: '400', color: '#111' }}>
              Statistics
            </Text>

            <View style={{ width: '100%' }}>
              <View style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', gap: 10, paddingBottom: 5, justifyContent: 'center' }}>
                <View style={{ width: '48.5%' }}>
                  <GardenStatisticsIndicator leadingIcon='book' title='Posts' value={`${garden?.countPosts}`} />
                </View>

                <View style={{ width: '48.5%' }}>
                  <GardenStatisticsIndicator leadingIcon='military-tech' title='Awards' value={`${garden?.countAwards}`} />
                </View>

                <View style={{ width: '48.5%' }}>
                  <GardenStatisticsIndicator leadingIcon='local-drink' title='Nutrition' value={`${garden?.countNutrition}`} />
                </View>

                <View style={{ width: '48.5%' }}>
                  <GardenStatisticsIndicator leadingIcon='power' title='Systems' value={`${garden?.countSystems}`} />
                </View>

                <View style={{ width: '48.5%' }}>
                  <GardenStatisticsIndicator leadingIcon='local-florist' title='Cultures' value={`${garden?.countCultures}`} />
                </View>

                <View style={{ width: '48.5%' }}>
                  <GardenStatisticsIndicator leadingIcon='filter-vintage' title='Verieties' value={`${garden?.countVerieties}`} />
                </View>

              </View>
            </View>


          </View>

          <Divider />

          <View style={{ paddingVertical: 10, paddingBottom: 15, gap: 5 }}>

            <View style={{ display: 'flex', marginLeft: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '400', color: '#111' }}>
                Awards
              </Text>
            </View>

            <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 15, left: 15, paddingRight: 30 }}>

              {
                awards.map(award => (
                  <GardenPageInfoAwards key={award.id} >
                    <Text style={{ color: '#111' }}>
                      {award.title}
                    </Text>
                  </GardenPageInfoAwards>
                ))
              }

            </ScrollView>


          </View>
          <Divider />


        </View>


      </View>
    </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  secondContainer: {
    padding: 10,
    paddingLeft: 15,
    width: scrWidth * 0.465,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  statistics: {
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  textStyle: {
    fontSize: 16,
    color: "#666",
    fontWeight: '300'
  },
  textTitleStyle: {
    fontSize: 16,
    color: "#666",
    fontWeight: '300',
    marginLeft: 10
  },
  fullContainer: {
    // borderColor: '#ccc',
    // borderWidth: 1,
    overflow: 'hidden',
  },
  pressableContainer: {
    // height: 48,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: '#ccc',
    // borderBottomWidth: 1,
    // padding: 8
  },
  // spoilerContent: {
  //   padding: 5
  // },
  viewValue: {
    // width: 150,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // backgroundColor: '#e7e7e7'
    // borderLeftColor: '#ccc',
    // borderLeftWidth: 1,
    // paddingHorizontal: 5
  },
  gardenTitle: {
    fontWeight: '400',
    fontSize: 18,
    color: '#111',
  }
})