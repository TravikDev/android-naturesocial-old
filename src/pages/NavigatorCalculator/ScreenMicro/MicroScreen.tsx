import { useState } from "react"
import { ListItem } from "@react-native-material/core";
import { ScrollView, View } from "react-native";
import { InputMinerals } from "../../../atoms/Inputs/InputMinerals";


export const MicroElementsScreen = () => {

  const [numberFe, onChangeNumberFe] = useState('150.00');
  const [numberMn, onChangeNumberMn] = useState('50.00');
  const [numberB, onChangeNumberB] = useState('200.00');
  const [numberZn, onChangeNumberZn] = useState('150.00');
  const [numberCu, onChangeNumberCu] = useState('50.00');
  const [numberMo, onChangeNumberMo] = useState('200.00');

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10, gap: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputMinerals element="Fe" number={numberFe} onChange={onChangeNumberFe} />
        <InputMinerals element="Mn" number={numberMn} onChange={onChangeNumberMn} />
        <InputMinerals element="B" number={numberB} onChange={onChangeNumberB} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputMinerals element="Zn" number={numberZn} onChange={onChangeNumberZn} />
        <InputMinerals element="Cu" number={numberCu} onChange={onChangeNumberCu} />
        <InputMinerals element="Mo" number={numberMo} onChange={onChangeNumberMo} />
      </View>
      <ListItem title="List Item" />
      <ListItem title="List Item" />
      <ListItem title="List Item" />
    </ScrollView>
  );
}