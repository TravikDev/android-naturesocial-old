import { useCallback, useEffect, useMemo, useState } from "react"
import { Divider, Icon, IconButton, ListItem } from "@react-native-material/core";
import { Dimensions, StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ElementsRatiosTable } from "../../../../atoms/inputs/ElementsRatios";
import { CustomSpoiler } from "../../../../atoms/Spoilers/CustomSpoiler";
import { InputElements } from "../../../../atoms/inputs/InputElements";

const srcWidth = Dimensions.get('window').width

/* @ts-ignore */
export const ScrTabMacro = () => {

  //// A13
  const [volume, setVolume] = useState('10')

  //// B4 - J4
  const [elementNO3, setElementNO3] = useState('209');
  const [elementNH4, setElementNH4] = useState('14');
  const [elementN, setElementN] = useState((+elementNH4 + +elementNO3).toString());
  const [elementP, setElementP] = useState('60');
  const [elementK, setElementK] = useState('151');
  const [elementCa, setElementCa] = useState('248');
  const [elementMg, setElementMg] = useState('22');
  const [elementS, setElementS] = useState('35');
  const [elementCl, setElementCl] = useState('0');

  useMemo(() => {
    setElementN((+elementNH4 + +elementNO3).toString());
  }, [elementNH4, elementNO3])


  //// L4 - R4

  const [bufferEC, setBufferEC] = useState((
    6.78246839012758 * 10 ** -3 * +elementNH4 +
    4.74075552672289 * 10 ** -3 * +elementCa +
    7.81732153877802 * 10 ** -3 * +elementMg +
    2.42977316149295 * 10 ** -3 * +elementK + 0.19
  )
    
    .toString())
  const [bufferKMg, setBufferKMg] = useState((+elementK / +elementMg)
    
    .toString())
  const [bufferKCa, setBufferKCa] = useState((+elementK / +elementCa)
    
    .toString())
  const [bufferNCa, setbufferNCa] = useState((+elementN / +elementCa)
    
    .toString())
  const [bufferNH4NO3, setbufferNH4NO3] = useState((+elementNH4 / +elementNO3)
    
    .toString())

  useMemo(() => {

    setBufferEC((
      6.78246839012758 * 10 ** -3 * +elementNH4 +
      4.74075552672289 * 10 ** -3 * +elementCa +
      7.81732153877802 * 10 ** -3 * +elementMg +
      2.42977316149295 * 10 ** -3 * +elementK + 0.19
    ).toString())

    setBufferKMg((+elementK / +elementMg).toString())

    setBufferKCa((+elementK / +elementCa).toString())

    setbufferNCa((+elementN / +elementCa).toString())

    setbufferNH4NO3((+elementNH4 / +elementNO3).toString())

  }, [elementN, elementNH4, elementNO3, elementCa, elementMg, elementK])

  // console.log(console.log('bufferEC: ', bufferEC, ', bufferKMg: ', bufferKMg, ', bufferKCa: ', bufferKCa, ', bufferNCa: ', bufferNCa, ', bufferNH4NO3: ', bufferNH4NO3))

  //// L5 - R5

  const [EC, setEC] = useState(bufferEC)
  const [KMg, setKMg] = useState(bufferKMg)
  const [KCa, setKCa] = useState(bufferKCa)
  const [NCa, setNCa] = useState(bufferNCa)
  const [NH4dNO3, setNH4dNO3] = useState(bufferNH4NO3)

  useMemo(() => {

    setEC(bufferEC)
    setKMg(bufferKMg)
    setKCa(bufferKCa)
    setNCa(bufferNCa)
    setNH4dNO3(bufferNH4NO3)

  }, [bufferEC, bufferKMg, bufferKCa, bufferNCa, bufferNH4NO3])

  // console.log('EC: ', EC, 'KMg: ', KMg, 'KCa: ', KCa, 'NCa', NCa, 'NH4dNO3', NH4dNO3)

  //// L2 - R2

  // const bufferL2_formula = 
  const [bufferL2, setBufferL2] = useState(((+NCa * +KMg) / (+KCa + (+KMg) * +KCa + (+KMg) + (+KMg) * +NCa)).toString())

  // const bufferM2_formula = 
  const [bufferM2, setBufferM2] = useState((+bufferL2 / (1 + (+NH4dNO3))).toString())

  // const bufferN2_formula = 
  const [bufferN2, setBufferN2] = useState((+bufferL2 * (+NH4dNO3) / (1 + (+NH4dNO3))).toString())

  // const bufferP2_formula = 
  const [bufferP2, setBufferP2] = useState(((+KCa * +KMg) / (+KCa + ((+KMg) * (+KCa)) + (+KMg) + ((+KMg) * +NCa))).toString())

  // const bufferQ2_formula = 
  const [bufferQ2, setBufferQ2] = useState((+KMg / (+KCa + (+KMg * +KCa) + (+KMg) + (+KMg * +NCa))).toString())

  // const bufferR2_formula = 
  const [bufferR2, setBufferR2] = useState((+KCa / (+KCa + (+KMg) * +KCa + (+KMg) + (+KMg) * +NCa)).toString())

  useMemo(() => {

    setBufferL2(((+NCa * +KMg) / (+KCa + (+KMg) * +KCa + (+KMg) + (+KMg) * +NCa)).toString())

    setBufferM2((+bufferL2 / (1 + (+NH4dNO3))).toString())

    setBufferN2((+bufferL2 * (+NH4dNO3) / (1 + (+NH4dNO3))).toString())

    setBufferP2(((+KCa * +KMg) / (+KCa + ((+KMg) * (+KCa)) + (+KMg) + ((+KMg) * +NCa))).toString())

    setBufferQ2((+KMg / (+KCa + (+KMg * +KCa) + (+KMg) + (+KMg * +NCa))).toString())

    setBufferR2((+KCa / (+KCa + (+KMg) * +KCa + (+KMg) + (+KMg) * +NCa)).toString())

  }, [NCa, KMg, KCa, NH4dNO3, bufferL2])

  // console.log('bufferL2: ', bufferL2, 'bufferM2: ', bufferM2, 'bufferN2: ', bufferN2, 'bufferP2: ', bufferP2, 'bufferQ2: ', bufferQ2, 'bufferR2: ', bufferR2)

  //// L6

  // const bufferL6_formula = 
  const [bufferL6, setBufferL6] = useState((
    (10 ** 20) * (-19 + 100 * +bufferEC) /
    (
      67824683901275800000 * +bufferN2 +
      47407555267228900000 * +bufferQ2 +
      78173215387780200000 * +bufferR2 +
      24297731614929500000 * +bufferP2
    )).toString())

  useMemo(() => {
    setBufferL6((
      (10 ** 20) * (-19 + 100 * +bufferEC) /
      (
        67824683901275800000 * +bufferN2 +
        47407555267228900000 * +bufferQ2 +
        78173215387780200000 * +bufferR2 +
        24297731614929500000 * +bufferP2
      )).toString())
  }, [bufferEC, bufferN2, bufferR2, bufferP2])

  // console.log('bufferL6: ', bufferL6)

  //// B5 - J5

  // NO3 calculated
  const [NO3, setNO3] = useState((+bufferM2 * +bufferL6).toString())

  // NH4 calculated
  const [NH4, setNH4] = useState((+bufferN2 * +bufferL6).toString())

  // NH4 calculated  
  const [N, setN] = useState((+NO3 + (+NH4)).toString())

  // P calculated
  const [P, setP] = useState(elementP)

  // K calculated
  const [K, setK] = useState((+bufferP2 * +bufferL6).toString())

  // Ca calculated
  const [Ca, setCa] = useState((+bufferQ2 * +bufferL6).toString())

  // Mg calculated
  const [Mg, setMg] = useState((+bufferR2 * +bufferL6).toString())

  const [S, setS] = useState('0')
  const [Cl, setCl] = useState('0')

  useMemo(() => {

    setNO3((+bufferM2 * +bufferL6).toString())

    setNH4((+bufferN2 * +bufferL6).toString())

    setN((+NO3 + (+NH4)).toString())

    setP(elementP)

    setK((+bufferP2 * +bufferL6).toString())

    setCa((+bufferQ2 * +bufferL6).toString())

    setMg((+bufferR2 * +bufferL6).toString())

    setS('0')
    setCl('0')

  }, [
    bufferM2, bufferL6, elementP, bufferP2, bufferQ2, bufferR2, NO3, NH4
  ])


  //// L6 - R6

  // NO3 buffer
  const [bufferNO3, setBufferM6] = useState(NO3)
  // NH4 buffer
  const [bufferNH4, setBufferN6] = useState(NH4)
  // P buffer
  const [bufferP, setBufferO6] = useState(P)
  // K buffer
  const [bufferK, setBufferP6] = useState(K)
  // Ca buffer
  const [bufferCa, setBufferQ6] = useState(Ca)
  // Mg buffer
  const [bufferMg, setBufferR6] = useState(Mg)

  useMemo(() => {
    setBufferM6(NO3)
    setBufferN6(NH4)
    setBufferO6(P)
    setBufferP6(K)
    setBufferQ6(Ca)
    setBufferR6(Mg)
  }, [NO3, NH4, P, K, Ca, Mg])

  //// A20 - R20

  // CaNO32 Ca_percent
  const [CaNO32_Ca_percent, setCaNO32_Ca_percent] = useState('16.972')
  // CaNO32 NO3_percent
  const [CaNO32_NO3_percent, setCaNO32_NO3_percent] = useState('11.863')
  // CaNO32 NO3_percent
  const [CaNO32_NH4_percent, setCaNO32_NH4_percent] = useState('0')
  // CaNO32_concentration
  const [CaNO32_concentration, setCaNO32_concentration] = useState('656.7')

  // const CaNO32_ppm_formula = 
  const [CaNO32_ppm, setCaNO32_ppm] = useState((+bufferCa / (+CaNO32_Ca_percent * 0.01)).toString())

  // const CaNO32_density_formula = 
  const [CaNO32_density, setCaNO32_density] = useState((+CaNO32_ppm / 1000).toString())

  // const CaNO32_grams_formula =
  const [CaNO32_grams, setCaNO32_grams] = useState((+CaNO32_density * +volume).toString())

  // const CaNO32_mL_formula = 
  const [CaNO32_mL, setCaNO32_mL] = useState((+CaNO32_grams / +CaNO32_concentration * 1000).toString())

  useMemo(() => {

    setCaNO32_ppm((+bufferCa / (+CaNO32_Ca_percent * 0.01)).toString())
    setCaNO32_density((+CaNO32_ppm / 1000).toString())
    setCaNO32_grams((+CaNO32_density * +volume).toString())
    setCaNO32_mL((+CaNO32_grams / +CaNO32_concentration * 1000).toString())

    console.log('memo Ca - worked')
  }, [
    bufferCa, CaNO32_Ca_percent, CaNO32_ppm, CaNO32_density, CaNO32_grams, CaNO32_concentration, volume
  ])

  //// A21 - R21

  // NH4NO3 NH4_percent
  const [NH4NO3_NH4_percent, setNH4NO3_NH4_percent] = useState('17.5')
  // NH4NO3 NO3_percent
  const [NH4NO3_NO3_percent, setNH4NO3_NO3_percent] = useState('17.5')
  // NH4NO3_concentration
  const [NH4NO3_concentration, setNH4NO3_concentration] = useState('468.5')

  // const NH4NO3_ppm_formula = 
  const [NH4NO3_ppm, setNH4NO3_ppm] = useState((((+bufferNH4 * +CaNO32_Ca_percent / 100) - (+bufferCa * +CaNO32_NH4_percent * 0.01)) / (+NH4NO3_NH4_percent / 100 * +CaNO32_Ca_percent / 100)).toString())

  // const NH4NO3_density_formula = 
  const [NH4NO3_density, setNH4NO3_density] = useState((+NH4NO3_ppm / 1000).toString())

  // const NH4NO3_grams_formula = 
  const [NH4NO3_grams, setNH4NO3_grams] = useState((+NH4NO3_density * +volume).toString())

  // const NH4NO3_mL_formula = 
  const [NH4NO3_mL, setNH4NO3_mL] = useState((+NH4NO3_grams / +NH4NO3_concentration * 1000).toString())

  useMemo(() => {
    // NH4NO3 ppm
    setNH4NO3_ppm((((+bufferNH4 * +CaNO32_Ca_percent / 100) - (+bufferCa * +CaNO32_NH4_percent * 0.01)) / (+NH4NO3_NH4_percent / 100 * +CaNO32_Ca_percent / 100)).toString())
    // NH4NO3 density
    setNH4NO3_density((+NH4NO3_ppm / 1000).toString())
    // NH4NO3 grams
    setNH4NO3_grams((+NH4NO3_density * +volume).toString())
    // NH4NO3 mL
    setNH4NO3_mL((+NH4NO3_grams / +NH4NO3_concentration * 1000).toString())

    console.log('memo NH4NO3 - worked')
  }, [
    NH4NO3_NH4_percent, NH4NO3_concentration, NH4NO3_ppm, NH4NO3_density, NH4NO3_grams,
    CaNO32_Ca_percent, CaNO32_NH4_percent,
    bufferNH4, bufferCa,
    volume
  ])


  //// A18 - R18

  // KNO3 Ca_percent
  const [KNO3_K_percent, setKNO3_K_percent] = useState('38.672')
  // KNO3 NO3_percent
  const [KNO3_NO3_percent, setKNO3_NO3_percent] = useState('13.854')
  // KNO3_concentration
  const [KNO3_concentration, setKNO3_concentration] = useState('200.8')

  // const KNO3_ppm_formula = 
  const [KNO3_ppm, setKNO3_ppm] = useState((-(((+NH4NO3_NO3_percent / 100 * +bufferNH4 * +CaNO32_Ca_percent / 100) - (+NH4NO3_NO3_percent / 100 * +bufferCa * +CaNO32_NH4_percent / 100) - (+bufferNO3 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (+bufferCa * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100))).toString())

  console.log('KNO3_ppm: ',KNO3_ppm)

  // const KNO3_density_formula = 
  const [KNO3_density, setKNO3_density] = useState((+KNO3_ppm / 1000).toString())

  console.log('KNO3_density: ',KNO3_density)

  // const KNO3_grams_formula = 
  const [KNO3_grams, setKNO3_grams] = useState((+KNO3_density * +volume).toString())

  console.log('KNO3_grams: ',KNO3_grams)

  // const KNO3_mL_formula = 
  const [KNO3_mL, setKNO3_mL] = useState((+KNO3_grams / +KNO3_concentration * 1000).toString())

  console.log('KNO3_mL: ',KNO3_mL)

  useMemo(() => {
    // KNO3 ppm
    setKNO3_ppm((-(((+NH4NO3_NO3_percent / 100 * +bufferNH4 * +CaNO32_Ca_percent / 100) - (+NH4NO3_NO3_percent / 100 * +bufferCa * +CaNO32_NH4_percent / 100) - (+bufferNO3 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (+bufferCa * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100))).toString())
    // KNO3 density
    setKNO3_density((+KNO3_ppm / 1000).toString())
    // KNO3 grams
    setKNO3_grams((+KNO3_density * +volume).toString())
    // KNO3 mL
    setKNO3_mL((+KNO3_grams / +KNO3_concentration * 1000).toString())

    console.log('memo KNO3 - worked')
  }, [
    NH4NO3_NO3_percent, CaNO32_Ca_percent, NH4NO3_NH4_percent, CaNO32_NH4_percent, CaNO32_NO3_percent, KNO3_NO3_percent, KNO3_concentration, KNO3_ppm, KNO3_density, KNO3_grams,
    bufferNO3, bufferNH4, bufferCa,
    volume
  ])


  //// A16 - R16

  // MgS Ca_percent
  const [MgS_Mg_percent, setMgS_Mg_percent] = useState('9.861')
  // MgS NO3_percent
  const [MgS_S_percent, setMgS_S_percent] = useState('13.01')
  // MgS_concentration
  const [MgS_concentration, setMgS_concentration] = useState('284.6')

  const [MgS_ppm, setMgS_ppm] = useState((+bufferMg / +MgS_Mg_percent * 100).toString())

  const [MgS_density, setMgS_density] = useState((+MgS_ppm / 1000).toString())

  const [MgS_grams, setMgS_grams] = useState((+MgS_density * +volume).toString())

  const [MgS_mL, setMgS_mL] = useState((+MgS_grams / +MgS_concentration * 1000).toString())

  useMemo(() => {

    setMgS_ppm((+bufferMg / +MgS_Mg_percent * 100).toString())
    setMgS_density((+MgS_ppm / 1000).toString())
    setMgS_grams((+MgS_density * +volume).toString())
    setMgS_mL((+MgS_grams / +MgS_concentration * 1000).toString())

    console.log('memo Mg - worked')
  }, [
    MgS_Mg_percent, MgS_concentration, MgS_grams, MgS_ppm, MgS_density, bufferMg, volume
  ])


  //// A19 - R19

  // KH2PO4 Ca_percent
  const [KH2PO4_K_percent, setKH2PO4_K_percent] = useState('28.731')
  // KH2PO4 NO3_percent
  const [KH2PO4_P_percent, setKH2PO4_P_percent] = useState('22.761')
  // KH2PO4_concentration
  const [KH2PO4_concentration, setKH2PO4_concentration] = useState('140.9')

  const [KH2PO4_ppm, setKH2PO4_ppm] = useState((+bufferP / +KH2PO4_P_percent * 100).toString())

  const [KH2PO4_density, setKH2PO4_density] = useState((+KH2PO4_ppm / 1000).toString())

  const [KH2PO4_grams, setKH2PO4_grams] = useState((+KH2PO4_density * +volume).toString())

  const [KH2PO4_mL, setKH2PO4_mL] = useState((+KH2PO4_grams / +KH2PO4_concentration * 1000).toString())

  useMemo(() => {

    setKH2PO4_ppm((+bufferP / +KH2PO4_P_percent * 100).toString())
    setKH2PO4_density((+KH2PO4_ppm / 1000).toString())
    setKH2PO4_grams((+KH2PO4_density * +volume).toString())
    setKH2PO4_mL((+KH2PO4_grams / +KH2PO4_concentration * 1000).toString())

    console.log('memo khpo - worked')
  }, [
    KH2PO4_P_percent, KH2PO4_concentration, KH2PO4_ppm, KH2PO4_density, KH2PO4_grams, bufferP, volume
  ])

  //// A17 - R17

  // K2SO4 Ca_percent
  const [K2SO4_K_percent, setK2SO4_Mg_percent] = useState('44.874')
  // K2SO4 NO3_percent
  const [K2SO4_S_percent, setK2SO4_S_percent] = useState('18.4')
  // K2SO4_concentration
  const [K2SO4_concentration, setK2SO4_concentration] = useState('168')

  // const K2SO4_ppm_formula =
  const [K2SO4_ppm, setK2SO4_ppm] = useState((((+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +NH4NO3_NO3_percent / 100 * +bufferNH4 * +CaNO32_Ca_percent / 100) - (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +NH4NO3_NO3_percent / 100 * +bufferCa * +CaNO32_NH4_percent / 100) - (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +bufferNO3 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +bufferCa * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100) + (+bufferK * +KH2PO4_P_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) - (+bufferP * +KH2PO4_K_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+K2SO4_K_percent / 100 * +KH2PO4_P_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)).toString())

  // const K2SO4_density_formula = 
  const [K2SO4_density, setK2SO4_density] = useState((+K2SO4_ppm / 1000).toString())

  // const K2SO4_grams_formula = 
  const [K2SO4_grams, setK2SO4_grams] = useState((+K2SO4_density * +volume).toString())

  // const K2SO4_mL_formula = 
  const [K2SO4_mL, setK2SO4_mL] = useState((+K2SO4_grams / +K2SO4_concentration * 1000).toString())

  useMemo(() => {
    // K2SO4 ppm
    setK2SO4_ppm((
      (
        (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +NH4NO3_NO3_percent / 100 * +bufferNH4 * +CaNO32_Ca_percent / 100) -
        (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +NH4NO3_NO3_percent / 100 * +bufferCa * +CaNO32_NH4_percent / 100) -
        (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +bufferNO3 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) +
        (+KNO3_K_percent / 100 * +KH2PO4_P_percent / 100 * +bufferCa * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100) +
        (+bufferK * +KH2PO4_P_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) -
        (+bufferP * +KH2PO4_K_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)
      ) /
      (+K2SO4_K_percent / 100 * +KH2PO4_P_percent / 100 * +KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100)
    ).toString())
    setK2SO4_density((+K2SO4_ppm / 1000).toString())
    setK2SO4_grams((+K2SO4_density * +volume).toString())
    setK2SO4_mL((+K2SO4_grams / +K2SO4_concentration * 1000).toString())

    console.log('memo K2SO4 - worked')
  }, [
    KNO3_K_percent, KNO3_NO3_percent,
    CaNO32_Ca_percent, CaNO32_NH4_percent, CaNO32_NO3_percent,
    NH4NO3_NO3_percent, NH4NO3_NH4_percent,
    KH2PO4_P_percent, KH2PO4_K_percent,
    K2SO4_K_percent, K2SO4_ppm, K2SO4_density, K2SO4_grams, K2SO4_concentration,
    bufferCa, bufferNH4, bufferNO3, bufferK, bufferP, volume
  ])


  const handleChangeNH4dNO3 = (value: string) => {

    console.log('val', value)
    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = ''
    // console.log(value)
    const calculatedNH4 = (+N * ((+value * 100 + 1) / 100)).toString()
    const calculatedNO3 = (+N - +calculatedNH4).toString()

    // console.log('works/?')
    // setElementN(result)
    // setN(result)
    const sum = (+elementN - +result).toString()

    setNH4(calculatedNH4)
    setNO3(calculatedNO3)

    setNH4dNO3(bufferNH4NO3)

    setNH4dNO3(result)

  }

  const handleChangeN = (value: string) => {

    console.log(value)
    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'


    // setElementNO3((+bufferM2*+bufferL6).toString())
    // setNO3((+bufferM2*+bufferL6).toString())

    // setElementNH4((+bufferN2*+bufferL6).toString())
    // setNH4((+bufferN2*+bufferL6).toString())

    console.log('n 1', N)
    setElementN(value)
    // setN(value)
    console.log('n 2', N)

  }

  const handleChangeNO3 = (value: string) => {

    console.log(value)
    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // console.log(value)
    setElementNO3(result)
    setNO3(result)
    const sum = (+elementN - +result).toString()
    setNH4(sum)

    // return 0
    // const calculatedNO3 = (+elementN - (+value)).toString()
    // setElementNO3(calculatedNO3)
    // let calculatedNH4divNO3 = (+value / +calculatedNO3).toString()
    // if (!calculatedNH4divNO3 || !isFinite(+calculatedNH4divNO3)) calculatedNH4divNO3 = '1'
    // setElementNH4divNO3(calculatedNH4divNO3)
  }

  const handleChangeNH4 = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // console.log(value)
    setElementNH4(value.toString())
    setNH4(value.toString())
    const calculatedNO3 = (+elementN - (+result)).toString()
    setNO3(calculatedNO3)
    // let calculatedNH4divNO3 = (+value / +calculatedNO3).toString()
    // if (!calculatedNH4divNO3 || !isFinite(+calculatedNH4divNO3)) calculatedNH4divNO3 = '1'
    setNO3(calculatedNO3)

    // setElementNH4divNO3(calculatedNH4divNO3)

  }

  const handleChangeCa = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // console.log(value)
    setElementCa(value.toString())
    setCa(value.toString())
    setBufferQ6(value.toString())

  }

  const handleChangeK = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // console.log(value)
    setElementK(value.toString())
    setK(value.toString())
    setBufferP6(value.toString())

  }

  const handleChangeMg = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // console.log(value)
    setElementMg(value.toString())
    setMg(value.toString())
    setBufferR6(value.toString())

  }


  // const handleChangeCustom = (value: string) => {
  //   setbufferKMg(value)
  //   setKMg(value)

  //   console.log(bufferKMg)

  //   // useEffect(() => { setbufferKMg(value) }, [KMg])
  // }

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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <InputElements element="N" number={(+N).toFixed(1).toString()} onChange={handleChangeN} />
          <InputElements element="NO₃" number={(+NO3).toFixed(1).toString()} onChange={handleChangeNO3} />
          <InputElements element="NH₄" number={(+NH4).toFixed(1).toString()} onChange={handleChangeNH4} />
          <InputElements element="NH4" divider="NO3" number={(+NH4dNO3).toFixed(3).toString()} onChange={handleChangeNH4dNO3} />
        </View>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <InputElements element="P" number={(+P).toFixed(1).toString()} onChange={setP} />
          <InputElements element="S" number={(+S).toFixed(1).toString()} onChange={setS} />
          <InputElements element="Cl" number={(+Cl).toFixed(1).toString()} onChange={setCl} />

        </View>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <InputElements element="K" number={(+K).toFixed(1).toString()} onChange={handleChangeK} />
          <InputElements element="Ca" number={(+Ca).toFixed(1).toString()} onChange={handleChangeCa} />
          <InputElements element="Mg" number={(+Mg).toFixed(1).toString()} onChange={handleChangeMg} />
          <InputElements element="EC" number={(+EC).toFixed(3).toString()} onChange={setEC} />
        </View>
      </View>
      {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'flex-end' }}>
        
      </View> */}

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
          Матрица соотношений
        </Text>
        <View>
          <Icon name='error-outline' color='#666' size={22} />
        </View>
      </View>

      <Divider style={{ marginBottom: 4 }} />

      {/* <TextInput value={volume} onChangeText={setVolume} placeholder="custom" /> */}

      {/* <TextInput value={bufferKMg} onChangeText={handleChangeCustom} placeholder="custom" /> */}

      {/* <InputElements element="NH₄" divider="NO₃" number={elementNH4divNO3.toString()} onChange={setElementNH4divNO3} /><Text style={{ color: '#111' }}>NH4 : NO3 - 1 : {(1 / +elementNH4divNO3)}</Text> */}

      {/* <TextInput style={{ color: '#111' }} value={volume} onChangeText={setVolume} />
      <TextInput style={{ color: '#111' }} value={NH4dNO3} onChangeText={handleChangeNH4dNO3} /> */}

      <CustomSpoiler title='what' value={1} >
        <ElementsRatiosTable />
      </CustomSpoiler>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>
          Составы солей
        </Text>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111', top: 0 }}>граммы</Text>
        </View>
      </View>

      <Divider style={{ marginBottom: 4 }} />


      <CustomSpoiler title='Нитрат кальция' value={(+CaNO32_grams).toFixed(2).toString()}>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>Ca(NO3)2 · 4H2O</Text>
          <TextInput style={{ color: '#111' }} inputMode="numeric" value={CaNO32_Ca_percent} onChangeText={setCaNO32_Ca_percent} />
          <TextInput style={{ color: '#111' }} inputMode="numeric" value={CaNO32_NH4_percent} onChangeText={setCaNO32_NH4_percent} />
          <TextInput style={{ color: '#111' }} inputMode="numeric" value={CaNO32_NO3_percent} onChangeText={setCaNO32_NO3_percent} />
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Нитрат калия' value={(+KNO3_grams).toFixed(2).toString()}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Нитрат аммония' value={(+NH4NO3_grams).toFixed(2).toString()}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>NH4NO3</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Сульфат магния' value={(+MgS_grams).toFixed(2).toString()}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>MgSO4 · 7H2O</Text>
        </View>
      </CustomSpoiler>


      <CustomSpoiler title='Монофосфат калия' value={(+KH2PO4_grams).toFixed(2).toString()}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KH2PO4</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Сульфат калия' value={(+K2SO4_grams).toFixed(2).toString()}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>K2SO4</Text>
        </View>
      </CustomSpoiler>

      <CustomSpoiler title='Нитрат магния' value={0}>
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