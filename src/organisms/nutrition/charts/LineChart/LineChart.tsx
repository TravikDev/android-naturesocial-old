import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";



/* @ts-ignore */
export const NutritionLineChart = ({ data }) => {

  // const filteredData = data.datasets.map((state: any) => state.include === true)

  // data.datasets = filteredData

  // console.log(data)

  // console.log('line: ', data.datasets)

  // const [chartData, setChartData] = useState({ labels: data.labels, datasets: ...})

  /* @ts-ignore */
  const renderDotContent = ({ x, y, index }) => {
    return (
      <View style={{ position: 'absolute', left: x - 4, top: y - 14 }}>
        <Text style={{ color: '#fff', fontSize: 8, fontWeight: '300' }}>{data.datasets[0].data[index]}</Text>
      </View>
    );
  };

  return (

    <View style={{ overflow: "hidden" }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 35, width: '100%', justifyContent: 'center' }}>
        { /* @ts-ignore */}
        {/* {data.datasets?.map((val, idx) => (
          <View key={idx} style={legendStyle.legendContainer}>
            <View style={[legendStyle.legendDot, { backgroundColor: `${val.legendColor}$` }]} />
            <Text style={legendStyle.legendLabel}>{val.name}</Text>
          </View>))} */}
      </View>
      {/* <Text style={{ color: '#000' }}>Bezier Line Chart</Text> */}
      <View style={{ left: -30 }}>
        <LineChart
          data={{ ...data, datasets: data.datasets.filter((state: any) => state.include === true) }}
          width={Dimensions.get("window").width * 0.99} // from react-native
          height={200}
          withDots={false}
          transparent={false}
          yAxisInterval={1} // optional, defaults to 1
          fromZero
          onDataPointClick={(e) => { console.log(e) }}
          chartConfig={{
            fillShadowGradientFromOpacity: 0,
            fillShadowGradientToOpacity: 0,
            // formatTopBarValue: () => ('lol'),
            propsForLabels: {
              accessible: true,
              fontSize: 12,
            },
            propsForVerticalLabels: {
              dy: 0,
            },
            propsForHorizontalLabels: {
              dy: 0,

            },

            backgroundColor: "#fff",
            backgroundGradientFrom: "#116611",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#119922",
            backgroundGradientToOpacity: 0,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(155, 155, 155, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(105, 105, 105, ${opacity})`,
            style: {
              borderRadius: 12,
              borderColor: '#000',
            },
            propsForDots: {
              r: "2",
              strokeWidth: "1",
              stroke: "#ffffff77"
            },

          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', left: '10%' }}>
          {/* @ts-ignore */}
          {data.datasets?.map((val, idx) => (
            <View key={idx} style={legendStyle.legendContainer}>
              <View style={[legendStyle.legendDot, { backgroundColor: `${val.legendColor}$` }]} />
              <Text style={legendStyle.legendLabel}>{val.name}</Text>
            </View>))}
        </View>
      </View>
    </View>
  )
}

const legendStyle = StyleSheet.create({
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8, // Устанавливаем желаемый размер кружков
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  legendLabel: {
    fontSize: 12,
    color: '#333'
  },
});