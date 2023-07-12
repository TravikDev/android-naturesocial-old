import { useCallback, useEffect, useMemo, useState } from "react"
import { Divider, Icon, IconButton, ListItem, Pressable } from "@react-native-material/core";
import { Dimensions, StyleSheet, Text, View, TextInput, Switch, TouchableHighlight, TouchableOpacity, Modal, Alert, TouchableWithoutFeedback, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ElementsRatiosTable } from "../../../../atoms/inputs/ElementsRatios";
import { CustomSpoiler } from "../../../../atoms/Spoilers/CustomSpoiler";
import { InputElements } from "../../../../atoms/inputs/InputElements";
import { ButtonIconCircle } from "../../../../atoms/Buttons/ButtonIconCircle";

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

  // // console.log('elementNO3: ', elementNO3, 'elementNH4: ', elementNH4, 'elementN: ', elementN, 'elementP: ', elementP, 'elementK: ', elementK, 'elementCa: ', elementCa, 'elementMg: ', elementMg)


  //// L4 - R4

  const [resultEC, setResultEC] = useState((
    6.78246839012758 * 10 ** -3 * +elementNH4 +
    4.74075552672289 * 10 ** -3 * +elementCa +
    7.81732153877802 * 10 ** -3 * +elementMg +
    2.42977316149295 * 10 ** -3 * +elementK + 0.19
  ).toString())
  const [resultKMg, setResultKMg] = useState((+elementK / +elementMg).toString())
  const [resultKCa, setResultKCa] = useState((+elementK / +elementCa).toString())
  const [resultNCa, setResultNCa] = useState((+elementN / +elementCa).toString())
  const [resultNH4NO3, setResultNH4NO3] = useState((+elementNH4 / +elementNO3).toString())

  useMemo(() => {

    setResultEC((
      6.78246839012758 * 10 ** -3 * +elementNH4 +
      4.74075552672289 * 10 ** -3 * +elementCa +
      7.81732153877802 * 10 ** -3 * +elementMg +
      2.42977316149295 * 10 ** -3 * +elementK + 0.19
    ).toString())

    setResultKMg((+elementK / +elementMg).toString())
    setResultKCa((+elementK / +elementCa).toString())
    setResultNCa((+elementN / +elementCa).toString())
    setResultNH4NO3((+elementNH4 / +elementNO3).toString())

  }, [elementN, elementNH4, elementNO3, elementCa, elementMg, elementK])

  // // console.log('resultEC: ', resultEC, 'resultKMg: ', resultKMg, 'resultKCa: ', resultKCa, 'resultNCa: ', resultNCa, 'resultNH4NO3: ', resultNH4NO3)

  // // console.log(// console.log('resultEC: ', resultEC, ', resultKMg: ', resultKMg, ', resultKCa: ', resultKCa, ', resultNCa: ', resultNCa, ', resultNH4NO3: ', resultNH4NO3))

  //// L5 - R5

  const [EC, setEC] = useState(resultEC)
  const [KMg, setKMg] = useState(resultKMg)
  const [KCa, setKCa] = useState(resultKCa)
  const [NCa, setNCa] = useState(resultNCa)
  const [NH4dNO3, setNH4dNO3] = useState(resultNH4NO3)

  useMemo(() => {

    setEC(resultEC)
    setKMg(resultKMg)
    setKCa(resultKCa)
    setNCa(resultNCa)
    setNH4dNO3(resultNH4NO3)

  }, [resultEC, resultKMg, resultKCa, resultNCa, resultNH4NO3])

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

  // // console.log('bufferL2: ', bufferL2, 'bufferM2: ', bufferM2, 'bufferN2: ', bufferN2, 'bufferP2: ', bufferP2, 'bufferQ2: ', bufferQ2, 'bufferR2: ', bufferR2)

  //// L6

  // const bufferL6_formula = 
  const [bufferL6, setBufferL6] = useState((
    (10 ** 20) * (-19 + 100 * +resultEC) /
    (
      67824683901275800000 * +bufferN2 +
      47407555267228900000 * +bufferQ2 +
      78173215387780200000 * +bufferR2 +
      24297731614929500000 * +bufferP2
    )).toString())

  useMemo(() => {
    setBufferL6((
      (10 ** 20) * (-19 + 100 * +resultEC) /
      (
        67824683901275800000 * +bufferN2 +
        47407555267228900000 * +bufferQ2 +
        78173215387780200000 * +bufferR2 +
        24297731614929500000 * +bufferP2
      )).toString())
  }, [resultEC, bufferN2, bufferR2, bufferP2])

  // // console.log('bufferL6: ', bufferL6)

  //// B5 - J5

  const [resultNO3, setResultNO3] = useState((+bufferM2 * +bufferL6).toString())

  const [resultNH4, setResultNH4] = useState((+bufferN2 * +bufferL6).toString())

  const [resultN, setResultN] = useState((+resultNO3 + (+resultNH4)).toString())

  const [resultP, setResultP] = useState(elementP)

  const [resultK, setResultK] = useState((+bufferP2 * +bufferL6).toString())

  const [resultCa, setResultCa] = useState((+bufferQ2 * +bufferL6).toString())

  const [resultMg, setResultMg] = useState((+bufferR2 * +bufferL6).toString())

  const [resultCl, setResultCl] = useState('0')

  useMemo(() => {

    setResultNO3((+bufferM2 * +bufferL6).toString())

    setResultNH4((+bufferN2 * +bufferL6).toString())

    setResultN((+resultNO3 + (+resultNH4)).toString())

    setResultP(elementP)

    setResultK((+bufferP2 * +bufferL6).toString())

    setResultCa((+bufferQ2 * +bufferL6).toString())

    setResultMg((+bufferR2 * +bufferL6).toString())

    // setResultS('0')
    setResultCl('0')

  }, [
    bufferM2, bufferL6, elementP, bufferP2, bufferQ2, bufferR2, resultNO3, resultNH4
  ])

  // console.log('resultNO3: ', resultNO3, 'resultNH4: ', resultNH4, 'resultN: ', resultN, 'resultP: ', resultP, 'resultK: ', resultK, 'resultCa: ', resultCa, 'resultMg: ', resultMg)


  //// L6 - R6

  // resultNO3 buffer
  const [bufferNO3, setBufferNO3] = useState(resultNO3)
  // resultNH4 buffer
  const [bufferNH4, setBufferNH4] = useState(resultNH4)
  // resultP buffer
  const [bufferP, setBufferP] = useState(resultP)
  // resultK buffer
  const [bufferK, setBufferK] = useState(resultK)
  // resultCa buffer
  const [bufferCa, setBufferCa] = useState(resultCa)
  // resultMg buffer
  const [bufferMg, setBufferMg] = useState(resultMg)

  useMemo(() => {
    setBufferNO3(resultNO3)
    setBufferNH4(resultNH4)
    setBufferP(resultP)
    setBufferK(resultK)
    setBufferCa(resultCa)
    setBufferMg(resultMg)
  }, [resultNO3, resultNH4, resultP, resultK, resultCa, resultMg])

  // console.log('bufferNO3: ', bufferNO3, 'bufferNH4: ', bufferNH4, 'bufferP: ', bufferP, 'bufferK: ', bufferK, 'bufferCa: ', bufferCa, 'bufferMg: ', bufferMg)

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

    // console.log('memo resultCa - worked')
  }, [
    bufferCa, CaNO32_Ca_percent, CaNO32_ppm, CaNO32_density, CaNO32_grams, CaNO32_concentration, volume
  ])

  // // console.log('CaNO32_ppm: ', CaNO32_ppm, 'CaNO32_density: ', CaNO32_density, 'CaNO32_grams: ', CaNO32_grams, 'CaNO32_mL: ', CaNO32_mL)

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

    // console.log('memo NH4NO3 - worked')
  }, [
    NH4NO3_NH4_percent, NH4NO3_concentration, NH4NO3_ppm, NH4NO3_density, NH4NO3_grams,
    CaNO32_Ca_percent, CaNO32_NH4_percent,
    bufferNH4, bufferCa,
    volume
  ])

  // // console.log('NH4NO3_ppm: ', NH4NO3_ppm, 'NH4NO3_density: ', NH4NO3_density, 'NH4NO3_grams: ', NH4NO3_grams, 'NH4NO3_mL: ', NH4NO3_mL)


  //// A18 - R18

  // KNO3 Ca_percent
  const [KNO3_K_percent, setKNO3_K_percent] = useState('38.672')
  // KNO3 NO3_percent
  const [KNO3_NO3_percent, setKNO3_NO3_percent] = useState('13.854')
  // KNO3_concentration
  const [KNO3_concentration, setKNO3_concentration] = useState('200.8')

  // const KNO3_ppm_formula = 
  const [KNO3_ppm, setKNO3_ppm] = useState((-(((+NH4NO3_NO3_percent / 100 * +bufferNH4 * +CaNO32_Ca_percent / 100) - (+NH4NO3_NO3_percent / 100 * +bufferCa * +CaNO32_NH4_percent / 100) - (+bufferNO3 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (+bufferCa * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100))).toString())

  // console.log('KNO3_ppm: ', KNO3_ppm)

  // const KNO3_density_formula = 
  const [KNO3_density, setKNO3_density] = useState((+KNO3_ppm / 1000).toString())

  // console.log('KNO3_density: ', KNO3_density)

  // const KNO3_grams_formula = 
  const [KNO3_grams, setKNO3_grams] = useState((+KNO3_density * +volume).toString())

  // console.log('KNO3_grams: ', KNO3_grams)

  // const KNO3_mL_formula = 
  const [KNO3_mL, setKNO3_mL] = useState((+KNO3_grams / +KNO3_concentration * 1000).toString())

  // console.log('KNO3_mL: ', KNO3_mL)

  useMemo(() => {
    // KNO3 ppm
    setKNO3_ppm((-(((+NH4NO3_NO3_percent / 100 * +bufferNH4 * +CaNO32_Ca_percent / 100) - (+NH4NO3_NO3_percent / 100 * +bufferCa * +CaNO32_NH4_percent / 100) - (+bufferNO3 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100) + (+bufferCa * +CaNO32_NO3_percent / 100 * +NH4NO3_NH4_percent / 100)) / (+KNO3_NO3_percent / 100 * +CaNO32_Ca_percent / 100 * +NH4NO3_NH4_percent / 100))).toString())
    // KNO3 density
    setKNO3_density((+KNO3_ppm / 1000).toString())
    // KNO3 grams
    setKNO3_grams((+KNO3_density * +volume).toString())
    // KNO3 mL
    setKNO3_mL((+KNO3_grams / +KNO3_concentration * 1000).toString())

    // console.log('memo KNO3 - worked')
  }, [
    NH4NO3_NO3_percent, CaNO32_Ca_percent, NH4NO3_NH4_percent, CaNO32_NH4_percent, CaNO32_NO3_percent, KNO3_NO3_percent, KNO3_concentration, KNO3_ppm, KNO3_density, KNO3_grams,
    bufferNO3, bufferNH4, bufferCa,
    volume
  ])

  // // console.log('KNO3_ppm: ', KNO3_ppm, 'KNO3_density: ', KNO3_density, 'KNO3_grams: ', KNO3_grams, 'KNO3_mL: ', KNO3_mL)

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

    // console.log('memo resultMg - worked')
  }, [
    MgS_Mg_percent, MgS_concentration, MgS_grams, MgS_ppm, MgS_density, bufferMg, volume
  ])

  // // console.log('MgS_ppm: ', MgS_ppm, 'MgS_density: ', MgS_density, 'MgS_grams: ', MgS_grams, 'MgS_mL: ', MgS_mL)


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

    // console.log('memo khpo - worked')
  }, [
    KH2PO4_P_percent, KH2PO4_concentration, KH2PO4_ppm, KH2PO4_density, KH2PO4_grams, bufferP, volume
  ])

  // // console.log('KH2PO4_ppm: ', KH2PO4_ppm, 'KH2PO4_density: ', KH2PO4_density, 'KH2PO4_grams: ', KH2PO4_grams, 'KH2PO4_mL: ', KH2PO4_mL)

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

    // console.log('memo K2SO4 - worked')
  }, [
    KNO3_K_percent, KNO3_NO3_percent,
    CaNO32_Ca_percent, CaNO32_NH4_percent, CaNO32_NO3_percent,
    NH4NO3_NO3_percent, NH4NO3_NH4_percent,
    KH2PO4_P_percent, KH2PO4_K_percent,
    K2SO4_K_percent, K2SO4_ppm, K2SO4_density, K2SO4_grams, K2SO4_concentration,
    bufferCa, bufferNH4, bufferNO3, bufferK, bufferP, volume
  ])

  // // console.log('K2SO4_ppm: ', K2SO4_ppm, 'K2SO4_density: ', K2SO4_density, 'K2SO4_grams: ', K2SO4_grams, 'K2SO4_mL: ', K2SO4_mL)

  //
  const [resultS, setResultS] = useState((+K2SO4_ppm * (+K2SO4_S_percent / 100) + (+MgS_ppm * (+MgS_S_percent / 100))).toString())

  useMemo(() => {
    setResultS((+K2SO4_ppm * (+K2SO4_S_percent / 100) + (+MgS_ppm * (+MgS_S_percent / 100))).toString())
  }, [K2SO4_ppm, K2SO4_S_percent, MgS_ppm, MgS_S_percent])


  const handleChangeNH4dNO3 = (value: string) => {

    // console.log('val', value)
    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = ''
    // // console.log(value)
    // const calculatedNH4 = (+elementN * ((+value * 100 + 1) / 100)).toString()
    // const calculatedNO3 = (+elementN - +calculatedNH4).toString()

    // // console.log('works/?')
    // setElementN(result)
    // setResultN(result)
    const sum = (+elementN - +result).toString()

    // setResultNH4(calculatedNH4)
    // setResultNO3(calculatedNO3)

    // setNH4dNO3(resultNH4NO3)
    const calculatedNO3 = (+elementN / (1 + (+value))).toString()
    const calculatedNH4 = (+elementN - +calculatedNO3).toString()
    // const calculatedNH4 = (+calculatedN - +resultNH4).toString()

    // console.log('  ')
    // console.log('======', value)
    // console.log('======', elementN)
    // console.log('======', calculatedNO3)
    // console.log('======', calculatedNH4)
    // console.log('======', result)

    setElementNO3(calculatedNO3)
    setElementNH4(calculatedNH4)
    setResultNH4NO3(result)
    setEC(EC)
  }

  const handleChangeN = (value: string) => {

    // console.log(value)
    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'

    const resultNO3 = (+value / (1 + (+NH4dNO3))).toString()

    const resultNH4 = (+value - +resultNO3).toString()

    // console.log('n 1', resultN)
    setElementN(value)

    setElementNO3(resultNO3)
    setElementNH4(resultNH4)
    // setResultN(value)
    // console.log('n 2', resultN)

  }

  const handleChangeNO3 = (value: string) => {

    // console.log(value)
    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // // console.log(value)

    setElementNO3(result)


    // setResultNO3(result)
    // const sum = (+elementN - +result).toString()
    // setResultNH4(sum)
  }

  const handleChangeNH4 = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // // console.log(value)
    setElementNH4(value.toString())
    // setResultNH4(value.toString())
    // const calculatedNO3 = (+elementN - (+result)).toString()
    // setResultNO3(calculatedNO3)

  }

  const handleChangeCa = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // // console.log(value)
    setElementCa(value.toString())

  }

  const handleChangeK = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // // console.log(value)
    setElementK(value.toString())

  }

  const handleChangeMg = (value: string) => {

    const result = (+value).toString()

    if (!value || !isFinite(+value)) value = '1'
    // // console.log(value)
    setElementMg(value.toString())

  }


  // const handleChangeCustom = (value: string) => {
  //   setbufferKMg(value)
  //   setKMg(value)

  //   // console.log(resultKMg)

  //   // useEffect(() => { setbufferKMg(value) }, [KMg])
  // }

  const [elementBuffNO3, setelementBuffNO3] = useState('')

  const [checked, toggleChecked] = useState(false)

  const [isManual, toggleIsManual] = useState(true)

  const [isExpanded, toggleIsExpanded] = useState(false)

  const [fertilizers, setFertilizers] = useState([{
    title: 'Селитра кальциевая',
    percentCa: '0',
    grams: '0',
  }])

  const [elementsArray, setElementsArray] = useState([''])
  const [activeElement, setActiveElement] = useState('')
  const [activePercent, setActivePercent] = useState('0')
  const [activeGrams, setActiveGrams] = useState('')

  const [inputTitle, setInputTitle] = useState('')


  const [newFertilizers, setNewFertilizers] = useState([
    {
      title: 'Нитрат кальция',
      grams: '1',
      percents: [
        {
          title: '',
          percent: '0'
        },
        {
          title: 'Ca',
          percent: '13',
        }
      ]
    }
  ])

  console.log(newFertilizers)

  const handleAddNewFertilizers = (title: string) => {
    setNewFertilizers(state => [...state, { title, percents: [{ title: 'Element', percent: '0' }], grams: '0' }])
    setInputTitle('')
  }

  const handleAddUpdateNewElement = (fertilizer: string, title: string, percent: string) => {
    setNewFertilizers(state => state.map((val) => {

      if (val.title === fertilizer)
        val.percents.map(val => {
          if (val.title === title)
            val.percent = percent
          return val
        })

      return val
    }))
  }

  const handleAddNewElement = (fertilizer: string) => {

    setNewFertilizers(state => state.map((val) => {

      if (val.title === fertilizer) {
        const title = val.percents[0].title
        const percent = val.percents[0].percent
        val.percents.push({ title, percent })
        val.percents[0].title = ''
        val.percents[0].percent = ''
      }
      return val

    },

      // setNewFertilizers(state => state.map((val) => {

      //   if (val.title === fertilizer) {

      //   }
      //   return val
      // }
      // ))


    ))
  }

  const handleDeleteElement = (fertilizer: string, title: string) => {
    setNewFertilizers(state => state.map((val) => {
      // console.log(val.title, val.percents.map(val => console.log(val)), fertilizer, title)
      if (val.title === fertilizer)
        val.percents = val.percents.filter(val => val.title !== title)
      return val
    }))
  }

  const handleDeleteFertilizer = (fertilizer: string) => {
    setNewFertilizers(state => state.filter((val) => val.title !== fertilizer))
  }



  //// 
  const [customNO3, setCustomNO3] = useState('0.0');
  const [customNH4, setCustomNH4] = useState('0.0');

  const [customN, setCustomN] = useState((+customNH4 + +customNO3).toString());

  useMemo(() => {
    setCustomN(state => (state += (+customNH4 + +customNO3)).toString())
  }, [customNH4, customNO3])

  // useMemo(() => {
  //   setCustomN(state => (state += (+customNH4 + +customNO3)).toString())
  // }, [])

  const [customP, setCustomP] = useState('0.0');
  const [customK, setCustomK] = useState('0.0');
  const [customCa, setCustomCa] = useState('0.0');
  const [customMg, setCustomMg] = useState('0.0');
  const [customS, setCustomS] = useState('0.0');
  const [customCl, setCustomCl] = useState('0.0');

  const [customFe, setCustomFe] = useState('0.0');
  const [customMn, setCustomMn] = useState('0.0');
  const [customB, setCustomB] = useState('0.0');
  const [customZn, setCustomZn] = useState('0.0');
  const [customCu, setCustomCu] = useState('0.0');
  const [customMo, setCustomMo] = useState('0.0');
  const [customCo, setCustomCo] = useState('0.0');
  const [customSi, setCustomSi] = useState('0.0');

  // useMemo(() => {
  //   setCustomN((+customNH4 + +customNO3).toString());
  // }, [customNH4, customNO3])

  // const res = newFertilizers.reduce((acc, fertilizer) => {
  //   return acc += fertilizer.percents.reduce((acc, val) => {
  //     if (val.title === 'NO3') acc += val.percent
  //     return acc
  //   }, 0)
  // }, 0)

  useMemo(() => {

    const calculatedMacroElement = (elementTitle: string) => (newFertilizers.reduce((acc, fertilizer) => {
      console.log(fertilizer.grams)
      return acc += +fertilizer.grams / 100 * +fertilizer.percents.reduce((acc, val) => {
        if (val.title === elementTitle) (acc += +val.percent).toString()
        return acc
      }, 0)
    }, 0) * 1000 / +volume).toString()

    const calculatedMicroElement = (elementTitle: string) => (newFertilizers.reduce((acc, fertilizer) => {
      console.log(fertilizer.grams)
      return acc += +fertilizer.grams / 100 * +fertilizer.percents.reduce((acc, val) => {
        if (val.title === elementTitle) (acc += +val.percent).toString()
        return acc
      }, 0)
    }, 0) * 1000 * 1000 / +volume).toString()

    setCustomNO3(calculatedMacroElement('NO3'))
    setCustomNH4(calculatedMacroElement('NH4'))
    setCustomN(calculatedMacroElement('N'))
    setCustomP(calculatedMacroElement('P'))
    setCustomK(calculatedMacroElement('K'))
    setCustomCa(calculatedMacroElement('Ca'))
    setCustomMg(calculatedMacroElement('Mg'))
    setCustomS(calculatedMacroElement('S'))
    setCustomCl(calculatedMacroElement('Cl'))

    setCustomFe(calculatedMicroElement('Fe'))
    setCustomMn(calculatedMicroElement('Mn'))
    setCustomB(calculatedMicroElement('B'))
    setCustomZn(calculatedMicroElement('Zn'))
    setCustomCu(calculatedMicroElement('Cu'))
    setCustomMo(calculatedMicroElement('Mo'))
    setCustomCo(calculatedMicroElement('Co'))
    setCustomSi(calculatedMicroElement('Si'))

    console.log(
      customNO3, customNH4, 'lol:', customN, 'wat', customP, customK, customCa, customMg, customS, customCl,
      customFe, customMn, customB, customZn, customCu, customMo, customCo, customSi,
    )

  }, [newFertilizers])

  // useMemo(() => {

  // setElementNO3(customNO3)
  // setElementNH4(customNH4)
  // setElementN(customN)
  // setElementP(customP)
  // setElementK(customK)
  // setElementCa(customCa)
  // setElementMg(customMg)
  // setElementS(customS)
  // setElementCl(customCl)

  // console.log(typeof customNO3)

  // console.log(customNO3, customNH4, customN, customP, customK, customCa, customMg, customS, customCl)

  // if (+customNO3 === 0) handleChangeNO3('0.0')
  // else handleChangeNO3(customNO3)

  // if (+customNH4 === 0) handleChangeNH4('0.0')
  // else handleChangeNH4(customNH4)

  // if (+customNH4 === 0) handleChangeNH4('0.0')
  // else handleChangeNH4(customNH4)

  // if (+customP === 0) setResultP('0.0')
  // else setResultP(customP)

  // if (+customS === 0) setResultS('0.0')
  // else setResultS(customS)

  // if (+customCl === 0) setResultCl('0.0')
  // else setResultCl(customCl)

  // if (+customK === 0) handleChangeK('0.0')
  // else handleChangeK(customK)

  // if (+customCa === 0) handleChangeCa('0.0')
  // else handleChangeCa(customCa)

  // if (+customMg === 0) handleChangeMg('0.001')
  // else handleChangeMg(customMg)

  // setResultP(customP || '0.001')
  // setResultS(customS || '0.001')
  // setResultCl(customCl || '0.001')
  // handleChangeK(customK || '0.001')
  // handleChangeCa(customCa || '0.001')
  // handleChangeMg(customMg || '0.001')

  // }, [newFertilizers])

  const handleChooseElement = () => {

  }

  useEffect(() => {
    console.log('work')

    const x = 0

    console.log('work')
  }, [])


  const [modalChosenElement, toggleModalChosenElement] = useState(false)

  const DATA_STAGES = [
    'N', 'NO3', 'NH4', 'P', 'P2O5', 'K', 'K2O', 'Ca', 'CaO', 'Mg', 'MgO', 'S', 'SO4', 'Cl', 'Fe', 'B', 'Mn', 'Zn', 'Cu', 'Mo', 'Co', 'Si',
  ]

  const DATA_STAGES2 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'N',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'NO3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'NH4',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'P',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'K',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Ca',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Mg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'S',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Cl',
    },

    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'P2O5',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'K2O',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'CaO',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'MgO',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'SO4',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fe',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'B',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Mn',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Zn',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Cu',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Mo',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Co',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Si',
    },
  ]



  // console.log('---------------- END ---------------')

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView contentContainerStyle={{ backgroundColor: '#fff', padding: 10, paddingBottom: 25, gap: 4 }}>

        {/* <Divider style={{ marginTop: 10 }} /> */}
        <View>
          <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 8, padding: 6, paddingLeft: 7 }, checked && { borderBottomRightRadius: 0, borderBottomLeftRadius: 0, }]}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Icon name='error-outline' color='#666' size={22} />
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                {isManual ? 'Manual' : 'HPG'}
              </Text>
            </View>
            <View>
              <Switch value={isManual} onValueChange={() => toggleIsManual(state => !state)} thumbColor='#119911' trackColor={{ true: '#cccccc', false: '#cccccc' }} />
            </View>
          </View>

          {!isManual &&

            <View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                  Макропрофиль
                </Text>
                <View>
                  <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                    мг / литр
                  </Text>
                </View>
              </View>

              <Divider style={{ marginBottom: 4 }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <InputElements element="N" number={(+resultN).toFixed(1).toString()} onChange={handleChangeN} />
                  <InputElements element="NO₃" number={(+resultNO3).toFixed(1).toString()} onChange={handleChangeNO3} inputTextColor="#119911" />
                  <InputElements element="NH₄" number={(+resultNH4).toFixed(1).toString()} onChange={handleChangeNH4} inputTextColor="#119911" />
                  <InputElements element="NH4" divider="NO3" number={(+NH4dNO3).toFixed(3).toString()} onChange={(val) => { setResultNH4NO3(val) }} inputTextColor="#119911" />
                </View>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <InputElements element="P" number={(+resultP).toFixed(1).toString()} onChange={setResultP} inputTextColor="#119911" />
                  <InputElements element="S" number={(+resultS).toFixed(1).toString()} onChange={(val) => setResultS(val)} />
                  <InputElements element="Cl" number={(+resultCl).toFixed(1).toString()} onChange={setResultCl} />

                </View>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <InputElements element="K" number={(+resultK).toFixed(1).toString()} onChange={handleChangeK} inputTextColor="#119911" />
                  <InputElements element="Ca" number={(+resultCa).toFixed(1).toString()} onChange={handleChangeCa} inputTextColor="#119911" />
                  <InputElements element="Mg" number={(+resultMg).toFixed(1).toString()} onChange={handleChangeMg} inputTextColor="#119911" />
                  <InputElements element="EC" number={(+EC).toFixed(3).toString()} onChange={(val) => { setResultEC(val) }} inputTextColor="#119911" />
                </View>
              </View>
            </View>
          }
        </View>
        {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'flex-end' }}>
      </View> */}
        <View style={{}}>
          <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 8, padding: 6, paddingLeft: 7 }, checked && { borderBottomRightRadius: 0, borderBottomLeftRadius: 0, }]}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Icon name='error-outline' color='#666' size={22} />
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                Матрица соотношений
              </Text>
            </View>
            <View>
              <Switch value={checked} onValueChange={() => toggleChecked(!checked)} thumbColor='#119911' trackColor={{ true: '#cccccc', false: '#cccccc' }} />
            </View>
          </View>

          {/* {checked && <Divider style={{ marginBottom: 4 }} />} */}


          {checked && <>

            {/* <ElementsRatiosTable /> */}

            <View style={stylesRatios.container}>

              <View style={stylesRatios.itemFirst} />
              <View style={stylesRatios.itemTop}>
                <Text style={stylesRatios.textElement}>N</Text>
              </View>
              <View style={stylesRatios.itemTop}>
                <Text style={stylesRatios.textElement}>P</Text>
              </View>
              <View style={stylesRatios.itemTop}>
                <Text style={stylesRatios.textElement}>K</Text>
              </View>
              <View style={stylesRatios.itemTop}>
                <Text style={stylesRatios.textElement}>Ca</Text>
              </View>
              <View style={stylesRatios.itemTop}>
                <Text style={stylesRatios.textElement}>Mg</Text>
              </View>
              <View style={stylesRatios.itemTopRight}>
                <Text style={stylesRatios.textElement}>S</Text>
              </View>


              <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>N</Text>
              </View>
              <View style={[stylesRatios.item, { backgroundColor: '#e7e7e7' }]}>
                <Text style={stylesRatios.textElement}>1</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementP / +elementN).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementK / +elementN).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementCa / +elementN).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementMg / +elementN).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>{(+elementS / +elementN).toFixed(2).toString()}</Text>
              </View>


              <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>P</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementN / +elementP).toFixed(2).toString()}</Text>
              </View>
              <View style={[stylesRatios.item, { backgroundColor: '#e7e7e7' }]}>
                <Text style={stylesRatios.textElement}>1</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementK / +elementP).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementCa / +elementP).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementMg / +elementP).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>{(+elementS / +elementP).toFixed(2).toString()}</Text>
              </View>


              <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>K</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementN / +elementK).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementP / +elementK).toFixed(2).toString()}</Text>
              </View>
              <View style={[stylesRatios.item, { backgroundColor: '#e7e7e7' }]}>
                <Text style={stylesRatios.textElement}>1</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementCa / +elementK).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementMg / +elementK).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>{(+elementS / +elementK).toFixed(2).toString()}</Text>
              </View>


              <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>Ca</Text>
              </View>
              <View style={stylesRatios.item}>
                <TextInput style={[stylesRatios.textElement, { color: '#119911', paddingVertical: 0 }]} value={(+NCa).toFixed(2).toString()} onChangeText={(val) => { setResultNCa(val) }} />
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementP / +elementCa).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <TextInput style={[stylesRatios.textElement, { color: '#119911', paddingVertical: 0 }]} value={(+KCa).toFixed(2).toString()} onChangeText={(val) => { setResultKCa(val) }} />
              </View>
              <View style={[stylesRatios.item, { backgroundColor: '#e7e7e7' }]}>
                <Text style={stylesRatios.textElement}>1</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementMg / +elementCa).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>{(+elementS / +elementCa).toFixed(2).toString()}</Text>
              </View>


              <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>Mg</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementN / +elementMg).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementP / +elementMg).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.item}>
                <TextInput style={[stylesRatios.textElement, { color: '#119911', paddingVertical: 0 }]} value={(+KMg).toFixed(2).toString()} onChangeText={(val) => { setResultKMg(val) }} />
              </View>
              <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>{(+elementCa / +elementMg).toFixed(2).toString()}</Text>
              </View>
              <View style={[stylesRatios.item, { backgroundColor: '#e7e7e7' }]}>
                <Text style={stylesRatios.textElement}>1</Text>
              </View>
              <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>{(+elementS / +elementMg).toFixed(2).toString()}</Text>
              </View>


              <View style={stylesRatios.itemBottomLeft}>
                <Text style={stylesRatios.textElement}>S</Text>
              </View>
              <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>{(+elementN / +elementS).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>{(+elementP / +elementS).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>{(+elementK / +elementS).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>{(+elementCa / +elementS).toFixed(2).toString()}</Text>
              </View>
              <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>{(+elementMg / +elementS).toFixed(2).toString()}</Text>
              </View>
              <View style={[stylesRatios.item, { backgroundColor: '#e7e7e7', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                <Text style={stylesRatios.textElement}>1</Text>
              </View>
            </View>

          </>}
          {/* </CustomSpoiler> */}

        </View>

        <View style={{}}>
          <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 8, padding: 6, paddingLeft: 7 }, checked && { borderBottomRightRadius: 0, borderBottomLeftRadius: 0, }]}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Icon name='error-outline' color='#666' size={22} />
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                {isManual ? 'Manual' : 'HPG'}
              </Text>
            </View>
            <View>
              <Switch value={isManual} onValueChange={() => toggleIsManual(state => !state)} thumbColor='#119911' trackColor={{ true: '#cccccc', false: '#cccccc' }} />
            </View>
          </View>

          {/* MANUAL */}
          {
            isManual
              ?
              <View style={{ gap: 4 }}>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                    Макропрофиль
                  </Text>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                      мг / литр
                    </Text>
                  </View>
                </View>

                <Divider style={{ marginBottom: 4 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <InputElements element="N" number={customN} inputTextColor="#119911" />
                    <InputElements element="NO₃" number={customNO3} />
                    <InputElements element="NH₄" number={customNH4} />
                    {/* <InputElements element="NH4" divider="NO3" number={} onChange={} inputTextColor="#119911" /> */}
                  </View>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <InputElements element="P" number={customP} inputTextColor="#119911" />
                    <InputElements element="S" number={customS} inputTextColor="#119911" />
                    <InputElements element="Cl" number={customCl} />

                  </View>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <InputElements element="K" number={customK} inputTextColor="#119911" />
                    <InputElements element="Ca" number={customCa} inputTextColor="#119911" />
                    <InputElements element="Mg" number={customMg} inputTextColor="#119911" />
                    {/* <InputElements element="EC" number={} onChange={} inputTextColor="#119911" /> */}
                  </View>
                </View>



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
                    <InputElements element="Fe" number={customFe} onChange={setCustomFe} inputTextColor="#119911" />
                    <InputElements element="Zn" number={customZn} onChange={setCustomZn} inputTextColor="#119911" />
                    <InputElements element="Co" number={customCo} onChange={setCustomCo} />
                    {/* <InputElements element="NH4" divider="NO3" number={} onChange={() => {}} inputTextColor="#119911" /> */}
                  </View>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <InputElements element="Mn" number={customMn} onChange={setCustomMn} inputTextColor="#119911" />
                    <InputElements element="Cu" number={customCu} onChange={setCustomCu} inputTextColor="#119911" />
                    <InputElements element="Si" number={customSi} onChange={setCustomSi} />

                  </View>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <InputElements element="B" number={customB} onChange={setCustomB} inputTextColor="#119911" />
                    <InputElements element="Mo" number={customMo} onChange={setCustomMo} inputTextColor="#119911" />
                    {/* <InputElements element="Mg" number={(+resultMg).toFixed(1).toString()} onChange={handleChangeMg} inputTextColor="#119911" /> */}
                    {/* <InputElements element="EC" number={(+EC).toFixed(3).toString()} onChange={(val) => { onChangeResultEC(val) }} inputTextColor="#119911" /> */}
                  </View>
                </View>


                <View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                      Составы солей
                    </Text>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '400', color: '#111', top: 0, right: 48 }}>граммы</Text>
                    </View>
                  </View>

                  <Divider style={{ marginBottom: 4 }} />

                  <View style={{ gap: 5 }}>

                    {/* //// start */}

                    {!!newFertilizers.length
                      ?
                      newFertilizers.map(fertilizer => (
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'flex-start' }} key={fertilizer.title}>
                          <View style={{ flex: 1 }}>
                            <View style={{ overflow: 'hidden', borderRadius: 5, borderWidth: 1, borderColor: '#ccc' }}>

                              <Pressable
                                style={[{ justifyContent: 'space-between', flexDirection: 'row', height: 40, padding: 6 }, !isExpanded && { borderBottomWidth: 0 }, isExpanded && { backgroundColor: '#e7e7e7' }]}
                                //   title={title}
                                //   trailing={() => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
                                onPress={() => toggleIsExpanded(state => !state)}
                              >
                                <View style={{ padding: 2, paddingHorizontal: 4, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>{fertilizer.title}</Text>


                                </View>

                                <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, backgroundColor: '#fff', height: 28, justifyContent: 'center', alignItems: 'center' }}>
                                  <TextInput
                                    inputMode="numeric"
                                    keyboardType="numeric"
                                    value={fertilizer.grams}
                                    onChangeText={(value) => {
                                      setNewFertilizers(state => {
                                        return state.map(val => {
                                          if (val.title === fertilizer.title)
                                            val.grams = value
                                          return val
                                        })
                                      })
                                    }} style={{ width: 64, color: '#111', fontWeight: '300', fontSize: 16, paddingVertical: 0 }} />
                                </View>

                              </Pressable>
                              {isExpanded && (
                                <View style={{ paddingHorizontal: 6, gap: 6, paddingVertical: 6 }}>

                                  <View style={{ paddingHorizontal: 0, }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                      <Text style={{ fontSize: 14, fontWeight: '400', color: '#111' }}>
                                        Элемент
                                      </Text>
                                      <View style={{ right: 108 }}>
                                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#111', top: 0 }}>%</Text>
                                      </View>
                                    </View>

                                    <Divider style={{ marginBottom: 0 }} />

                                  </View>

                                  <View style={{ gap: 6, paddingHorizontal: 0, flexDirection: 'column' }}>
                                    {/* <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>{fertilizer}</Text> */}

                                    {fertilizer.percents.map((val, idx) => {
                                      if (idx === 0) return
                                      return (

                                        <View key={val.title} style={{ flexDirection: 'row', flex: 1, gap: 6 }}>



                                          <View style={{ flex: 2, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, flexDirection: 'row', padding: 2 }}>
                                            <View style={{}}>
                                              <TextInput style={{ paddingVertical: 0, color: '#111', fontSize: 14, fontWeight: '300' }} placeholder='Элемент' placeholderTextColor='#111' value={val.title} onChangeText={(value) => { setActiveElement(value) }} />
                                            </View>

                                          </View>


                                          <View style={{ width: 80, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, flexWrap: "wrap", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                                            <View style={{}}>
                                              <TextInput style={{ paddingVertical: 0, color: '#111', fontSize: 14, fontWeight: '300' }}
                                                placeholder="Процент"
                                                inputMode="numeric"
                                                keyboardType="numeric"
                                                placeholderTextColor='#111'
                                                value={val.percent}
                                                onChangeText={setActivePercent} />
                                            </View>
                                          </View>


                                          <View style={{ width: 32, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { handleDeleteElement(fertilizer.title, val.title) }}>
                                              <Text style={{ color: '#111', fontSize: 14, fontWeight: '300' }}>–</Text>
                                            </TouchableOpacity>
                                          </View>

                                        </View>

                                      )
                                    })}


                                  </View>





                                  <View style={{ gap: 6, paddingHorizontal: 0, flexDirection: 'row' }}>
                                    {/* <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>{fertilizer}</Text> */}

                                    <View style={{ flexDirection: 'row', flex: 1, gap: 6 }}>


                                      <Modal
                                        animationType="fade"
                                        transparent={true}
                                        // hitSlop={{ left: 100, }}
                                        needsOffscreenAlphaCompositing


                                        visible={modalChosenElement}

                                        // presentationStyle='overFullScreen'
                                        onRequestClose={() => {
                                          Alert.alert('Модальное окно было закрыто.');
                                          toggleModalChosenElement(false);
                                        }}>
                                        <TouchableWithoutFeedback onPress={() => { toggleModalChosenElement(false) }}>
                                          <View style={{}} />
                                        </TouchableWithoutFeedback>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                          <View style={{ width: '80%', backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
                                            <View style={{ padding: 4 }}>

                                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 5, paddingBottom: 5 }}>
                                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                                  <Text style={{ fontSize: 20, fontWeight: '400', color: '#111' }}>Выберите элемент</Text>
                                                  <ButtonIconCircle func={() => toggleModalChosenElement(false)} iconTitle='close' color='#111' size={42} />
                                                </View>
                                                {/* <Icon name="close" size={28} /> */}
                                              </View>
                                              <Divider style={{ marginBottom: 10 }} />

                                              <View style={{ gap: 0, maxHeight: 500, minHeight: 300, width: 300 }}>

                                                <FlatList
                                                  contentContainerStyle={{ justifyContent: 'center' }}
                                                  data={DATA_STAGES}
                                                  numColumns={2}
                                                  // horizontal
                                                  ItemSeparatorComponent={() => <View style={{ height: 10, width: 10 }}></View>}
                                                  columnWrapperStyle={false}
                                                  // ListFooterComponent={() => <View></View>}
                                                  renderItem={(stage) => {
                                                    // console.log('stage: ', stage)
                                                    return (
                                                      <View style={{
                                                        borderRadius: 10, overflow: 'hidden', width: '22%', marginRight: 5, marginLeft: 5
                                                        // marginLeft: 4, marginTop: 4
                                                      }}>
                                                        <View style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, justifyContent: 'space-between' }}>
                                                          <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>{stage.item}</Text>
                                                          {/* {console.log('stage idx: ', stage.index)} */}
                                                          {/* <Switch
                                                            value={stagesIncludedArr[stage.index]}
                                                            onValueChange={(bool) => handleIncludedStages(stage.index, bool)} /> */}
                                                        </View>
                                                      </View>
                                                    )
                                                  }}
                                                // keyExtractor={item => item.}
                                                />


                                              </View>

                                            </View>

                                            {/* </View> */}
                                          </View>
                                        </View>
                                      </Modal>

                                      <View style={{
                                        flex: 2, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, flexDirection: 'row', overflow: 'hidden'
                                      }}>
                                        <Pressable
                                          onPress={() => { toggleModalChosenElement(true) }}
                                          style={{ flex: 1 }}>
                                          {/* <TextInput style={{ flex: 1, paddingVertical: 0, color: '#111', fontSize: 14, fontWeight: '300' }}
                                            placeholder={'Название элемента'}
                                            placeholderTextColor='#111'
                                            value={fertilizer.percents[0].title}
                                            defaultValue=""
                                            onChangeText={(value) => {
                                              console.log(value)
                                              setNewFertilizers(state => state.map(val => {
                                                console.log(val.title, fertilizer.title)
                                                if (val.title === fertilizer.title)
                                                  val.percents[0].title = value
                                                console.log(val.percents[0].title)
                                                return val
                                              })
                                              )
                                            }}
                                          /> */}

                                          <Text style={{ flex: 1, padding: 6, color: '#111', fontSize: 14, fontWeight: '300' }}>{fertilizer.percents[0].title || !fertilizer.percents[0].title && 'Выберите элемент' }</Text>

                                        </Pressable>
                                      </View>

                                      <View style={{ width: 80, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, flexWrap: "wrap", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                                        <View style={{}}>
                                          <TextInput style={{ paddingVertical: 0, color: '#111', fontSize: 14, fontWeight: '300' }}
                                            placeholder="Процент"
                                            inputMode="numeric"
                                            keyboardType="numeric"
                                            placeholderTextColor='#111'
                                            value={fertilizer.percents[0].percent}
                                            defaultValue="0"
                                            onChangeText={(value) => {
                                              console.log(value)
                                              setNewFertilizers(state => state.map(val => {
                                                console.log(val.title, fertilizer.title)
                                                if (val.title === fertilizer.title)
                                                  val.percents[0].percent = value
                                                console.log(val.percents[0].title)
                                                return val
                                              })
                                              )
                                            }} />
                                        </View>
                                      </View>
                                    </View>


                                    <View style={{ width: 32, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => handleAddNewElement(fertilizer.title)}>
                                        <Text style={{ color: '#111', fontSize: 14, fontWeight: '300' }}>+</Text>
                                      </TouchableOpacity>
                                    </View>

                                  </View>

                                </View>
                              )}
                            </View>
                          </View>


                          <View style={{ justifyContent: 'flex-start' }}>
                            <View style={{ borderRadius: 5, overflow: 'hidden', alignItems: 'flex-start' }}>
                              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', height: 42, width: 42 }} onPress={() => handleDeleteFertilizer(fertilizer.title)}>
                                <Text style={{ color: '#111', fontSize: 18, fontWeight: '300' }}>–</Text>
                                {/* <Icon color="#111" name="add" size={32} /> */}
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      ))
                      :
                      <></>
                    }

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <View style={{ flex: 1, padding: 2, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, height: 42 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6 }}>
                          <TextInput style={{ flex: 1, fontSize: 16, fontWeight: '300', color: '#111', paddingVertical: 0 }} value={inputTitle} onChangeText={setInputTitle} placeholderTextColor='#666' placeholder="Введите название удобрения" />
                        </View>
                      </View>
                      <View style={{ width: 42, height: 42, borderRadius: 5, overflow: 'hidden', borderWidth: 1, borderColor: '#ccc', alignItems: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 42, width: 42 }} onPress={() => handleAddNewFertilizers(inputTitle)}>
                          <Text style={{ color: '#111', fontSize: 18, fontWeight: '300', alignItems: 'center' }}>+</Text>
                          {/* <Icon color="#111" name="add" size={32} /> */}
                        </TouchableOpacity>
                      </View>
                    </View>


                  </View>
                </View>
              </View>
              :
              <View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                  <Text style={{ fontSize: 16, fontWeight: '400', color: '#111' }}>
                    Составы солей
                  </Text>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#111', top: 0 }}>граммы</Text>

                  </View>
                </View>

                <Divider style={{ marginBottom: 0 }} />

                {/* <View style={{ gap: 4 }}> */}

                <CustomSpoiler title='Нитрат кальция' value={(+CaNO32_grams).toFixed(2).toString()}>
                  <View style={{ paddingHorizontal: 4 }}>
                    <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>resultCa(resultNO3)2 · 4H2O</Text>
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
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 4, gap: 4 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                      <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>CaNO32</Text>
                      <View style={{ alignItems: "center", flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>Ca:</Text>
                        <View style={{ padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: 64 }}>
                          <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>123</Text>
                        </View>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
                      {/* <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>KNO3</Text> */}
                      <View style={{ alignItems: "center", flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>NO3</Text>
                        <View style={{ padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: 64 }}>
                          <Text style={{ color: '#111', fontSize: 16, fontWeight: '300' }}>123</Text>
                        </View>
                      </View>
                    </View>

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
                    <Text style={{ fontSize: 16, fontWeight: '300', color: '#111' }}>resultMg(resultNO3)2 · 6H2O</Text>
                  </View>
                </CustomSpoiler>
              </View>
          }

        </View>



        {/* </View> */}

      </ScrollView >

    </View >
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
    // height: 45,
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

const stylesRatios = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    borderColor: '#ccc',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    overflow: 'hidden'
  },
  item: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemFirst: {
    width: '10%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e7e7e7'
  },
  itemTop: {
    width: '15%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e7e7e7'
  },
  itemTopRight: {
    width: '15%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e7e7e7'
  },
  itemLeft: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e7e7e7'
  },
  itemRight: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemBottom: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  itemBottomLeft: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e7e7e7'
  },
  itemLast: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textElement: {
    fontWeight: '300',
    fontSize: 16,
    color: '#111',
  },

});