import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import { Avatar, Divider, Icon } from '@react-native-material/core'
import { ProgressBar } from '../../../atoms/Progress/ProgressBar'
import { Spoiler } from '../../../atoms/Spoilers/Spoiler'

const scrWidth = Dimensions.get('screen').width

export const ScreenSingleUser = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
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
              <Text style={styles.textStyle}>Name</Text>
            </View>
            <View style={styles.secondContainer}>
              <Text style={styles.textStyle}>Surname</Text>
            </View>
          </View>
        </View>

        {/* <View style={{
          borderRadius: 10,
          borderColor: '#ccc',
          borderWidth: 1, marginHorizontal: 10, marginVertical: 20,
          gap: 10
        }}> */}

        <Divider style={{ marginTop: 20 }} />

        <View style={{ display: 'flex', alignItems: 'center', paddingVertical: 10 }}><Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>STATISTICS</Text></View>

        <Divider style={{ marginBottom: 10 }} />

        <View style={{ gap: 20 }}>


          <Spoiler title="Recent Posts">

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
            <View>
              <View style={{ paddingTop: 10 }}>
                <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                  <View style={{
                    height: 150, width: 150, marginLeft: 10,
                    borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}><Text>Post 1</Text></View>
                  <View style={{
                    height: 150, width: 150, borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}>
                    <Text style={styles.textStyle}>Post 2</Text>
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
          </Spoiler>


          <Spoiler title="Recent Profiles">

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
            <View>
              <View style={{ paddingTop: 10 }}>
                <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                  <View style={{
                    height: 150, width: 150, marginLeft: 10,
                    borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}><Text>Post 1</Text></View>
                  <View style={{
                    height: 150, width: 150, borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}>
                    <Text style={styles.textStyle}>Post 2</Text>
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
          </Spoiler>


          <Spoiler title="Recent Awards">

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
            <View>
              <View style={{ paddingTop: 10 }}>
                <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                  <View style={{
                    height: 150, width: 150, marginLeft: 10,
                    borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}><Text>Post 1</Text></View>
                  <View style={{
                    height: 150, width: 150, borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}>
                    <Text style={styles.textStyle}>Post 2</Text>
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
          </Spoiler>


          <Spoiler title="Recent Posts" leadingIcon="military-tech">

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
            <View>
              <View style={{ paddingTop: 10 }}>
                <ScrollView horizontal={true} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                  <View style={{
                    height: 150, width: 150, marginLeft: 10,
                    borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}><Text>Post 1</Text></View>
                  <View style={{
                    height: 150, width: 150, borderRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}>
                    <Text style={styles.textStyle}>Post 2</Text>
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
          </Spoiler>




        </View>
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
})