import { Divider, ListItem } from "@react-native-material/core";
import { ScrollView, Text, View } from "react-native";
import { CustomSpoiler } from "../../../../atoms/Spoilers/CustomSpoiler";
// import { ScrollView } from "react-native-gesture-handler";

export const ScrTabConcentrates = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10, gap: 5 }}>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
            Раствор А
          </Text>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
              граммы
            </Text>
          </View>
        </View>

        <Divider style={{}} />

        <CustomSpoiler title='Нитрат кальция' value={'1'}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 4, gap: 4 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>CaNO32</Text>
              <View style={{ alignItems: "center", flexDirection: 'row', gap: 4 }}>
                <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>Концентрация:</Text>
                <View style={{ padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: 64 }}>
                  <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>123</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
              {/* <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text> */}
              <View style={{ alignItems: "center", flexDirection: 'row', gap: 4 }}>
                <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>Плотность:</Text>
                <View style={{ padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: 64 }}>
                  <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>123</Text>
                </View>
              </View>
            </View>

          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Нитрат калия' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Нитрат аммония' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Нитрат магния' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Хлорид кальция' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
            Раствор Б
          </Text>
          <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'space-between', width: 88 }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>мл</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>гр</Text>

          </View>
        </View>

        <Divider style={{}} />

        <CustomSpoiler title='Нитрат кальция' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Нитрат калия' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Нитрат аммония' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Нитрат магния' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>

        <CustomSpoiler title='Хлорид кальция' value={'1'}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
          </View>
        </CustomSpoiler>


      </ScrollView>
    </View>
  );
}