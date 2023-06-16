import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View, TextInput, StatusBar } from 'react-native'
// import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { Pressable } from '@react-native-material/core'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { PostFilterSingleCategories } from '../../../organisms/postsList/Posts/PostFilterSingleCategories'
import { GardenFeedPostCard } from '../../../organisms/garden/GardenFeed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GardenSystemCard } from '../../../organisms/cards/GardenSystemCard'
import { StateControlButton } from '../../../atoms/Buttons/StateControlButton'
// import { PostFilterSingleCategories } from '../../../../organisms/postsList/Posts/PostFilterSingleCategories'
// import { GardenFeedPostCard } from '../../../../organisms/garden/GardenFeed'

const scrHeight = Dimensions.get('screen').height
const scrWidth = Dimensions.get('screen').width



const data = [
  {
    id: 123,
    title: 'Зелень на кухне',
    countCultures: 5,
    countVerieties: 3,
    type: 'DNFT',
    substrate: 'Керамзит',
  },
  {
    id: 124,
    title: 'Огурец на балконе',
    countCultures: 1,
    countVerieties: 3,
    type: 'DWC',
    substrate: 'Керамзит',
  },
  {
    id: 125,
    title: 'Лимон подпор',
    countCultures: 1,
    countVerieties: 1,
    type: 'DWC',
    substrate: 'Перлит',
  },
]


/* @ts-ignore */
export const ScrPublicGardenSystems = ({ navigation }) => {

  const [optionsModal, toggleOptionsModal] = useState(false)

  const toggleOptionsMenu = () => {
    toggleOptionsModal(state => !state)
  }

  const [inputValues, setInputValues] = useState([{ key: 1, value: '' }]);

  /* @ts-ignore */
  const handleInputChange = (text, key) => {
    const updatedValues = inputValues.map((input) => {
      if (input.key === key) {
        return { ...input, value: text };
      }
      return input;
    });
    setInputValues(updatedValues);
  };

  const handleAddInput = () => {
    const newInput = {
      key: inputValues.length + 1,
      value: ''
    };
    setInputValues([...inputValues, newInput]);
  };

  /* @ts-ignore */
  const handleRemoveInput = (key) => {
    const updatedValues = inputValues.filter((input) => input.key !== key);
    setInputValues(updatedValues);
  };

  const [arrCatsTypes, setCatsTypes] = useState(['All Types', 'DNFT', 'DWC', 'Periodic', 'Backwater', 'Manual refill'])

  const [arrCatsDevices, setCatsDevices] = useState(['All Devies', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'])

  const [arrCatsCultures, setCatsCultures] = useState(['All Cultures', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'])

  const [arrCatsVariety, setCatsVariety] = useState(['All Verieties', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'])

  // const [arrCultures, setArrCultures] = useState(['All devices', 'DNFT', 'DWC'])

  const [expandedTypes, toggleExpandedTypes] = useState(false)
  const [expandedCultures, toggleExpandedCultures] = useState(false)

  const [expandedDevices, toggleExpandedDevices] = useState(false)
  const [expandedVerieties, toggleExpandedVerieties] = useState(false)

  const handleToggleExpandedTypes = () => {
    expandedDevices && toggleExpandedDevices(false)
    expandedCultures && toggleExpandedCultures(false)
    expandedVerieties && toggleExpandedVerieties(false)
    toggleExpandedTypes(state => !state)
  }

  const handleToggleExpandedCultures = () => {
    expandedDevices && toggleExpandedDevices(false)
    expandedTypes && toggleExpandedTypes(false)
    expandedVerieties && toggleExpandedVerieties(false)
    toggleExpandedCultures(state => !state)
  }

  const handleToggleExpandedDevices = () => {
    expandedCultures && toggleExpandedCultures(false)
    expandedTypes && toggleExpandedTypes(false)
    expandedVerieties && toggleExpandedVerieties(false)
    toggleExpandedDevices(state => !state)
  }

  const handleToggleExpandedVerieties = () => {
    expandedCultures && toggleExpandedCultures(false)
    expandedDevices && toggleExpandedDevices(false)
    expandedTypes && toggleExpandedTypes(false)
    toggleExpandedVerieties(state => !state)
  }


  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //     // Will change fadeAnim value to 1 in 5 seconds
  //     Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 5000,
  //         useNativeDriver: true,
  //     }).start();
  // };

  // const [loading, setLoading] = useState(true);

  return (
    <View style={{ flex: 1, display: 'flex', backgroundColor: '#fff' }}>

      <ScrollView contentContainerStyle={{ paddingTop: 15 }} >

        <View style={{ display: 'flex', backgroundColor: '#fff', paddingHorizontal: 10, paddingBottom: 10, gap: 10, zIndex: 0 }}>

          {/* <ButtonIconCircle iconTitle='settings-applications' color='#111' size={32} /> */}

          <GardenSystemCard title='Second title' type='DWC' substrate='Керамзит' culturesCount={2} verietiesCount={3} isActive={false} systemId={1}>
            <View style={{ gap: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {/* <Text style={{ color: '#111', fontWeight: '300', fontSize: 16 }}>Текущее состояние системы</Text> */}
              <View style={{ width: '100%' }}>
                <StateControlButton title='Режим дня' value={`16/8`} leadingIcon='model-training' />
              </View>

              <View style={{ width: '100%'}}>
                <StateControlButton title='Интенсивность' value={`120.4 kLux`} leadingIcon='wb-incandescent' />
              </View>

              <View style={{ width: '100%' }}>
                <StateControlButton title='Энергозатраты' value={`120 кВт/ч`}
                  leadingIcon='emoji-objects' />
              </View>

              <View style={{ width: '100%' }}>
                <StateControlButton title='Влажность' value={`62 %`}
                  leadingIcon='wash' />
              </View>

              <View style={{ width: '100%' }}>
                <StateControlButton title='Температура' value={`+32 | +28 °C`}
                  leadingIcon='device-thermostat' />
              </View>

              <View style={{ width: '48.5%' }}>
                <StateControlButton title='pH' value={`6.1`}
                  leadingIcon='science' />
              </View>

              <View style={{ width: '48.5%' }}>
                <StateControlButton title='EC' value={`0.335`} leadingIcon='invert-colors-on' />
              </View>

              {/* </View> */}

            </View>
          </GardenSystemCard>

          <GardenSystemCard title='Second title' type='DWC' substrate='Керамзит' culturesCount={2} verietiesCount={3}>
          </GardenSystemCard>

        </View>

      </ScrollView >

      <View style={{ opacity: 0.9, backgroundColor: '#090', borderRadius: 25, justifyContent: 'center', alignItems: "center", borderWidth: 1, borderColor: '#fff', bottom: scrHeight / 50, right: scrWidth / 25, position: 'absolute' }}>
        <ButtonIconCircle iconTitle='add' color='#fff' size={48} func={() => navigation.navigate('AddGardenPost')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    // padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

