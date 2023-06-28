import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native"

const srcWidth = Dimensions.get('window').width
/* @ts-ignore */
export const InputElements = ({
  element = 'N',
  divider = '',
  number = '',
  inputViewColor = '#fff',
  inputTextColor = '#666',
  /* @ts-ignore */
  onChange = f => f }) => {
  return (
    <View style={styles.secondContainer}>
      <View style={{ marginVertical: 5, backgroundColor: '#e7e7e7', height: 48, width: 44, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 1 }}>
        {divider
          ? <View style={{ marginRight: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <Text style={[{ borderBottomColor: '#333', borderBottomWidth: 1 }, styles.textLeftVar]}>
              {element}
            </Text>

            <Text style={styles.textLeftVar}>
              {divider}
            </Text>
          </View>
          : <View style={{ marginRight: 1, display: 'flex', justifyContent: 'center', alignContent: 'center' }}><Text style={styles.textLeft}>{element}</Text></View>
        }
      </View>
      {/* <TextInput style={styles.textRight}>135.00</Text> */}
      <View style={{ width: 70, paddingLeft: 12 }}>
        <TextInput
          style={[styles.textRight, { color: inputTextColor }]}
          onChangeText={onChange}
          value={number}
          placeholder="мг/л"
          keyboardType="numeric"
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  secondContainer: {
    height: 40,
    // width: '31%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    overflow: 'hidden'
  },
  statistics: {
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  textLeft: {
    fontSize: 18,
    color: "#111",
    fontWeight: '300'
  },
  textLeftVar: {
    fontSize: 12,
    color: "#111",
    fontWeight: '300'
  },
  textRight: {
    paddingVertical: 0,
    fontSize: 18,
    color: "#666",
    fontWeight: '300',
    // marginRight: -7
  },
  textTitleStyle: {
    fontSize: 18,
    color: "#666",
    fontWeight: '300',

  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 15,
  },
  arrowTop: {
    backgroundColor: '#ccc',
  },
  arrowTextTop: {
    color: '#666'
  },
  arrowDown: {

  },
  arrowTextDown: {
    color: '#666'
  }
})

