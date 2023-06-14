import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [75, 105, 115, 140, 140, 100, 80, 60],
      color: (opacity = 1) => `rgba(0, 179, 179, 1)`, // Цвет первой линии
      strokeWidth: 1, // Ширина первой линии
      name: 'N',
      legendColor: 'rgba(0, 179, 179, 1)'
    },
    {
      data: [40, 50, 60, 80, 100, 130, 110, 90],
      color: (opacity = 1) => `rgba(0, 74, 31, 1)`, // Цвет второй линии
      strokeWidth: 1, // Ширина второй линии
      name: 'P',
      legendColor: 'rgba(0, 74, 31, 1)'
    },
    {
      data: [80, 100, 140, 260, 300, 260, 220, 240],
      color: (opacity = 1) => `rgba(0, 150, 0, 1)`, // Цвет второй линии
      strokeWidth: 1, // Ширина второй линии
      name: 'K',
      legendColor: 'rgba(0, 150, 0, 1)'
    },
    {
      data: [65, 95, 100, 110, 100, 75, 65, 55],
      color: (opacity = 1) => `rgba(153, 153, 153, 1)`, // Цвет второй линии
      strokeWidth: 1, // Ширина второй линии
      name: 'Ca',
      legendColor: 'rgba(153, 153, 153, 1)'
    },
    {
      data: [45, 55, 60, 65, 55, 50, 45, 40],
      color: (opacity = 1) => `rgba(230, 200, 0, 1)`, // Цвет второй линии
      strokeWidth: 1, // Ширина второй линии
      name: 'Mg',
      legendColor: `rgba(230, 200, 0, 1)`
    },
    {
      data: [35, 40, 45, 50, 55, 55, 60, 65],
      color: (opacity = 1) => `rgba(255, 165, 0, 1)`, // Цвет второй линии
      strokeWidth: 1, // Ширина второй линии
      name: 'S',
      legendColor: 'rgba(255, 165, 0, 1)'
    },
  ],
};


export const NutritionLineChart = () => {

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
      {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 35, width: '100%', justifyContent: 'center' }}>
        {data.datasets.map((val, idx) => (
          <View key={idx} style={legendStyle.legendContainer}>
            <View style={[legendStyle.legendDot, { backgroundColor: `${val.legendColor}$` }]} />
            <Text style={legendStyle.legendLabel}>{val.name}</Text>
          </View>))}
      </View> */}
      {/* <Text style={{ color: '#000' }}>Bezier Line Chart</Text> */}
      <View style={{ left: '-8%' }}>
        <LineChart
          data={data}
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
          {data.datasets.map((val, idx) => (
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