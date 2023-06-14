import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native"

const srcWidth = Dimensions.get('window').width
/* @ts-ignore */
export const InputElements = ({
  element = 'N',
  divider = '',
  number = '',
  /* @ts-ignore */
  onChange = f => f }) => {
  return (
    <View style={styles.secondContainer}>
      <View style={{ backgroundColor: '#e7e7e7', height: 48, width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 1 }}>
        {divider
          ? <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <Text style={[{ borderBottomColor: '#333', borderBottomWidth: 1 }, styles.textLeftVar]}>
              {element}
            </Text>

            <Text style={styles.textLeftVar}>
              {divider}
            </Text>
          </View>
          : <View style={{ display: 'flex', alignContent: 'center' }}><Text style={styles.textLeft}>{element}</Text></View>
        }
      </View>
      {/* <TextInput style={styles.textRight}>135.00</Text> */}
      <View style={{ width: 75, paddingLeft: 5 }}>
        <TextInput
          style={styles.textRight}
          onChangeText={onChange}
          value={number}
          placeholder="mg/litre"
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
    borderWidth: 1
  },
  secondContainer: {
    height: 32,
    width: '31%',
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
    fontSize: 14,
    color: "#111",
    fontWeight: '300'
  },
  textRight: {
    paddingVertical: 0,
    fontSize: 18,
    color: "#666",
    fontWeight: '300',
    marginRight: -7
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

