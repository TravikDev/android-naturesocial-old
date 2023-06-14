import { StyleSheet } from 'react-native';
import { LinearGradient, Stop } from 'react-native-svg';
import { VictoryChart, VictoryArea, VictoryTheme, VictoryCursorContainer, VictoryScatter, VictoryLabel, VictoryAxis, VictoryLegend, VictoryTooltip, VictoryPortal } from 'victory-native';


/* @ts-ignore */
export const NutritionMultiChart = ({
  data = {
    n: [
      { x: '0', y: 0 },
      { x: '1', y: 75 },
      { x: '2', y: 105 },
      { x: '3', y: 115 },
      { x: '4', y: 140 },
      { x: '5', y: 140 },
      { x: '6', y: 100 },
      { x: '7', y: 80 },
      { x: '8', y: 60 },
      { x: '9', y: 0 },
    ],
    p: [
      { x: '0', y: 0 },
      { x: '1', y: 40 },
      { x: '2', y: 50 },
      { x: '3', y: 60 },
      { x: '4', y: 80 },
      { x: '5', y: 100 },
      { x: '6', y: 130 },
      { x: '7', y: 110 },
      { x: '8', y: 90 },
      { x: '9', y: 0 },
    ],
    k: [
      { x: '0', y: 0 },
      { x: '1', y: 80 },
      { x: '2', y: 100 },
      { x: '3', y: 140 },
      { x: '4', y: 260 },
      { x: '5', y: 300 },
      { x: '6', y: 260 },
      { x: '7', y: 220 },
      { x: '8', y: 240 },
      { x: '9', y: 0 },
    ],
    ca: [
      { x: '0', y: 0 },
      { x: '1', y: 65 },
      { x: '2', y: 90 },
      { x: '3', y: 100 },
      { x: '4', y: 110 },
      { x: '5', y: 100 },
      { x: '6', y: 55 },
      { x: '7', y: 45 },
      { x: '8', y: 40 },
      { x: '9', y: 0 },
    ],
    mg: [
      { x: '0', y: 0 },
      { x: '1', y: 45 },
      { x: '2', y: 60 },
      { x: '3', y: 65 },
      { x: '4', y: 65 },
      { x: '5', y: 65 },
      { x: '6', y: 50 },
      { x: '7', y: 45 },
      { x: '8', y: 40 },
      { x: '9', y: 0 },
    ],
    s: [
      { x: '0', y: 0 },
      { x: '1', y: 35 },
      { x: '2', y: 40 },
      { x: '3', y: 45 },
      { x: '4', y: 45 },
      { x: '5', y: 50 },
      { x: '6', y: 40 },
      { x: '7', y: 45 },
      { x: '8', y: 35 },
      { x: '9', y: 0 },
    ],
  },
  howMuch = 2,
  step = 5

}) => {


  const legendArray = Object.keys(data)

  // /* @ts-ignore */
  // const maxValueAirTempY = data?.n.reduce((acc, val) => (val.y > acc ? acc = val.y : acc), 0)
  // /* @ts-ignore */
  // const maxValueRootTempY = data?.p.reduce((acc, val) => (val.y > acc ? acc = val.y : acc), 0)
  // /* @ts-ignore */
  // const maxValueSolutionTempY = data?.k.reduce((acc, val) => (val.y > acc ? acc = val.y : acc), 0)

  // /* @ts-ignore */
  // const minValueAirTempY = data?.n.reduce((acc, val) => (val.y < acc ? acc = val.y : acc), 50)
  // /* @ts-ignore */
  // const minValueRootTempY = data?.p.reduce((acc, val) => (val.y < acc ? acc = val.y : acc), 50)
  // /* @ts-ignore */
  // const minValueSolutionTempY = data?.k.reduce((acc, val) => (val.y < acc ? acc = val.y : acc), 50)

  // const maxValueY = Math.max(maxValueAirTempY, maxValueRootTempY, maxValueSolutionTempY)

  // const minValueY = Math.min(minValueAirTempY, minValueRootTempY, minValueSolutionTempY)

  // console.log(minValueY)
  // const maxValueY = (maxValueAirTempY = 0, maxValueRootTempY = 0, maxValueSolutionTempY = 0) => {
  //   return Math.max(maxValueAirTempY, maxValueRootTempY, maxValueSolutionTempY)
  // }

  // const maxValueY = data2.reduce((ac, val) => (val.y > ac ? ac = val.y : ac), 0)

  return (
    <VictoryChart
      height={250}
      // domain={{ y: [minValueY - 1, maxValueY + 1] }}
      theme={VictoryTheme.material}
    // containerComponent={
    // <VictoryCursorContainer
    // cursorLabelOffset={{ x: 10, y: 50 }}
    // cursorLabel={({ datum }) => `${datum.x.toFixed(2)}, ${datum.y.toFixed()}`}
    // />
    // }
    >

      <LinearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#3e9b46" stopOpacity={0.5} />
      </LinearGradient>

      <LinearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#ff0000" stopOpacity={0.5} />
      </LinearGradient>

      <LinearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#001aff8d" stopOpacity={0.5} />
      </LinearGradient>

      <LinearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#001aff8d" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient id="gradient5" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#001aff8d" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient id="gradient6" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
        <Stop offset="0%" stopColor="#001aff8d" stopOpacity={0.5} />
      </LinearGradient>

      <VictoryLegend
        // style={{ data: { alignContent: 'center' }, border: { color: "#000", accentColor: '#000' }, title: {}, labels: { color: '#fff' } }}
        orientation="horizontal"
        gutter={20}
        x={40}
        y={10}
        // style={{ border: { stroke: "black" } }}
        // colorScale={["navy", "blue", "cyan"]}
        // title='Макроэлементы'
        // centerTitle
        // sortOrder='ascending'
        // style={{ border: { stroke: "#ccc", strokeOpacity: 0.5, fill: '#fff' } }}
        colorScale={["#11661155", "#66111155", '#11116655']}
        data={[
          { name: "N" },
          { name: "P" },
          { name: "K" },
          { name: "Ca" },
          { name: "Mg" },
          { name: "S" },
        ]}
      />

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

      {Object.entries(data).map((val, idx) => {



        return (
          <VictoryArea
            key={val[0]}
            interpolation="monotoneX"
            style={{
              data: {
                fill: `url(#gradient${idx + 1})`,
                opacity: 0.2,
                stroke: "#000",
                strokeWidth: 1,
                strokeLinecap: "round"
                ,
              }
            }}
            name={`area-${idx + 1}`}
            // labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
            // labelComponent={<VictoryTooltip
            //   renderInPortal={false}
            //   cornerRadius={3}
            //   flyoutStyle={{ fill: "white" }}
            //   flyoutPadding={{ top: 5, bottom: 5, left: 10, right: 10 }}
            //   style={{ fontSize: 10, fill: "black" }}
            // />}
            standalone
            /* @ts-ignore */
            data={val[1].slice(0, howMuch)}
          />
        )
      })}
      {Object.entries(data).map((val, idx) => (
        // data.n.length !== 0 && (
        <VictoryScatter
          key={val[0]}
          data={val[1].slice(0, howMuch)}
          style={{ data: { fill: "#886688", strokeWidth: 1, stroke: '#ffffff99', fontSize: 18 } }}
        />
      ))}


      {/* {data.p.length !== 0 && (
        <VictoryArea
          interpolation="monotoneX"
          style={styles2}
          name="area-2"
          data={data.p.slice(0, howMuch)}
        />)} */}
      {/* {data.p.length !== 0 && (
        <VictoryScatter
          data={data.p.slice(0, howMuch)}
          style={{ data: { fill: "white", strokeWidth: 1, stroke: '#ff0000', strokeOpacity: 0.4, fontSize: 18 } }}
        />
      )} */}

      {/* {data.p.length !== 0 && (
        <VictoryArea
          interpolation="monotoneX"
          style={styles3}
          name="area-3"
          
          data={data.k.slice(0, howMuch)}
        />)} */}

      {/* {data.k.length !== 0 && (
        <VictoryScatter
          data={data.k.slice(0, howMuch)}
          style={{ data: { fill: "white", strokeWidth: 1, stroke: '#0000ff', strokeOpacity: 0.4, fontSize: 18 } }}
        labels={({ datum }) => `${datum.y}`}
        labelComponent={<VictoryLabel />}
        />
      )} */}

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