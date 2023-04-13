import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme } from 'victory-native';

export const MultilineChart = () => {

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
      <TextInput
        onChangeText={() => setHowMuch}
        /* @ts-ignore */
        value={howMuch}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <VictoryChart
        theme={VictoryTheme.material}
        events={[{
          childName: ["area-1"],
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [{
                childName: "area-1",
                mutation: (props) => {
                  const fill = props.style.fill;
                  return fill === "#3e9b45" ? null : { style: { fill: "#3e9b45", stroke: "#000", strokeWidth: 1, strokeLinecap: "round" } };
                }
              }];
            }
          }
        },
        {
          childName: ["area-2"],
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [{
                childName: "area-2",
                mutation: (props) => {
                  const fill = props.style.fill;
                  return fill === "#3e9b45" ? null : { style: { fill: "#3e9b45", stroke: "#000", strokeWidth: 1, strokeLinecap: "round" } };
                }
              }];
            }
          }
        },
        {
          childName: ["area-3"],
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [{
                childName: "area-3",
                mutation: (props) => {
                  const fill = props.style.fill;
                  return fill === "#3e9b45" ? null : { style: { fill: "#3e9b45", stroke: "#000", strokeWidth: 1, strokeLinecap: "round" } };
                }
              }];
            }
          }
        },
        {
          childName: ["area-4"],
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [{
                childName: "area-4",
                mutation: (props) => {
                  const fill = props.style.fill;
                  return fill === "#3e9b45" ? null : { style: { fill: "#3e9b45", stroke: "#000", strokeWidth: 1, strokeLinecap: "round" } };
                }
              }];
            }
          }
        },
        {
          childName: ["area-5"],
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [{
                childName: "area-5",
                mutation: (props) => {
                  const fill = props.style.fill;
                  return fill === "#3e9b45" ? null : { style: { fill: "#3e9b45", stroke: "#000", strokeWidth: 1, strokeLinecap: "round" } };
                }
              }];
            }
          }
        }
        ]}
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

const styles = StyleSheet.create({
  data: {
    fill: "#3e9b46",
    opacity: 0.25,
    stroke: "#000",
    strokeWidth: 1,
    strokeLinecap: "round"
  }
})