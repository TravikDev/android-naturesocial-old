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

  const [text, onChangeText] = useState('Useless Text');


  const [elementNH4, setElementNH4] = useState('25.0');
  const [elementNO3, setElementNO3] = useState('125.0');

  const [elementNH4divNO3, setElementNH4divNO3] = useState('0.200')

  const [elementN, setElementN] = useState('150');
  const [elementP, setElementP] = useState('50.0');
  const [elementK, setElementK] = useState('200.0');

  const [elementCa, setElementCa] = useState('150.0');
  const [elementMg, setElementMg] = useState('50.0');
  const [elementS, setElementS] = useState('200.0');


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
  const [P, setP] = useState('60')
  
  const [bufferL2, setBufferL2] = useState('')
  const [bufferM2, setBufferM2] = useState('')
  const [bufferN2, setBufferN2] = useState('')
  const [bufferP2, setBufferP2] = useState('')
  const [bufferQ2, setBufferQ2] = useState(+KMg/(+KCa+(+KMg*+KCa)+(+KMg)+(+KMg*+NCa)))
  const [bufferR2, setBufferR2] = useState('')

  console.log('bufferQ2', bufferQ2)

  const [CaNO32, setCaNO32] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '600',
    Ca: '16.972',
    NO3: '11.863',
    NH4: '0',
  })

  const [KNO3, setKNO3] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '250',
    K: '38.672',
    NO3: '13.854',
  })

  const [NH4NO3, setNH4NO3] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '100',
    NH4: '17.5',
    NO3: '17.5',
  })

  const [MgNO32, setMgNO3] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '500',
    Mg: '9.479',
    NO3: '10.925',
  })

  const [MgSO4, setMgSO4] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '600',
    Mg: '9.861',
    S: '13.01',
  })

  const [KH2PO4, setKH2PO4] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '150',
    K: '28.731',
    P: '22.761',
  })

  const [K2SO4, setK2SO4] = useState({
    gl: '',
    ppm: '',
    gr: '',
    ml: '',
    conc: '100',
    K: '44.874',
    S: '18.401',
  })

  const handleChangeN = (value: number) => {
    let part = (+elementNO3 / +elementNH4)

    const calculatedNH4divNO31 = elementNH4divNO3
    console.log(calculatedNH4divNO31)

    if (!part || !isFinite(part)) part = 1

    if (!value) value = 1

    if (elementN === '') return setElementN('1')

    console.log('value: ', value)
    console.log('part: ', part)

    // const _elementNH4divNO3 = elementNH4divNO3
    // const calculatedNH4 = value / (1+ +part)
    // console.log('value: ', value / (part+1))
    // console.log('value2: ', value - (value / (part+1)))


    let calculatedNH4 = (value / (1/+elementNH4divNO3 + 1)).toFixed(0).toString()
    console.log('1', calculatedNH4)

    let calculatedNO3 = (value - (value / +(1/+elementNH4divNO3 + 1))).toFixed(0).toString()
    console.log('2', calculatedNO3)

    if (!calculatedNH4 || isNaN(+calculatedNH4)) calculatedNH4 = (+value/(1+1/+elementNH4divNO3)).toString()
    if (!calculatedNO3 || isNaN(+calculatedNO3)) calculatedNO3 = (+calculatedNH4*(1+1/+elementNH4divNO3)).toString()
    setElementNH4(calculatedNH4)
    setElementNO3(calculatedNO3)
    // setElementNH4divNO3(_elementNH4divNO3)


    setElementN(value.toString())

    // let calculatedNH4divNO3 = (+calculatedNH4 / +calculatedNO3).toFixed(3).toString()
    // if (!calculatedNH4divNO3 || !isFinite(+calculatedNH4divNO3)) calculatedNH4divNO3 = '1'
    setElementNH4divNO3(calculatedNH4divNO31)



    // console.log((+elementNO3 / +elementNH4))
    // console.log('part: ', part)
    // console.log('calcNO3: ', calculatedNO3)

    // setElementNH4(calculatedNH4)
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