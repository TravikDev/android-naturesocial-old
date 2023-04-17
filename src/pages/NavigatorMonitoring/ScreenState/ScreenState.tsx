import { useState } from 'react'
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme, VictoryCursorContainer, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis, VictoryScatter, VictoryLabel } from 'victory-native';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Svg, Path, Text as SvgText } from 'react-native-svg';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@react-native-material/core';
import { Spoiler } from '../../../atoms/Spoiler/Spoiler';
import { CustomSpoiler } from '../../../atoms/Spoiler/CustomSpoiler';
// import { RootTempChart } from '../ScreenCharts/MultilineChart/TemperatureChart';
import { MultilineChart } from '../ScreenCharts/MultilineChart';
import { PhLevelChart } from '../ScreenCharts/MultilineChart/PhLevelChart';
import { TemperatureChart } from '../ScreenCharts/MultilineChart/TemperatureChart';
import { LineChart } from '../ScreenCharts/MultilineChart/LineChart';


const scrWidth = Dimensions.get('window').width

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
    { x: "09:00", y: 1 },
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
    <ScrollView scrollEnabled={jests} style={{ height: 3000, backgroundColor: '#fff', padding: 10, paddingVertical: 15 }}>

      <View style={{ gap: 10 }}>
        <CustomSpoiler title='Temperature' value={`${temperature.airTemp[temperature.airTemp.length-1].y} | ${temperature.rootTemp[temperature.rootTemp.length-1].y} | ${temperature.solutionTemp[temperature.solutionTemp.length-1].y} °C`}>
          <View>
            {/* @ts-ignore */}
            <TemperatureChart data={temperature} howMuch={temperature.airTemp.length} step={5} />
          </View>
        </CustomSpoiler>

        {/* <CustomSpoiler title='Root Temperature' value={`${rootTemp[rootTemp.length-1].y} °C`}>
          <View style={{ }}>
            <TemperatureChart data={rootTemp} howMuch={airTemp.length} step={5} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Solution Temperature' value={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <TemperatureChart />
          </View>
        </CustomSpoiler> */}

        <CustomSpoiler title='Solution Volume' value={`${solutionVolume[solutionVolume.length-1].y} liters`}>
          <View style={{ paddingHorizontal: 5 }}>
          <LineChart data={solutionVolume}  />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Ph Level' value={`${phLevel[phLevel.length-1].y} Ph`}>
          <View style={{ paddingHorizontal: 5 }}>
          <LineChart data={phLevel} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='EC Level' value={`${ecLevel[ecLevel.length-1].y} mS`}>
          <View style={{ paddingHorizontal: 5 }}>
          <LineChart data={ecLevel} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Humidity' value={`${humidity[humidity.length-1].y} %`}>
          <View style={{ paddingHorizontal: 5 }}>
          <LineChart data={humidity} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Light intensity' value={`${lightIntensity[lightIntensity.length-1].y} kLux`}>
          <View style={{ paddingHorizontal: 5 }}>
          <LineChart data={lightIntensity} />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Carbon Dioxide' value={`${carbonDioxide[humidity.length-1].y} ppm`}>
          <View style={{ paddingHorizontal: 5 }}>
          <LineChart data={carbonDioxide} />
          </View>
        </CustomSpoiler>

      </View>

      <View style={{ padding: 10, paddingVertical: 15, display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', gap: 10 }}>

        <View style={{ display: 'flex', flexGrow: 1, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, overflow: 'hidden' }}>
          <Text style={{ color: '#444', fontWeight: '300', fontSize: 16 }}>Temperature</Text>
        </View>

        <View style={{ display: 'flex', flexGrow: 1, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, overflow: 'hidden' }}>
          <Text style={{ color: '#444' }}>Temperature</Text>
        </View>

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


// export const MultilineChart = ({ jests = true }) => {

//   const data1 = [
//     { x: "start", y: 220 },
//     { x: "vega", y: 240 },
//     { x: "bloom", y: 280 },
//     { x: "fruit", y: 300 },
//     { x: "end", y: 260 },
//   ]

//   const data2 = [
//     { x: "start", y: 180 },
//     { x: "vega", y: 200 },
//     { x: "bloom", y: 220 },
//     { x: "fruit", y: 240 },
//     { x: "end", y: 180 },
//   ]
//   const data3 = [
//     { x: "start", y: 120 },
//     { x: "vega", y: 140 },
//     { x: "bloom", y: 180 },
//     { x: "fruit", y: 160 },
//     { x: "end", y: 140 },
//   ]
//   const data4 = [
//     { x: "start", y: 40 },
//     { x: "vega", y: 40 },
//     { x: "bloom", y: 50 },
//     { x: "fruit", y: 50 },
//     { x: "end", y: 40 },
//   ]

//   const data5 = [
//     { x: "start", y: 30 },
//     { x: "vega", y: 35 },
//     { x: "bloom", y: 40 },
//     { x: "fruit", y: 45 },
//     { x: "end", y: 35 },
//   ]



//   const [howMuch, setHowMuch] = useState(5)

//   return (
//     <>

//       <VictoryChart
//         theme={VictoryTheme.material}
//         containerComponent={
//           <VictoryCursorContainer
//             cursorLabel={({ datum }) => `${Math.round(datum.y)}`}
//             cursorLabelOffset={{ x: 100, y: -10 }}
//           />
//         }

//       >
//         {/* <VictoryStack> */}
//         <VictoryArea
//           interpolation="monotoneX"
//           style={styles}
//           name="area-1"
//           /* @ts-ignore */
//           data={data1.slice(0, howMuch)}
//         />
//         <VictoryScatter
//           data={data1.slice(0, howMuch)}
//           style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//           labels={({ datum }) => `K: ${datum.y}`}
//         />
//         <VictoryArea
//           interpolation="monotoneX"
//           style={styles}
//           name="area-2"
//           /* @ts-ignore */
//           data={data2.slice(0, howMuch)}
//         />
//         <VictoryScatter
//           data={data2.slice(0, howMuch)}
//           style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//           labels={({ datum }) => `N: ${datum.y}`}
//         />
//         <VictoryArea
//           interpolation="monotoneX"
//           style={styles}
//           name="area-3"
//           /* @ts-ignore */
//           data={data3.slice(0, howMuch)}
//         />
//         <VictoryScatter
//           data={data3.slice(0, howMuch)}
//           style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//           labels={({ datum }) => `Ca: ${datum.y}`}
//         />
//         <VictoryArea
//           interpolation="monotoneX"
//           style={styles}
//           name="area-4"
//           /* @ts-ignore */
//           data={data4.slice(0, howMuch)}
//         />
//         <VictoryScatter
//           data={data4.slice(0, howMuch)}
//           style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//           labels={({ datum }) => `P: ${datum.y}`}
//         />
//         <VictoryArea
//           interpolation="monotoneX"
//           style={styles}
//           name="area-5"
//           /* @ts-ignore */
//           data={data5.slice(0, howMuch)}
//         />
//         <VictoryScatter
//           data={data5.slice(0, howMuch)}
//           style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//           labels={({ datum }) => `Mg: ${datum.y}`}
//         />
//         {/* </VictoryStack> */}
//       </VictoryChart>
//     </>
//   )
// }

// const LineChart = () => {

//   const [state, setState] = useState({})

//   /* @ts-ignore */
//   const handleZoom = (domain) => {
//     setState({ selectedDomain: domain });
//   }

//   /* @ts-ignore */
//   const handleBrush = (domain) => {
//     setState({ zoomDomain: domain });
//   }

//   return (
//     <View>
//       <VictoryChart
        
//         width={scrWidth*0.8}
//         height={300}
//         // scale={{ x: "time" }}
//         containerComponent={
//           <VictoryZoomContainer responsive={false}
//             zoomDimension="x"
//             /* @ts-ignore */
//             zoomDomain={state.zoomDomain}
//             onZoomDomainChange={handleZoom.bind(this)}
//           />
//         }
//       >
//         <VictoryLine
//           interpolation="monotoneX"
//           style={{
//             data: { stroke: "#369C2D" }
//           }}
//           data={[
//             { x: new Date(1982, 1, 1), y: 125 },
//             { x: new Date(1987, 1, 1), y: 257 },
//             { x: new Date(1993, 1, 1), y: 345 },
//             { x: new Date(1997, 1, 1), y: 515 },
//             { x: new Date(2001, 1, 1), y: 132 },
//             { x: new Date(2005, 1, 1), y: 305 },
//             { x: new Date(2011, 1, 1), y: 270 },
//             { x: new Date(2015, 1, 1), y: 470 }
//           ]}
//         />

//       </VictoryChart>


//     </View>
//   )
// }

// const AreaChart = () => {

//   const data = [
//     { x: new Date(1982, 1, 1).getMonth(), y: 125 },
//     { x: new Date(1987, 2, 2).getMonth(), y: 257 },
//     { x: new Date(1993, 3, 3).getMonth(), y: 345 },
//     { x: new Date(1997, 4, 4).getMonth(), y: 515 },
//     { x: new Date(2001, 5, 5).getMonth(), y: 132 },
//     { x: new Date(2005, 6, 6).getMonth(), y: 305 },
//     { x: new Date(2011, 7, 7).getMonth(), y: 270 },
//     { x: new Date(2015, 8, 8).getMonth(), y: 470 }
//   ]

//   const [state, setState] = useState({})

//   /* @ts-ignore */
//   const handleZoom = (domain) => {
//     setState({ selectedDomain: domain });
//   }

//   /* @ts-ignore */
//   const handleBrush = (domain) => {
//     setState({ zoomDomain: domain });
//   }

//   return (
//     <View>
//       <VictoryChart
//         padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
//         theme={VictoryTheme.material}
//         height={300}
//         containerComponent={
//           <VictoryZoomContainer responsive={false}
//             zoomDimension="x"
//             /* @ts-ignore */
//             zoomDomain={state.zoomDomain}
//             onZoomDomainChange={handleZoom.bind(this)}
//           />
//         }
//       >
//         <VictoryAxis dependentAxis domain={[0, 600]} />
//         <VictoryAxis crossAxis={false} />
//         <VictoryArea
//           interpolation="monotoneX"
//           style={{
//             data: { stroke: "#205C1B", fill: '#3e9b46', opacity: 0.6 }
//           }}
//           data={data}
//         />
//         <VictoryScatter
//           data={data}
//           style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//           labels={({ datum }) => `${datum.y}`}
//           labelComponent={<VictoryLabel  />}
          
//         />
//       </VictoryChart>


//     </View>
//   )
// }