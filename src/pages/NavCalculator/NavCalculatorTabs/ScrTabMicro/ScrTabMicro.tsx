import { useMemo, useState } from "react"
import { Divider, ListItem } from "@react-native-material/core";
import { ScrollView, Text, TextInput, View } from "react-native";
import { InputElements } from "../../../../atoms/inputs/InputElements";
// import { TextInput } from "react-native-gesture-handler";
// import { InputElements } from "../../../../atoms/inputs/InputElements";
// import { InputElements } from "../../../../atoms/inputs/InputMinerals";


export const ScrTabMicro = () => {

  const [volume, setVolume] = useState('10')

  const [elementFe, setElementFe] = useState('2000');
  const [elementMn, setElementMn] = useState('550');
  const [elementB, setElementB] = useState('350');
  const [elementZn, setElementZn] = useState('330');
  const [elementCu, setElementCu] = useState('50');
  const [elementMo, setElementMo] = useState('50');
  const [elementCo, setElementCo] = useState('0');
  const [elementSi, setElementSi] = useState('0');

  const [procentFe, setProcentFe] = useState('13');
  const [procentMn, setProcentMn] = useState('36.4');
  const [procentB, setProcentB] = useState('17.5');
  const [procentZn, setProcentZn] = useState('40.5');
  const [procentCu, setProcentCu] = useState('13');
  const [procentMo, setProcentMo] = useState('0.12');
  const [procentCo, setProcentCo] = useState('0');
  const [procentSi, setProcentSi] = useState('0');

  const [Fe_concentration, setFe_concentration] = useState('11.45');
  const [Mn_concentration, setMn_concentration] = useState('5.867');
  const [B_concentration, setB_concentration] = useState('6.667');
  const [Zn_concentration, setZn_concentration] = useState('6.266');
  const [Cu_concentration, setCu_concentration] = useState('3.333');
  const [Mo_concentration, setMo_concentration] = useState('6.666');
  const [Co_concentration, setCo_concentration] = useState('0');
  const [Si_concentration, setSi_concentration] = useState('0');

  const [Fe_gl, setFe_gl] = useState((+elementFe / +procentFe / 1000 / 10).toString())
  const [Mn_gl, setMn_gl] = useState((+elementMn / +procentMn / 1000 / 10).toString())
  const [B_gl, setB_gl] = useState((+elementB / +procentB / 1000 / 10).toString())
  const [Zn_gl, setZn_gl] = useState((+elementZn / +procentZn / 1000 / 10).toString())
  const [Cu_gl, setCu_gl] = useState((+elementCu / +procentCu / 1000 / 10).toString())
  const [Mo_gl, setMo_gl] = useState((+elementMo / +procentMo / 1000 / 10).toString())
  const [Co_gl, setCo_gl] = useState((+elementCo / +procentCo / 1000 / 10).toString())
  const [Si_gl, setSi_gl] = useState((+elementSi / +procentSi / 1000 / 10).toString())

  isNaN(+Co_gl) && setCo_gl('0')
  isNaN(+Si_gl) && setSi_gl('0')

  useMemo(() => {
    setFe_gl((+elementFe / +procentFe / 1000).toString())
    setMn_gl((+elementMn / +procentMn / 1000).toString())
    setB_gl((+elementB / +procentB / 1000).toString())
    setZn_gl((+elementZn / +procentZn / 1000).toString())
    setCu_gl((+elementCu / +procentCu / 1000).toString())
    setMo_gl((+elementMo / +procentMo / 1000).toString())
    setCo_gl((+elementCo / +procentCo / 1000).toString())
    setSi_gl((+elementSi / +procentSi / 1000).toString())

    isNaN(+Co_gl) && setCo_gl('0')
    isNaN(+Si_gl) && setSi_gl('0')
  }, [
    elementFe, elementMn, elementB, elementZn, elementCu, elementMo, elementCo, elementSi,
    procentFe, procentMn, procentB, procentZn, procentCu, procentMo, procentCo, procentSi,
  ])

  const [Fe_ppm, setFe_ppm] = useState((+elementFe / +procentFe / 1000).toString())
  const [Mn_ppm, setMn_ppm] = useState((+elementMn / +procentMn / 1000).toString())
  const [B_ppm, setB_ppm] = useState((+elementB / +procentB / 1000).toString())
  const [Zn_ppm, setZn_ppm] = useState((+elementZn / +procentZn / 1000).toString())
  const [Cu_ppm, setCu_ppm] = useState((+elementCu / +procentCu / 1000).toString())
  const [Mo_ppm, setMo_ppm] = useState((+elementMo / +procentMo / 1000).toString())
  const [Co_ppm, setCo_ppm] = useState((+elementCo / +procentCo / 1000).toString())
  const [Si_ppm, setSi_ppm] = useState((+elementSi / +procentSi / 1000).toString())

  const [Fe_grams, setFe_grams] = useState((+Fe_gl * +volume).toString())
  const [Mn_grams, setMn_grams] = useState((+Mn_gl * +volume).toString())
  const [B_grams, setB_grams] = useState((+B_gl * +volume).toString())
  const [Zn_grams, setZn_grams] = useState((+Zn_gl * +volume).toString())
  const [Cu_grams, setCu_grams] = useState((+Cu_gl * +volume).toString())
  const [Mo_grams, setMo_grams] = useState((+Mo_gl * +volume).toString())
  const [Co_grams, setCo_grams] = useState((+Co_gl * +volume).toString())
  const [Si_grams, setSi_grams] = useState((+Si_gl * +volume).toString())

  useMemo(() => {
    setFe_grams((+Fe_gl * +volume).toString())
    setMn_grams((+Mn_gl * +volume).toString())
    setB_grams((+B_gl * +volume).toString())
    setZn_grams((+Zn_gl * +volume).toString())
    setCu_grams((+Cu_gl * +volume).toString())
    setMo_grams((+Mo_gl * +volume).toString())
    setCo_grams((+Co_gl * +volume).toString())
    setSi_grams((+Si_gl * +volume).toString())
  }, [Fe_gl, Mn_gl, B_gl, Zn_gl, Cu_gl, Mo_gl, Co_gl, Si_gl, volume])

  const [summaryGrams, setSummaryGrams] = useState(((+Fe_grams) + (+Mn_grams) + (+B_grams) + (+Zn_grams) + (+Cu_grams) + (+Mo_grams) + (+Co_grams) + (+Si_grams)).toString())

  useMemo(() => {
    setSummaryGrams(((+Fe_grams) + (+Mn_grams) + (+B_grams) + (+Zn_grams) + (+Cu_grams) + (+Mo_grams) + (+Co_grams) + (+Si_grams)).toString())
  }, [Fe_grams, Mn_grams, B_grams, Zn_grams, Cu_grams, Mo_grams, Co_grams, Si_grams])

  const [Fe_mL, setFe_mL] = useState((+Fe_grams / +Fe_concentration * 1000).toString())
  const [Mn_mL, setMn_mL] = useState((+Mn_grams / +Mn_concentration * 1000).toString())
  const [B_mL, setB_mL] = useState((+B_grams / +B_concentration * 1000).toString())
  const [Zn_mL, setZn_mL] = useState((+Zn_grams / +Zn_concentration * 1000).toString())
  const [Cu_mL, setCu_mL] = useState((+Cu_grams / +Cu_concentration * 1000).toString())
  const [Mo_mL, setMo_mL] = useState((+Mo_grams / +Mo_concentration * 1000).toString())
  const [Co_mL, setCo_mL] = useState((+Co_grams / +Co_concentration * 1000).toString())
  const [Si_mL, setSi_mL] = useState((+Si_grams / +Si_concentration * 1000).toString())

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10, gap: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
            Микропрофиль
          </Text>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
              мкг / литр
            </Text>
          </View>
        </View>

        <Divider style={{ marginBottom: 4 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <InputElements element="Fe" number={elementFe} onChange={setElementFe} />
            <InputElements element="Zn" number={elementZn} onChange={setElementZn} />
            <InputElements element="Co" number={elementCo} onChange={setElementCo} />
            {/* <InputElements element="NH4" divider="NO3" number={} onChange={() => {}} inputTextColor="#119911" /> */}
          </View>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <InputElements element="Mn" number={elementMn} onChange={setElementMn} />
            <InputElements element="Cu" number={elementCu} onChange={setElementCu} />
            <InputElements element="Si" number={elementSi} onChange={setElementSi} />

          </View>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <InputElements element="B" number={elementB} onChange={setElementB} />
            <InputElements element="Mo" number={elementMo} onChange={setElementMo} />
            {/* <InputElements element="Mg" number={(+resultMg).toFixed(1).toString()} onChange={handleChangeMg} inputTextColor="#119911" /> */}
            {/* <InputElements element="EC" number={(+EC).toFixed(3).toString()} onChange={(val) => { onChangeResultEC(val) }} inputTextColor="#119911" /> */}
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>Состав солей</Text>

          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ width: 72, alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>%</Text>
            </View>
            <View style={{ width: 72, alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>граммы</Text>
            </View>
          </View>
        </View>

        <Divider style={{ marginBottom: 4 }} />

        <View style={{ gap: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Железо</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput
                  style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }}
                  value={procentFe}
                  onChangeText={setProcentFe} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput
                  style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }}
                  value={(+Fe_grams).toFixed(3)} onChangeText={() => { }}
                />
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Марганец</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentMn} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+Mn_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Бор</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentB} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+B_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Цинк</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentZn} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+Zn_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Медь</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentCu} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+Cu_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Молибден</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentMo} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+Mo_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Кобальт</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentCo} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+Co_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: '#111' }}>Кремний</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={procentSi} onChangeText={() => { }} />
              </View>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+Si_grams).toFixed(3)} onChangeText={() => { }} />
              </View>
            </View>
          </View>

          <Divider style={{}} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>Итого:</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 4, paddingHorizontal: 8, width: 72 }}>
                <TextInput style={{ paddingVertical: 0, color: "#111", fontSize: 16, fontWeight: '300' }} value={(+summaryGrams).toFixed(3).toString()} onChangeText={() => { }} />
              </View>
            </View>
          </View>


        </View>

      </ScrollView>

    </View>
  );
}