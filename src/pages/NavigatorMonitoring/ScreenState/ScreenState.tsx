import { useState } from 'react'
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme, VictoryCursorContainer, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis } from 'victory-native';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Svg, Path, Text as SvgText } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@react-native-material/core';
import { Spoiler } from '../../../atoms/Spoiler/Spoiler';
import { CustomSpoiler } from '../../../atoms/Spoiler/CustomSpoiler';

const scrWidth = Dimensions.get('window').width

export const ScreenState = () => {

  const [jests, setJests] = useState(true)

  return (
    <ScrollView scrollEnabled={jests} style={{ height: 3000, backgroundColor: '#fff', padding: 10, paddingVertical: 15 }}>

      <View style={{ gap: 10 }}>
        <CustomSpoiler title='Air Temperature' grams={30}>
          <View>
            <MultilineChart jests />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Root Temperature' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <AreaChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Solution Temperature' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Solution Volume' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Ph Level' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='EC Level' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Humidity' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Carbon Dioxide' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Light intensity' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Solution Temperature' grams={30}>
          <View style={{ paddingHorizontal: 5 }}>
            <LineChart />
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
      <View style={{ display: 'flex', marginTop: 100, alignItems: 'center' }}>
        <AnimatedCircularProgress
          size={120}
          width={12}
          backgroundWidth={4}
          fill={90}
          tintColor="#ff0000"
          tintColorSecondary="#00ff00"
          backgroundColor="#3d5875"
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        >
          {fill => <Text style={styles.points}>{Math.round((100 * fill) / 100)}</Text>}
        </AnimatedCircularProgress>
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


export const MultilineChart = ({ jests = true }) => {

  const data1 = [
    { x: "start", y: 220 },
    { x: "vega", y: 240 },
    { x: "bloom", y: 280 },
    { x: "fruit", y: 300 },
    { x: "end", y: 260 },
  ]

  const data2 = [
    { x: "start", y: 180 },
    { x: "vega", y: 200 },
    { x: "bloom", y: 220 },
    { x: "fruit", y: 240 },
    { x: "end", y: 180 },
  ]
  const data3 = [
    { x: "start", y: 120 },
    { x: "vega", y: 140 },
    { x: "bloom", y: 180 },
    { x: "fruit", y: 160 },
    { x: "end", y: 140 },
  ]
  const data4 = [
    { x: "start", y: 40 },
    { x: "vega", y: 40 },
    { x: "bloom", y: 50 },
    { x: "fruit", y: 50 },
    { x: "end", y: 40 },
  ]

  const data5 = [
    { x: "start", y: 30 },
    { x: "vega", y: 35 },
    { x: "bloom", y: 40 },
    { x: "fruit", y: 45 },
    { x: "end", y: 35 },
  ]



  const [howMuch, setHowMuch] = useState(5)

  return (
    <>

      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryCursorContainer
            cursorLabel={({ datum }) => `${Math.round(datum.y)}`}
            cursorLabelOffset={{ x: 100, y: -10 }}
          />
        }

      >
        {/* <VictoryStack> */}
        <VictoryArea
          interpolation="monotoneX"
          style={styles}
          name="area-1"
          /* @ts-ignore */
          data={data1.slice(0, howMuch)}
        />
        <VictoryArea
          interpolation="monotoneX"
          style={styles}
          name="area-2"
          /* @ts-ignore */
          data={data2.slice(0, howMuch)}
        />
        <VictoryArea
          interpolation="monotoneX"
          style={styles}
          name="area-3"
          /* @ts-ignore */
          data={data3.slice(0, howMuch)}
        />
        <VictoryArea
          interpolation="monotoneX"
          style={styles}
          name="area-4"
          /* @ts-ignore */
          data={data4.slice(0, howMuch)}
        />
        <VictoryArea
          interpolation="monotoneX"
          style={styles}
          name="area-5"
          /* @ts-ignore */
          data={data5.slice(0, howMuch)}
        />
        {/* </VictoryStack> */}
      </VictoryChart>
    </>
  )
}

const LineChart = () => {

  const [state, setState] = useState({})

  /* @ts-ignore */
  const handleZoom = (domain) => {
    setState({ selectedDomain: domain });
  }

  /* @ts-ignore */
  const handleBrush = (domain) => {
    setState({ zoomDomain: domain });
  }

  return (
    <View>
      <VictoryChart

        width={scrWidth}
        height={300}
        // scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomContainer responsive={false}
            zoomDimension="x"
            /* @ts-ignore */
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom.bind(this)}
          />
        }
      >
        <VictoryLine
          interpolation="monotoneX"
          style={{
            data: { stroke: "#369C2D" }
          }}
          data={[
            { x: new Date(1982, 1, 1), y: 125 },
            { x: new Date(1987, 1, 1), y: 257 },
            { x: new Date(1993, 1, 1), y: 345 },
            { x: new Date(1997, 1, 1), y: 515 },
            { x: new Date(2001, 1, 1), y: 132 },
            { x: new Date(2005, 1, 1), y: 305 },
            { x: new Date(2011, 1, 1), y: 270 },
            { x: new Date(2015, 1, 1), y: 470 }
          ]}
        />

      </VictoryChart>


    </View>
  )
}

const AreaChart = () => {

  const [state, setState] = useState({})

  /* @ts-ignore */
  const handleZoom = (domain) => {
    setState({ selectedDomain: domain });
  }

  /* @ts-ignore */
  const handleBrush = (domain) => {
    setState({ zoomDomain: domain });
  }

  return (
    <View>
      <VictoryChart
        theme={VictoryTheme.material}
        width={scrWidth}
        height={300}
        containerComponent={
          <VictoryZoomContainer responsive={false}
            zoomDimension="x"
            /* @ts-ignore */
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom.bind(this)}
          />
        }
      >
        <VictoryArea
          interpolation="monotoneX"
          style={{
            data: { stroke: "#205C1B", fill: '#3e9b46', opacity: 0.6 }
          }}
          data={[
            { x: new Date(1982, 1, 1).getMonth(), y: 125 },
            { x: new Date(1987, 2, 2).getMonth(), y: 257 },
            { x: new Date(1993, 3, 3).getMonth(), y: 345 },
            { x: new Date(1997, 4, 4).getMonth(), y: 515 },
            { x: new Date(2001, 5, 5).getMonth(), y: 132 },
            { x: new Date(2005, 6, 6).getMonth(), y: 305 },
            { x: new Date(2011, 7, 7).getMonth(), y: 270 },
            { x: new Date(2015, 8, 8).getMonth(), y: 470 }
          ]}
        />

      </VictoryChart>


    </View>
  )
}