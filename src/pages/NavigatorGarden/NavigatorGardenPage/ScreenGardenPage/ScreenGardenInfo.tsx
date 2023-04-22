import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import { SpoilerGardenPage } from '../../../../atoms/Spoilers/SpoilerGardenPage'
import { Divider, Icon, Pressable } from '@react-native-material/core'
import { CalendarTable } from '../../../organisms/GardenPage/Calendar/CalendarTable'
// import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
// import { GardenStateIndicator } from '../../../../atoms/Indicators/GardenStateIndicator'

const scrWidth = Dimensions.get('screen').width
const scrHeight = Dimensions.get('screen').height

export const ScreenGardenInfo = () => {
  return (
    <ScrollView style={{  }}>

      <View style={{ backgroundColor: '#fff' }}>

        <View style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
          <View>
            <Image
              style={{ width: scrWidth, height: 200 }}
              source={require('../../../../assets/images/gardenLayout.jpg')} />
          </View>
        </View>


        <View style={{ backgroundColor: "#fff" }}>

          <View style={styles.fullContainer}>
            <View style={styles.pressableContainer}>
              <View style={{ gap: 5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='roofing' size={26} />
                <View>
                  <Text style={styles.gardenTitle}>MicroDWC System</Text>
                </View>
              </View>
              <View style={styles.viewValue}>
                {/* <Icon name='bookmark-outline' size={28} /> */}
                {/* <ButtonIconCircle iconTitle='bookmark-outline' size={36} color='#111' /> */}
                <Pressable onPress={() => { console.log("clicked") }} style={{ backgroundColor: '#0d800d', padding: 6, paddingHorizontal: 10, borderRadius: 5 }}>
                  <Text style={{ color: '#fff', fontWeight: '500' }}>SUBSCRIBE</Text>
                </Pressable>
                {/* <Button title='Subscribe' color='#0d800d' /> */}
              </View>
            </View>
            <Divider />
            <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>

              <Text style={{ fontSize: 17, fontWeight: '400', color: '#111', marginBottom: 5 }}>
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


          <SpoilerGardenPage title="Devices" leadingIcon='book'>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
              <View>
                <View>
                  <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <View style={{
                      height: 150, width: 150, marginLeft: 10,
                      borderRadius: 10,
                      // borderBottomRightRadius: 10,
                      borderColor: '#ccc',
                      borderWidth: 1,
                    }}><Text>1 Device</Text></View>
                    <View style={{
                      height: 150, width: 150, borderRadius: 10,
                      // borderBottomRightRadius: 10,
                      borderColor: '#ccc',
                      borderWidth: 1,
                    }}>
                      <Text style={styles.textStyle}>Second Device</Text>
                    </View>
                    <View style={{
                      height: 150, width: 150, borderRadius: 10,
                      // borderBottomRightRadius: 10,
                      borderColor: '#ccc',
                      borderWidth: 1,
                    }}>
                      <Text>Post 3</Text>
                    </View>
                    <View style={{
                      height: 100, width: 100, borderRadius: 10,
                      // borderBottomRightRadius: 10,
                      borderColor: '#ccc',
                      borderWidth: 1,
                    }}>
                      <Text>Text</Text>
                    </View>
                    <View style={{
                      height: 100, width: 100, borderRadius: 10,
                      // borderBottomRightRadius: 10,
                      borderColor: '#ccc',
                      borderWidth: 1,
                    }}>
                      <Text>Text</Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </SpoilerGardenPage>


          <SpoilerGardenPage title='Statistics' leadingIcon='insert-chart-outlined' >
            <Text>Text</Text>
          </SpoilerGardenPage>

          <SpoilerGardenPage title='Calendar' leadingIcon='event' >
            <View>
              <CalendarTable />
            </View>
          </SpoilerGardenPage>

          <View style={{ marginBottom: 50 }}>

          </View>
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
    height: 48,
    padding: 8,
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