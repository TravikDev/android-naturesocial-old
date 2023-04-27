import { useState } from "react"
import { Divider, Icon, IconButton, ListItem } from "@react-native-material/core";
import { Dimensions, StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { InputMinerals } from "../../../../atoms/Inputs/InputMinerals";
import { ElementsRatiosTable } from "../../../../atoms/Inputs/ElementsRatios";
import { CustomSpoiler } from "../../../../atoms/Spoilers/CustomSpoiler";
import { ButtonIconCircle } from "../../../../atoms/Buttons/ButtonIconCircle";

const srcWidth = Dimensions.get('window').width

export const ScrTabMacro = () => {

  const [text, onChangeText] = useState('Useless Text');
  const [numberN, onChangeNumberN] = useState('150.0');
  const [numberP, onChangeNumberP] = useState('50.0');
  const [numberK, onChangeNumberK] = useState('200.0');


  const [numberDivN, onChangeNumberDivN] = useState('0.10');
  const [numberDivK, onChangeNumberDivK] = useState('0.20');
  const [numberDivCa, onChangeNumberDivCa] = useState('0.30');
  const [numberDivMg, onChangeNumberDivMg] = useState('0.40');
  const [numberDivS, onChangeNumberDivS] = useState('0.50');

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10, paddingBottom: 25, gap: 10 }}>
      
      {/* <Divider style={{ marginTop: 10 }} /> */}

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, fontWeight: '300', color: '#111', paddingVertical: 3 }}>
          Profile
        </Text>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
            mg / litre
          </Text>
        </View>
      </View>

      <Divider style={{ top: -10 }} />

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputMinerals element="N" number={numberN} onChange={onChangeNumberN} />
        <InputMinerals element="P" number={numberP} onChange={onChangeNumberP} />
        <InputMinerals element="K" number={numberK} onChange={onChangeNumberK} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputMinerals element="Ca" number={numberN} onChange={onChangeNumberN} />
        <InputMinerals element="Mg" number={numberP} onChange={onChangeNumberP} />
        <InputMinerals element="S" number={numberK} onChange={onChangeNumberK} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputMinerals element="NO₃" number={numberN} onChange={onChangeNumberN} />
        <InputMinerals element="NH₄" number={numberP} onChange={onChangeNumberP} />
        <InputMinerals element="NH₄" divider="NO₃" number={numberK} onChange={onChangeNumberK} />
      </View>

      {/* <View style={{ display: 'flex', flexDirection: 'column', borderRadius: 5, borderWidth: 1, borderColor: '#ccc' }}>
        <View style={{ display: 'flex', flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
          <View style={{ width: 20, backgroundColor: '#e7e7e7', borderRightColor: '#ccc', borderRightWidth: 1 }}><Text></Text></View>
          <View style={styles.dividerElement}><Text style={styles.dividerElementText}>N</Text></View>
          <View style={styles.dividerElement}><Text style={{ color: '#111', fontWeight: '300', height: 30 }}>P</Text></View>
          <View style={styles.dividerElement}><Text style={{ color: '#111' }}>Ca</Text></View>
          <View style={styles.dividerElement}><Text style={{ color: '#111' }}>Mg</Text></View>
          <View style={styles.dividerElement}><Text style={{ color: '#111' }}>S</Text></View>
          <View style={styles.dividerElement}><Text style={{ color: '#111' }}>S</Text></View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
          <View style={{ backgroundColor: '#e7e7e7', height: 50, width: 20, justifyContent: 'center', alignItems: 'center', borderRightColor: '#ccc', borderRightWidth: 1 }}>
            <Text style={{ color: '#111' }}>K</Text>
          </View>
          <View style={styles.dividerElementsNumber}>
            <TextInput
              style={styles.textRight}
              onChangeText={onChangeNumberDivN}
              value={numberDivN}
              placeholder="mg/litre"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dividerElementsNumber}>
            <TextInput
              style={styles.textRight}
              onChangeText={onChangeNumberDivN}
              value={numberDivN}
              placeholder="mg/litre"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dividerElementsNumber}>
            <TextInput
              style={styles.textRight}
              onChangeText={onChangeNumberDivN}
              value={numberDivN}
              placeholder="mg/litre"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dividerElementsNumber}>
            <TextInput
              style={styles.textRight}
              onChangeText={onChangeNumberDivN}
              value={numberDivN}
              placeholder="mg/litre"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dividerElementsNumber}>
            <TextInput
              style={styles.textRight}
              onChangeText={onChangeNumberDivN}
              value={numberDivN}
              placeholder="mg/litre"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dividerElementsNumber}>
            <TextInput
              style={styles.textRight}
              onChangeText={onChangeNumberDivN}
              value={numberDivN}
              placeholder="mg/litre"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View> */}

      {/* <Divider style={{ marginTop: 10 }} /> */}

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '300', color: '#111', top: 0 }}>
          Ratios
        </Text>
        <View>
          <ButtonIconCircle iconTitle='error-outline' color='#666' size={32} />
        </View>
      </View>

      <Divider style={{ top: -10 }} />

      <ElementsRatiosTable />

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '300', color: '#111', top: 0 }}>
          Salt composition
        </Text>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111', top: 0 }}>grams</Text>
        </View>
      </View>

      <Divider style={{ top: -5, marginBottom: 5 }} />


      <CustomSpoiler title='Calcium Nitrate' value={30}>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>Ca(NO3)2 · 4H2O</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Potassium Nitrate' value={234}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Ammonium Nitrate' value={1234}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>NH4NO3</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Magnesium sulfate' value={1234}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>MgSO4 · 7H2O</Text>
        </View>
      </CustomSpoiler>


      <CustomSpoiler title='Potassium phosphate' value={13}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KH2PO4</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Potassium Sulfate' value={9}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>K2SO4</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Magnesium Nitrate' value={44}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>Mg(NO3)2 · 6H2O</Text>
        </View>
      </CustomSpoiler>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  secondContainer: {
    height: 45,
    width: srcWidth * 0.3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    overflow: 'hidden'
  },
  statistics: {
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  textLeft: {
    fontSize: 18,
    color: "#111111",
    fontWeight: '300',

  },
  textRight: {
    textAlign: 'center',
    fontSize: 18,
    color: "#666",
    fontWeight: '300',
  },
  textTitleStyle: {
    fontSize: 18,
    color: "#666",
    fontWeight: '300',

  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 20

  },
  arrowTop: {
    backgroundColor: '#ccc',
  },
  arrowTextTop: {
    color: '#666'
  },
  arrowDown: {

  },
  arrowTextDown: {
    color: '#666'
  },

  dividerElement: {
    backgroundColor: '#e7e7e7',
    flexGrow: 1,
    // Width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  },
  dividerElementText: {
    color: '#111', fontWeight: '300'
  },
  dividerElementsNumber: {
    // flexGrow: 1,
    width: '15.8%',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  }
})