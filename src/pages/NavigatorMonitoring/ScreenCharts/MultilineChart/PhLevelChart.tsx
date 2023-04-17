import React from 'react'
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryScatter, VictoryTheme, VictoryVoronoiContainer } from 'victory-native'

export const PhLevelChart = () => {

    const data = [
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: 0 },
        { x: 5, y: -1 },
        { x: 6, y: -2 },
        { x: 7, y: 0 },
    ]

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            containerComponent={
                <VictoryVoronoiContainer
                    labels={({ datum }) => `${datum.x}, ${datum.y}`}
                />
            }

        >
            <VictoryAxis
                standalone={false}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(y) => {
                    return y + 6;
                }}
                tickValues={[-3, -2, -1, 0, 1, 2, 3]}
            />
            <VictoryLine
                interpolation='monotoneX'
                style={{
                    data: { stroke: "#3e9b46" },
                    parent: { border: "1px solid #ccc" }
                }}

                data={data}
            />
            <VictoryScatter
                data={data}
                style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
                labels={({ datum }) => `${datum.y}`}
                labelComponent={<VictoryLabel />}

            />
        </VictoryChart>
    )
}


// {Object.entries(data).map(([key, val]) => (
//     <React.Fragment key={key}>
//       <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//         <Stop offset="100%" stopColor="#fff" />
//         <Stop offset="0%" stopColor="#3e9b46" />
//       </LinearGradient>

//       <VictoryArea
//         interpolation="monotoneX"
//         style={styles}
//         name="area-1"
//         /* @ts-ignore */
//         data={val.slice(0, howMuch)}
//       />

//       <VictoryScatter
//         data={val.slice(0, howMuch)}
//         style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//         labels={({ datum }) => `${datum.y}`}
//         labelComponent={<VictoryLabel />}
//       />
//     </React.Fragment>
//   ))}



// {Object.entries(data).map(([key, val], idx) => (
//     <React.Fragment key={key}>
//       <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//         <Stop offset="100%" stopColor="#fff" />
//         <Stop offset="0%" stopColor="#3e9b46" />
//       </LinearGradient>

//       <VictoryArea
//         interpolation="monotoneX"
//         style={{
//           data: {
//             fill: `url(#gradient)`,
//             fillOpacity: 0.5,
//             stroke: "#000",
//             strokeWidth: 1,
//             strokeLinecap: "round"
//           },
//         }}
//         name="area-1"
//         /* @ts-ignore */
//         data={val.slice(0, howMuch)}
//       />

//       <VictoryScatter
//         data={val.slice(0, howMuch)}
//         style={{ data: { fill: "white", strokeWidth: 1, stroke: '#3e9b46', fontSize: 18 } }}
//         labels={({ datum }) => `${datum.y}`}
//         labelComponent={<VictoryLabel />}
//       />
//     </React.Fragment>
//   ))}