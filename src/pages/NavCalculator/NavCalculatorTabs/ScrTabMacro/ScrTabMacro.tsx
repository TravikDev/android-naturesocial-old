import { useCallback, useEffect, useState } from "react"
import { Divider, Icon, IconButton, ListItem } from "@react-native-material/core";
import { Dimensions, StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { InputElements } from "../../../../atoms/inputs/InputMinerals";
import { ElementsRatiosTable } from "../../../../atoms/inputs/ElementsRatios";
import { CustomSpoiler } from "../../../../atoms/Spoilers/CustomSpoiler";
import { ButtonIconCircle } from "../../../../atoms/Buttons/ButtonIconCircle";

const srcWidth = Dimensions.get('window').width

export const ScrTabMacro = () => {

  const [volume, setVolume] = useState('10')

  
  const [elementNO3, setElementNO3] = useState('172');
  const [elementNH4, setElementNH4] = useState('12');
  const [elementN, setElementN] = useState((elementNH4 + elementNO3).toString());
  const [elementNH4divNO3, setElementNH4divNO3] = useState('0.200')

  const [elementP, setElementP] = useState('60');
  const [elementK, setElementK] = useState('226');

  const [elementCa, setElementCa] = useState('202');
  const [elementMg, setElementMg] = useState('29');
  const [elementS, setElementS] = useState('77');
  const [elementCl, setElementCl] = useState('0');

  const [bufferEC, setBufferEC] = useState((6.78246839012758 * 10 ** -3 * +elementNH4 + 4.74075552672289 * 10 ** -3 * +elementCa + 7.81732153877802 * 10 ** -3 * +elementMg + 2.42977316149295 * 10 ** -3 * +elementK + 0.19).toString())

  console.log('buffer EC: ', bufferEC)

  const [bufferKMg, setBufferKMg] = useState((+elementK/+elementMg).toString())
  const [bufferKCa, setbufferKCa] = useState((+elementK/+elementCa).toString())
  const [bufferNCa, setBufferNCa] = useState((+elementN/+elementCa).toString())
  const [bufferNH4dNO3, setBufferNH4dNO3] = useState((+elementNH4/+elementNO3).toString())
  const [bufferP, setBufferP] = useState(elementP)





  const [numberDivN, onChangeNumberDivN] = useState('0.10');
  const [numberDivK, onChangeNumberDivK] = useState('0.20');
  const [numberDivCa, onChangeNumberDivCa] = useState('0.30');
  const [numberDivMg, onChangeNumberDivMg] = useState('0.40');
  const [numberDivS, onChangeNumberDivS] = useState('0.50');

  const [EC, setEC] = useState('2')
  const [KMg, setKMg] = useState('7')
  const [KCa, setKCa] = useState('1')
  const [NCa, setNCa] = useState('0.9')
  const [NH4dNO3, setNH4dNO3] = useState('6.77')
  // const [P, setP] = useState('60')

  const [bufferL2, setBufferL2] = useState(((+NCa * +KMg) / (+KCa + (+KMg) * +KCa + (+KMg) + (+KMg) * +NCa)).toString())


  // const [bufferL2, setBufferL2] = useState('')

  const [bufferP5, setBufferP5] = useState('6.77')

  const [bufferM5, setBufferM5] = useState('7')
  const [bufferN5, setBufferN5] = useState('1')
  const [bufferO5, setBufferO5] = useState('0.9')


  const [bufferM2, setBufferM2] = useState((+bufferL2 / (1 + (+bufferP5 / 100))).toString())

  const [bufferN2, setBufferN2] = useState((+bufferL2 * (+bufferP5 / 100) / (1 + (+bufferP5 / 100))).toString())

  const [bufferP2, setBufferP2] = useState(((+bufferN5 * +bufferM5) / (+bufferN5 + ((+bufferM5) * (+bufferN5)) + (+bufferM5) + ((+bufferM5) * +bufferO5))).toString())


  const [bufferQ2, setBufferQ2] = useState((+KMg / (+KCa + (+KMg * +KCa) + (+KMg) + (+KMg * +NCa))).toString())

  const [bufferR2, setBufferR2] = useState((+bufferN5 / (+bufferN5 + (+bufferM5) * +bufferN5 + (+bufferM5) + (+bufferM5) * +bufferO5)).toString())

  const [bufferL6, setBufferL6] = useState(((10 ** 20) * (-19 + 100 * +EC) / (67824683901275800000 * +bufferN2 + 47407555267228900000 * +bufferQ2 + 78173215387780200000 * +bufferR2 + 24297731614929500000 * +bufferP2)).toString())

  // NO3 calculated
  const [NO3, setNO3] = useState(+bufferM2 * +bufferL6)
  console.log('LOOOL', bufferM2)
  // NO3 buffer
  const [bufferM6, setBufferM6] = useState(NO3)

  console.log('gg', +bufferN2 * +bufferL6)
  // NH4 calculated
  const [NH4, setNH4] = useState(+bufferN2 * +bufferL6)
  // NH4 buffer
  const [bufferN6, setBufferN6] = useState(NH4)

  // P start
  const [P5, setP5] = useState('60')
  // P calculated
  const [P, setP] = useState(P5)
  // P buffer
  const [bufferO6, setBufferO6] = useState(P)

  // K calculated
  const [K, setK] = useState(+bufferP2 * +bufferL6)
  // K buffer
  const [bufferP6, setBufferP6] = useState(K)

  // Ca calculated
  const [Ca, setCa] = useState(+bufferQ2 * +bufferL6)
  // Ca buffer
  const [bufferQ6, setBufferQ6] = useState(Ca)

  // Mg calculated
  const [Mg, setMg] = useState(+bufferR2 * +bufferL6)
  // Mg buffer
  const [bufferR6, setBufferR6] = useState(Mg)



  const [bufferR5, setBufferR5] = useState('')



  // CaNO32 Ca_percent
  const [CaNO32_Ca_percent, setCaNO32_Ca_percent] = useState('19.3')
  // CaNO32 NO3_percent
  const [CaNO32_NO3_percent, setCaNO32_NO3_percent] = useState('14.2')
  // CaNO32 NO3_percent
  const [CaNO32_NH4_percent, setCaNO32_NH4_percent] = useState('0.71')
  // CaNO32_concentration
  const [CaNO32_concentration, setCaNO32_concentration] = useState('656.7')
  // CaNO32 ppm
  const [CaNO32_ppm, setCaNO32_ppm] = useState((bufferQ6 / (+CaNO32_Ca_percent * 0.01)).toString())
  // CaNO32 density
  const [CaNO32_density, setCaNO32_density] = useState((+CaNO32_ppm / 1000).toString())
  // CaNO32 grams
  const [CaNO32_grams, setCaNO32_grams] = useState((+CaNO32_density * +volume).toString())
  // CaNO32 mL
  const [CaNO32_mL, setCaNO32_mL] = useState((+CaNO32_grams / +CaNO32_concentration * 1000).toString())



  // **********

  // NH4NO3 NH4_percent
  const [NH4NO3_NH4_percent, setNH4NO3_NH4_percent] = useState('17.0')
  // NH4NO3 NO3_percent
  const [NH4NO3_NO3_percent, setNH4NO3_NO3_percent] = useState('17.0')
  // NH4NO3_concentration
  const [NH4NO3_concentration, setNH4NO3_concentration] = useState('468.5')
  // NH4NO3 ppm
  const [NH4NO3_ppm, setNH4NO3_ppm] = useState((((bufferN6 * +CaNO32_Ca_percent / 100) - (bufferQ6 * +CaNO32_NH4_percent * 0.01)) / (+NH4NO3_NH4_percent / 100 * +CaNO32_Ca_percent / 100)).toString())
  // NH4NO3 density
  const [NH4NO3_density, setNH4NO3_density] = useState((+NH4NO3_ppm / 1000).toString())
  // NH4NO3 grams
  const [NH4NO3_grams, setNH4NO3_grams] = useState((+NH4NO3_density * +volume).toString())
  // NH4NO3 mL
  const [NH4NO3_mL, setNH4NO3_mL] = useState((+NH4NO3_grams / +NH4NO3_concentration * 1000).toString())



  // **********

  // KNO3 Ca_percent
  const [KNO3_K_percent, setKNO3_K_percent] = useState('38.2')
  // KNO3 NO3_percent
  const [KNO3_NO3_percent, setKNO3_NO3_percent] = useState('13.7')
  // KNO3_concentration
  const [KNO3_concentration, setKNO3_concentration] = useState('200.8')
  // KNO3 ppm
  const [KNO3_ppm, setKNO3_ppm] = useState(-(((+NH4NO3_NO3_percent / 100 * bufferN6 * +CaNO32_Ca_percent / 100) - (+NH4NO3_NO3_percent / 100 * bufferQ6 * +CaNO32_NH4_percent / 100) - (bufferM6 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (bufferQ6 * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)).toString())
  // KNO3 density
  const [KNO3_density, setKNO3_density] = useState((+KNO3_ppm / 1000).toString())
  // KNO3 grams
  const [KNO3_grams, setKNO3_grams] = useState((+KNO3_density * +volume).toString())
  // KNO3 mL
  const [KNO3_mL, setKNO3_mL] = useState((+KNO3_grams / +KNO3_concentration * 1000).toString())



  // **********

  // MgS Ca_percent
  const [MgS_Mg_percent, setMgS_Mg_percent] = useState('10.1')
  // MgS NO3_percent
  const [MgS_S_percent, setMgS_S_percent] = useState('13.3')
  // MgS_concentration
  const [MgS_concentration, setMgS_concentration] = useState('284.6')
  // MgS ppm
  const [MgS_ppm, setMgS_ppm] = useState((bufferR6 / +MgS_Mg_percent * 100).toString())
  // MgS density
  const [MgS_density, setMgS_density] = useState((+MgS_ppm / 1000).toString())
  // MgS grams
  const [MgS_grams, setMgS_grams] = useState((+MgS_density * +volume).toString())
  // MgS mL
  const [MgS_mL, setMgS_mL] = useState((+MgS_grams / +MgS_concentration * 1000).toString())



  // **********

  // KH2PO4 Ca_percent
  const [KH2PO4_K_percent, setKH2PO4_K_percent] = useState('27.6')
  // KH2PO4 NO3_percent
  const [KH2PO4_P_percent, setKH2PO4_P_percent] = useState('21.8')
  // KH2PO4_concentration
  const [KH2PO4_concentration, setKH2PO4_concentration] = useState('140.9')
  // KH2PO4 ppm
  const [KH2PO4_ppm, setKH2PO4_ppm] = useState((+bufferO6 / +KH2PO4_P_percent * 100).toString())
  // KH2PO4 density
  const [KH2PO4_density, setKH2PO4_density] = useState((+KH2PO4_ppm / 1000).toString())
  // KH2PO4 grams
  const [KH2PO4_grams, setKH2PO4_grams] = useState((+KH2PO4_density * +volume).toString())
  // KH2PO4 mL
  const [KH2PO4_mL, setKH2PO4_mL] = useState((+KH2PO4_grams / +KH2PO4_concentration * 1000).toString())

  // **********

  // K2SO4 Ca_percent
  const [K2SO4_K_percent, setK2SO4_Mg_percent] = useState('41.5')
  // K2SO4 NO3_percent
  const [K2SO4_S_percent, setK2SO4_S_percent] = useState('17.0')
  // K2SO4_concentration
  const [K2SO4_concentration, setK2SO4_concentration] = useState('168')

  console.log(bufferQ6)
  // K2SO4 ppm
  const [K2SO4_ppm, setK2SO4_ppm] = useState((((+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +NH4NO3_NO3_percent / 100 * bufferN6 * +CaNO32_Ca_percent / 100) - (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +NH4NO3_NO3_percent / 100 * bufferQ6 * +CaNO32_NH4_percent / 100) - (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * bufferM6 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * bufferQ6 * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100) + (bufferP6 * +KH2PO4_P_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) - (+bufferO6 * +KH2PO4_K_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+K2SO4_K_percent / 100 * +KH2PO4_P_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)).toString())

  console.log('kso-ppm', K2SO4_ppm)
  // K2SO4 density
  const [K2SO4_density, setK2SO4_density] = useState((+K2SO4_ppm / 1000).toString())
  // K2SO4 grams
  const [K2SO4_grams, setK2SO4_grams] = useState((+K2SO4_density * +volume).toString())
  // K2SO4 mL
  const [K2SO4_mL, setK2SO4_mL] = useState((+K2SO4_grams / +K2SO4_concentration * 1000).toString())

  const handleChangeN = (value: number) => {
    let part = (+elementNO3 / +elementNH4)

    const calculatedNH4divNO31 = elementNH4divNO3
    console.log(calculatedNH4divNO31)

    if (!part || !isFinite(part)) part = 1

    if (!value) value = 1

    if (elementN === '') return setElementN('1')

    let calculatedNH4 = (value / (1 / +elementNH4divNO3 + 1)).toFixed(0).toString()
    console.log('1', calculatedNH4)

    let calculatedNO3 = (value - (value / +(1 / +elementNH4divNO3 + 1))).toFixed(0).toString()
    // console.log('2', calculatedNO3)

    if (!calculatedNH4 || isNaN(+calculatedNH4)) calculatedNH4 = (+value / (1 + 1 / +elementNH4divNO3)).toString()
    if (!calculatedNO3 || isNaN(+calculatedNO3)) calculatedNO3 = (+calculatedNH4 * (1 + 1 / +elementNH4divNO3)).toString()
    setElementNH4(calculatedNH4)
    setElementNO3(calculatedNO3)

    setElementN(value.toString())

    setElementNH4divNO3(calculatedNH4divNO31)
  }

  const handleChangeNO3 = (value: number) => {
    if (!value || !isFinite(value)) value = 1
    setElementNO3(value.toString())
    const calculatedNH4 = (+elementN - (+value)).toString()
    setElementNH4(calculatedNH4)
    let calculatedNH4divNO3 = (+calculatedNH4 / +value).toFixed(3).toString()
    if (!calculatedNH4divNO3 || !isFinite(+calculatedNH4divNO3)) calculatedNH4divNO3 = '1'
    setElementNH4divNO3(calculatedNH4divNO3)
  }

  const handleChangeNH4 = (value: number) => {

    if (!value || !isFinite(value)) value = 1
    // console.log(value)
    setElementNH4(value.toString())
    const calculatedNO3 = (+elementN - (+value)).toString()
    setElementNO3(calculatedNO3)
    let calculatedNH4divNO3 = (+value / +calculatedNO3).toFixed(3).toString()
    if (!calculatedNH4divNO3 || !isFinite(+calculatedNH4divNO3)) calculatedNH4divNO3 = '1'
    setElementNH4divNO3(calculatedNH4divNO3)
  }

  const [elementBuffNO3, setelementBuffNO3] = useState('')


  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10, paddingBottom: 25, gap: 4 }}>

      {/* <Divider style={{ marginTop: 10 }} /> */}

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
          Макропрофиль
        </Text>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
            мг / литр
          </Text>
        </View>
      </View>

      <Divider style={{ marginBottom: 4 }} />

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputElements element="N" number={elementN.toString()} onChange={handleChangeN} />
        <InputElements element="NO₃" number={elementNO3} onChange={handleChangeNO3} />
        <InputElements element="NH₄" number={elementNH4} onChange={handleChangeNH4} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputElements element="P" number={elementP} onChange={setElementP} />
        <InputElements element="K" number={elementK} onChange={setElementK} />
        <InputElements element="Ca" number={elementCa} onChange={setElementCa} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
        <InputElements element="Mg" number={elementMg} onChange={setElementMg} />
        <InputElements element="S" number={elementS} onChange={setElementS} />
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
          Матрица соотношений
        </Text>
        <View>
          <Icon name='error-outline' color='#666' size={22} />
        </View>
      </View>

      <Divider style={{ marginBottom: 4 }} />

      <InputElements element="NH₄" divider="NO₃" number={elementNH4divNO3.toString()} onChange={setElementNH4divNO3} /><Text style={{ color: '#111' }}>NH4 : NO3 - 1 : {(1 / +elementNH4divNO3).toFixed(1)}</Text>

      <ElementsRatiosTable />

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
          Составы солей
        </Text>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111', top: 0 }}>граммы</Text>
        </View>
      </View>

      <Divider style={{ marginBottom: 4 }} />


      <CustomSpoiler title='Нитрат кальция' value={30}>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>Ca(NO3)2 · 4H2O</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Нитрат калия' value={234}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Нитрат аммония' value={1234}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>NH4NO3</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Сульфат магния' value={1234}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>MgSO4 · 7H2O</Text>
        </View>
      </CustomSpoiler>


      <CustomSpoiler title='Монофосфат калия' value={13}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KH2PO4</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Сульфат калия' value={9}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>K2SO4</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Нитрат магния' value={44}>
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