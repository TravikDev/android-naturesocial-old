import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomSpoiler } from '../../../atoms/Spoilers/CustomSpoiler';
import { TemperatureChart } from './Charts/TemperatureChart';
import { LineChart } from './Charts/LineChart';
import { StateControlButton } from '../../../atoms/Buttons/StateControlButton';


export const ScreenState = () => {


  const temperature = {
    airTemp: [
      { x: "00:00", y: 25 },
      { x: "01:00", y: 24 },
      { x: "02:00", y: 23 },
      { x: "03:00", y: 21 },
      { x: "04:00", y: 19 },
      { x: "05:00", y: 18 },
      { x: "06:00", y: 17 },
      { x: "07:00", y: 19 },
      { x: "08:00", y: 21 },
      { x: "09:00", y: 22 },
    ],
    rootTemp: [
      { x: "00:00", y: 22 },
      { x: "01:00", y: 21 },
      { x: "02:00", y: 20 },
      { x: "03:00", y: 19 },
      { x: "04:00", y: 18 },
      { x: "05:00", y: 17 },
      { x: "06:00", y: 16 },
      { x: "07:00", y: 18 },
      { x: "08:00", y: 19 },
      { x: "09:00", y: 20 },
    ],
    solutionTemp: [
      { x: "00:00", y: 20 },
      { x: "01:00", y: 19 },
      { x: "02:00", y: 18 },
      { x: "03:00", y: 16 },
      { x: "04:00", y: 15 },
      { x: "05:00", y: 14 },
      { x: "06:00", y: 15 },
      { x: "07:00", y: 16 },
      { x: "08:00", y: 17 },
      { x: "09:00", y: 19 },
    ]
  }

  const solutionVolume = [
    { x: "00:00", y: 20 },
    { x: "01:00", y: 19 },
    { x: "02:00", y: 17 },
    { x: "03:00", y: 14 },
    { x: "04:00", y: 10 },
    { x: "05:00", y: 5 },
    { x: "06:00", y: 20 },
    { x: "07:00", y: 14 },
    { x: "08:00", y: 7 },
    { x: "09:00", y: 4 },
  ]

  const phLevel = [
    { x: "00:00", y: 6 },
    { x: "01:00", y: 6.2 },
    { x: "02:00", y: 6.3 },
    { x: "03:00", y: 6.4 },
    { x: "04:00", y: 6.2 },
    { x: "05:00", y: 6 },
    { x: "06:00", y: 5.8 },
    { x: "07:00", y: 5.6 },
    { x: "08:00", y: 5.5 },
    { x: "09:00", y: 5.8 },
  ]

  const ecLevel = [
    { x: "00:00", y: 1890 },
    { x: "01:00", y: 1920 },
    { x: "02:00", y: 1963 },
    { x: "03:00", y: 2010 },
    { x: "04:00", y: 1962 },
    { x: "05:00", y: 1930 },
    { x: "06:00", y: 1904 },
    { x: "07:00", y: 1929 },
    { x: "08:00", y: 1893 },
    { x: "09:00", y: 1942 },
  ]

  const humidity = [
    { x: "00:00", y: 35 },
    { x: "01:00", y: 37 },
    { x: "02:00", y: 36 },
    { x: "03:00", y: 39 },
    { x: "04:00", y: 43 },
    { x: "05:00", y: 42 },
    { x: "06:00", y: 38 },
    { x: "07:00", y: 46 },
    { x: "08:00", y: 52 },
    { x: "09:00", y: 48 },
  ]

  const carbonDioxide = [
    { x: "00:00", y: 420 },
    { x: "01:00", y: 560 },
    { x: "02:00", y: 632 },
    { x: "03:00", y: 724 },
    { x: "04:00", y: 789 },
    { x: "05:00", y: 832 },
    { x: "06:00", y: 858 },
    { x: "07:00", y: 894 },
    { x: "08:00", y: 923 },
    { x: "09:00", y: 887 },
  ]

  const lightIntensity = [
    { x: "00:00", y: 31.2 },
    { x: "01:00", y: 30.0 },
    { x: "02:00", y: 30.4 },
    { x: "03:00", y: 30.8 },
    { x: "04:00", y: 31.2 },
    { x: "05:00", y: 31.4 },
    { x: "06:00", y: 31.2 },
    { x: "07:00", y: 30.9 },
    { x: "08:00", y: 30.7 },
    { x: "09:00", y: 30.9 },
  ]

  const [jests, setJests] = useState(true)

  return (
    <ScrollView scrollEnabled={jests} contentContainerStyle={{ gap: 10 }} style={{ height: 3000, backgroundColor: '#fff', padding: 10, paddingVertical: 15 }}>

      <View style={{ gap: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

        {/* <View style={{ gap: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}> */}

        <View style={{ width: '48.5%'}}>
          <StateControlButton title='Light' value={`On`} leadingIcon='emoji-objects' />
        </View>

        <View style={{ width: '48.5%'}}>
          <StateControlButton title='Light 2' value={`On`} leadingIcon='emoji-objects' />
        </View>

        <View style={{ width: '48.5%' }}>
          <StateControlButton title='Fan 1' value={`Off`}
          leadingIcon='toys' />
        </View>

        <View style={{ width: '48.5%' }}>
          <StateControlButton title='Fan 2' value={`Off`}
          leadingIcon='toys' />
        </View>

        <View style={{ width: '48.5%' }}>
          <StateControlButton title='Pump' value={`Off`}
          leadingIcon='ev-station' />
        </View>

        <View style={{ width: '48.5%' }}>
          <StateControlButton title='Power' value={`On`} leadingIcon='electrical-services' />
        </View>

        {/* </View> */}

      </View>

      <View style={{ gap: 10 }}>

        <CustomSpoiler title='Temperature' value={`${temperature.airTemp[temperature.airTemp.length - 1].y} | ${temperature.rootTemp[temperature.rootTemp.length - 1].y} | ${temperature.solutionTemp[temperature.solutionTemp.length - 1].y} °C`}>
          <View>
            {/* @ts-ignore */}
            <TemperatureChart data={temperature} howMuch={temperature.airTemp.length} step={5} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Solution Volume' value={`${solutionVolume[solutionVolume.length - 1].y} liters`}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart data={solutionVolume} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Ph Level' value={`${phLevel[phLevel.length - 1].y} Ph`}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart data={phLevel} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='EC Level' value={`${ecLevel[ecLevel.length - 1].y} mS`}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart data={ecLevel} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Humidity' value={`${humidity[humidity.length - 1].y} %`}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart data={humidity} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Light intensity' value={`${lightIntensity[lightIntensity.length - 1].y} kLux`}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart data={lightIntensity} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Carbon Dioxide' value={`${carbonDioxide[humidity.length - 1].y} ppm`}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart data={carbonDioxide} />
          </View>
        </CustomSpoiler>

      </View>

      <View style={{ padding: 10, paddingVertical: 15, display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', gap: 10 }}>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: '100',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#152d44',
    padding: 50,
  },
  pointsDelta: {
    color: '#4c6479',
    fontSize: 50,
    fontWeight: '100',
  },
  pointsDeltaActive: {
    color: '#fff',
  },

  data: {
    fill: "#3e9b46",
    opacity: 0.25,
    stroke: "#000",
    strokeWidth: 1,
    strokeLinecap: "round"
  }
});

