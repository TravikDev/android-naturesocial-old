import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import { SpoilerGardenPage } from '../../../../atoms/Spoilers/SpoilerGardenPage'
import { Avatar, Divider, Icon, Pressable } from '@react-native-material/core'
import { CalendarTable } from '../../../../organisms/garden/GardenInfo/Calendar'
import { GardenPageInfoAwards } from '../../../../organisms/garden/GardenInfo/Awards'
import { GardenPageInfoDevice } from '../../../../organisms/garden/GardenInfo/Device/GardenPageInfoDevice'
// import { CalendarTable } from '../../../organisms/GardenPage/GardenInfo/Calendar/CalendarTable'
// import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
// import { GardenStateIndicator } from '../../../../atoms/Indicators/GardenStateIndicator'

const scrWidth = Dimensions.get('screen').width
const scrHeight = Dimensions.get('screen').height

export const ScrGardenInfo = () => {

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

  return (
    <ScrollView style={{}}>

      <View style={{ backgroundColor: '#fff' }}>

        <View style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
          <View>
            <Image
              style={{ width: scrWidth, height: 200 }}
              source={require('../../../../assets/images/gardenLayout.jpg')} />
          </View>
          <View style={{ position: 'absolute', top: 50 }}>
            <Avatar style={{ borderRadius: 50, borderWidth: 2, borderColor: '#fff' }} label="Kent Dodds" autoColor size={100} />
          </View>
        </View>


        <View style={{ backgroundColor: "#fff" }}>

          <View style={styles.fullContainer}>

            <View style={{ marginVertical: 10, gap: 5 }}>
              <View style={styles.pressableContainer}>
                <View>
                  <Text style={styles.gardenTitle}>Artem's Garden</Text>
                </View>

                <View style={styles.viewValue}>
                  <Pressable onPress={() => { console.log("clicked") }} style={{ backgroundColor: '#0d800d', padding: 6, paddingHorizontal: 10, borderRadius: 5 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SUBSCRIBE</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.pressableContainer}>
                <View>
                  <Text style={{ color: "#111", fontSize: 16, fontWeight: '300' }}>
                    23 Level
                  </Text>
                </View>
                <View style={styles.viewValue}>
                  <Text style={{ color: "#111", fontSize: 16, fontWeight: '300' }}>
                    1239 Followers</Text>
                </View>
              </View>

            </View>

            <Divider />

            <View style={{ paddingVertical: 10, paddingHorizontal: 15, gap: 5 }}>

              <Text style={{ fontSize: 17, fontWeight: '400', color: '#111' }}>
                Description:
              </Text>

              {/* <Divider style={{ marginVertical: 5 }} /> */}

              <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint expedita id. Iure illo ipsum quibusdam voluptates cumque! Sint enim suscipit omnis maxime consequuntur minima voluptatum nam natus magni quis?
                Iusto nulla perspiciatis odio atque ab accusantium, eveniet maiores deserunt saepe aspernatur commodi voluptate ipsam in, aliquid fugiat temporibus perferendis illo alias debitis impedit exercitationem magni pariatur tempora? Iste, ipsam.
              </Text>

            </View>

            <Divider />

          </View>

          {/* 
          <SpoilerGardenPage title='System State' leadingIcon='speed' >

            <View style={{ gap: 5 }}>

              <GardenStateIndicator title='Light' subTitle='Macro Lighter - Quantum Board 400Wt' leadingIcon='emoji-objects' value='30.1k Lux' />

              <GardenStateIndicator title='Solution EC' leadingIcon='opacity' value='1989 mS' />

              <GardenStateIndicator title='Solution PH' leadingIcon='terrain' value='6.2' />

              

              
            </View>

          </SpoilerGardenPage> */}

          {/* <SpoilerGardenPage title='Nutrition Solution' leadingIcon='science' >
            <Text>Text</Text>
          </SpoilerGardenPage> */}


          <SpoilerGardenPage title='Statistics' leadingIcon='insert-chart-outlined' >
            <View style={{ margin: 5 }}>
              <Text style={{ color: '#111' }}>
                1. Followers
                2. Subscriptions
                3. Solution profiles
                4. Level
                5. Awards
                6. Posts
                7. Devices
                8. Cultures
                9. Verieties
                10. Is registered since
              </Text>
            </View>
          </SpoilerGardenPage>

          <Divider />

          <SpoilerGardenPage title='Calendar' leadingIcon='event' >
            <View style={{ margin: 5 }}>
              <CalendarTable />
            </View>
          </SpoilerGardenPage>

          <Divider />



          <SpoilerGardenPage title="Subscriptions" leadingIcon='star-outline'>
            <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, marginVertical: 5, marginLeft: 5 }}>

              {
                subscriptions.map(subscription => (
                  <GardenPageInfoDevice key={subscription.id}>
                    <Text style={{ color: '#111' }}>
                      {subscription.title}
                    </Text>
                  </GardenPageInfoDevice>))
              }

            </ScrollView>
          </SpoilerGardenPage>

          <Divider />

          <SpoilerGardenPage title='Awards' leadingIcon='military-tech' >
            <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, marginVertical: 5, marginLeft: 5 }}>

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
          </SpoilerGardenPage>

          <Divider />

          <SpoilerGardenPage title='Profiles' leadingIcon='storage' >
            <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, marginVertical: 5, marginLeft: 5 }}>

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
          </SpoilerGardenPage>

          <Divider />

          <SpoilerGardenPage title="Devices" leadingIcon='settings-input-hdmi'>
            <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, marginVertical: 5, marginLeft: 5 }}>

              {
                devices.map(device => (
                  <GardenPageInfoDevice key={device.id}>
                    <Text style={{ color: '#111' }}>
                      {device.title}
                    </Text>
                  </GardenPageInfoDevice>))
              }

            </ScrollView>
          </SpoilerGardenPage>

          <Divider />


        </View>


      </View>
    </ScrollView>
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
    fontSize: 20,
    color: '#111',
  }
})