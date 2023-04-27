import { StyleSheet, Text, View, Dimensions } from "react-native"
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CheckBoxes } from "../../../atoms/inputs/CheckBoxes"
import { Divider, Switch } from "@react-native-material/core"
import { SpoilerSettings } from "../../../atoms/Spoilers/SpoilerSettings"
import { ButtonIconCircle } from "../../../atoms/Buttons/ButtonIconCircle"

const scrHeight = Dimensions.get('screen').height

export const ScrMonitoringSettings = () => {

  const [checked, toggleChecked] = useState(false)

  const [loading, setLoading] = useState(true);

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10 }}>
      <View style={{ gap: 10, height: scrHeight, backgroundColor: '#fff' }}>


{/* Controller Setup */}


        <SpoilerSettings title='Controller Setup' leadingIcon="router">

          <View style={{ display: 'flex', flexDirection: 'column' }}>

            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              {/* <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} /> */}
              
              <Text style={styles.spoilerText}>Wega ESP32</Text>

              <Switch value={loading} onValueChange={setLoading}  />
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Second Controller</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Third Controller</Text>
            </View>

          </View>

        </SpoilerSettings>

{/* State Management */}
        
        <SpoilerSettings title='State Management' leadingIcon="emoji-objects">

          <View style={{ display: 'flex', flexDirection: 'column' }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View  style={styles.spoilerContent}>
                {/* @ts-ignore */}
                <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
                <Text style={styles.spoilerText}>Light State</Text>
              </View>
              <View style={{ paddingRight: 3 }}>
                <ButtonIconCircle iconTitle='settings' color='#a9a9a9' size={28}  />
              </View>
            </View>

            <Divider style={{ marginBottom: 5 }} />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View style={styles.spoilerContent}>
                {/* @ts-ignore */}
                <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
                <Text style={styles.spoilerText}>Fan State</Text>
              </View>
              <View style={{ paddingRight: 3 }}>
                <ButtonIconCircle iconTitle='settings' color='#a9a9a9' size={28}  />
              </View>
            </View>

            <Divider style={{ marginBottom: 5 }} />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View  style={styles.spoilerContent}>
                {/* @ts-ignore */}
                <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
                <Text style={styles.spoilerText}>Pump State</Text>
              </View>
              <View style={{ paddingRight: 3 }}>
                <ButtonIconCircle iconTitle='settings' color='#a9a9a9' size={28}  />
              </View>
            </View>

            <Divider style={{ marginBottom: 5 }} />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View  style={styles.spoilerContent}>
                {/* @ts-ignore */}
                <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
                <Text style={styles.spoilerText}>Other State</Text>
              </View>
              <View style={{ paddingRight: 3 }}>
                <ButtonIconCircle iconTitle='settings' color='#a9a9a9' size={28}  />
              </View>
            </View>

          </View>

        </SpoilerSettings>


{/* Selected Sensors */}


        <SpoilerSettings title='Selected Sensors' leadingIcon="rss-feed">

          <View style={{ display: 'flex', flexDirection: 'column' }}>

            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Air Temperature</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Root Temperature</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Solution Temperature</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Solution Volume</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Ph Level</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>EC Level</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Humidity</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Light Intensity</Text>
            </View>

            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.spoilerContent}>
              {/* @ts-ignore */}
              <CheckBoxes checked={checked} handleToggleCheck={toggleChecked} />
              <Text style={styles.spoilerText}>Carbon Dioxide</Text>
            </View>

          </View>

        </SpoilerSettings>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  spoilerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10
  },
  spoilerText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#666'
  }
})