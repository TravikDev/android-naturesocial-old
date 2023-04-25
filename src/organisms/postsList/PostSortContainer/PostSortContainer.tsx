import { Pressable } from '@react-native-material/core'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { PostFilterSingleCategories } from '../Posts/PostFilterSingleCategories'

export const PostSortContainer = ({ isExpanded = false }) => {


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

    return (
        <View>
            {isExpanded && (
                <View style={{ backgroundColor: '#fbfbfb', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, gap: 10, zIndex: 10, marginBottom: 10 }}>

                    {/* <View style={{ }}>
                            <Text style={{ color: '#111', fontWeight: '300', fontSize: 18 }}>Filter</Text>
                        </View> */}
                    {/* <View style={{}}><Text>Filter</Text></View> */}
                    {/* <View style={{
                            width: '100%',
                            display: 'flex', flexDirection: 'row', alignItems: 'center',
                            gap: 2, 
                        }}>
                            <View style={{
                                
                                flexWrap: 'wrap',
                                height: 44,
                                marginVertical: 10,
                                // marginLeft: 15,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch',
                                justifyContent: 'space-between',
                                // borderRadius: 5,
                                // borderColor: '#ccc',
                                // borderWidth: 1,
                                padding: 2, gap: 4
                            }}> */}


                    <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 15, paddingVertical: 10, flexWrap: 'wrap', gap: 5 }}>

                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: 5, zIndex: 20, flexWrap: 'wrap' }}>

                            <View style={{ width: '49%', zIndex: 24 }}>
                                <PostFilterSingleCategories expanded={expandedTypes} setExpanded={handleToggleExpandedTypes} arrCategories={arrCatsTypes} />
                            </View>

                            <View style={{ width: '49%', zIndex: 22 }}>
                                <PostFilterSingleCategories expanded={expandedCultures} setExpanded={handleToggleExpandedCultures} arrCategories={arrCatsCultures} />
                            </View>

                            <View style={{ width: '49%', zIndex: 23 }}>
                                <PostFilterSingleCategories expanded={expandedDevices} setExpanded={handleToggleExpandedDevices} arrCategories={arrCatsDevices} />
                            </View>

                            <View style={{ width: '49%', zIndex: 21 }}>
                                <PostFilterSingleCategories expanded={expandedVerieties} setExpanded={handleToggleExpandedVerieties} arrCategories={arrCatsVariety} />
                            </View>
                        </View>


                        {
                            inputValues.map((input) => {

                                // let someTag = tagList[idx]

                                return (
                                    <View
                                        key={input.key}
                                        style={{ height: 42, width: '100%', borderRadius: 5, borderWidth: 1, backgroundColor: '#fff', borderColor: "#ccc", display: 'flex', alignContent: 'center', justifyContent: 'space-between', flexDirection: 'row', zIndex: 0 }}>
                                        <>
                                            <TextInput
                                                /* @ts-ignore */
                                                textAlignVertical='top'
                                                // underlineColorAndroid='#393'
                                                // selectionColor="#fff"
                                                // selectionColor="#393"
                                                placeholder='tag'
                                                placeholderTextColor='#111'
                                                blurOnSubmit={true}
                                                style={{ color: '#111' }}
                                                // onBlur={handleBlurTag}
                                                value={input.value}
                                                onChangeText={(text) => handleInputChange(text, input.key)}
                                            />
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', zIndex: 0 }}>
                                                <View style={{}}>
                                                    <ButtonIconCircle iconTitle='remove-circle-outline' size={40} color="#666" func={() => handleRemoveInput(input.key)} />
                                                </View>
                                            </View>
                                        </>
                                    </View>)

                            })
                        }

                        {/* </View> */}
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', zIndex: 0 }}>
                            <View style={{}}>
                                <ButtonIconCircle iconTitle='add-circle-outline' size={40} color="#666" func={handleAddInput} />
                            </View>
                        </View>

                    </View>
                    {/* </View> */}

                </View >
            )}
        </View>
    )
}
