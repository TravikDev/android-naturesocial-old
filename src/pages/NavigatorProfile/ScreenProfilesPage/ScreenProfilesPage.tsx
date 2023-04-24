import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import { Avatar, Divider, Icon, ListItem } from '@react-native-material/core'
import { ProgressBar } from '../../../atoms/Progress/ProgressBar'
import { Spoiler } from '../../../atoms/Spoilers/Spoiler'

const scrWidth = Dimensions.get('screen').width
const scrHeight = Dimensions.get('screen').height

export const ScreenProfilesPage = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", minHeight: scrHeight*0.9 }}>
        <View style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
          <View>
            <Image
              style={{ width: scrWidth, height: 150 }}
              source={require('../../../assets/images/profileLayout.jpg')} />
          </View>
          <View style={{ position: 'absolute', top: 25 }}>
            <Avatar style={{ borderRadius: 50, borderWidth: 2, borderColor: '#fff'}} label="Kent Dodds" autoColor size={100} />
          </View>
        </View>

        <Divider style={{ marginBottom: 10 }} />

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, marginBottom: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Level 1</Text>
          </View>
          <View style={{ width: scrWidth * 0.8 }}>
            <ProgressBar percent={40} />
          </View>
        </View>


        <View style={{ paddingHorizontal: 10, gap: 10 }}>

          <View style={styles.container}>
            <Icon name='person' size={24} /><Text style={styles.textStyle}>Username</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
            <View style={styles.secondContainer}>
              <Text style={styles.textStyle}>A little bit{"\n"}Information{"\n"}About{"\n"}Me</Text>
            </View>
          </View>
        </View>

        <Divider style={{ marginTop: 20 }} />

        <View style={{ display: 'flex', alignItems: 'center', paddingVertical: 5 }}><Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>STATISTICS</Text></View>

        <Divider style={{ marginBottom: 0 }} />

        
      </View>
      {/* </View> */}
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
    width: '100%',
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
})