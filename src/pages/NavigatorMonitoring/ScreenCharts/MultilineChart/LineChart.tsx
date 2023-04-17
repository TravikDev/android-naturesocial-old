import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { LinearGradient, Stop } from 'react-native-svg';
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme, VictoryCursorContainer, VictoryScatter, VictoryLabel, VictoryAxis, VictoryLegend, VictoryTooltip, VictoryPortal } from 'victory-native';


/* @ts-ignore */
export const LineChart = ({
  data = [
    { x: '1', y: 3 },
    { x: '2', y: 4 }
  ],
  howMuch = 2,
  step = 5,
  legendTitle = ''

}) => {


  // const legendArray = Object.keys(data)

  /* @ts-ignore */
  const maxValueY = data?.reduce((acc, val) => (val.y > acc ? acc = val.y : acc), 0)
  /* @ts-ignore */
  
  let tempMin = 999999
  /* @ts-ignore */
  data?.forEach(val => { val.y < tempMin && (tempMin = val.y) })
  /* @ts-ignore */
// console.log(tempMin)
  // console.log(minValueY)
  // const maxValueY = (maxValueAirTempY = 0, maxValueRootTempY = 0, maxValueSolutionTempY = 0) => {
  //   return Math.max(maxValueAirTempY, maxValueRootTempY, maxValueSolutionTempY)
  // }

  // const maxValueY = data2.reduce((ac, val) => (val.y > ac ? ac = val.y : ac), 0)

  return (
    <VictoryChart
      height={250}
      domain={{ y: [tempMin*0.9, maxValueY*1.1] }}
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryCursorContainer
          cursorLabelOffset={{ x: 10, y: 50 }}
          cursorLabel={({ datum }) => `${datum.x.toFixed(2)}, ${datum.y.toFixed()}`}
        />
      }
    >

      <LinearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#3e9b46" />
      </LinearGradient>

      <LinearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#ff0000" />
      </LinearGradient>

      <LinearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#001aff8d" />
      </LinearGradient>

      {legendTitle !== '' && (
      <VictoryLegend
        orientation="horizontal"
        gutter={20}
        // style={{ border: { stroke: "#ccc", strokeOpacity: 0.5, fill: '#fff' } }}
        colorScale={["#00ff00"]}
        data={[
          { name: `${legendTitle}` }
        ]}
      />)}

      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: { fontSize: 10, padding: 5 }
        }}
      />
      <VictoryAxis
        crossAxis
        style={{
          tickLabels: { fontSize: 10, padding: 5 }
        }}
      />

      <VictoryArea
        interpolation="monotoneX"
        style={styles1}
        name="area-1"
        labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
        labelComponent={<VictoryTooltip
          renderInPortal={false}
          cornerRadius={3}
          flyoutStyle={{ fill: "white" }}
          flyoutPadding={{ top: 5, bottom: 5, left: 10, right: 10 }}
          style={{ fontSize: 10, fill: "black" }}
        />}
        standalone
        /* @ts-ignore */
        data={data}
      />

      <VictoryScatter
        data={data}
        style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
      labels={({ datum }) => `${datum.y}`}
      // labelComponent={<VictoryLabel />}
      />


    </VictoryChart>
  )
}

const styles1 = StyleSheet.create({
  data: {
    fill: `url(#gradient1)`,
    opacity: 0.2,
    stroke: "#000",
    strokeWidth: 1,
    strokeLinecap: "round"
  },
})

const styles2 = StyleSheet.create({
  data: {
    fill: `url(#gradient2)`,
    opacity: 0.2,
    stroke: "#000",
    strokeWidth: 1,
    strokeLinecap: "round"
  },
})

const styles3 = StyleSheet.create({
  data: {
    fill: `url(#gradient3)`,
    opacity: 0.2,
    stroke: "#000",
    strokeWidth: 1,
    strokeLinecap: "round"
  },
})