import React, { useRef, useState } from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import { PostCard } from '../../../organisms/Posts/PostCard'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { Icon, Pressable } from '@react-native-material/core'

const scrHeight = Dimensions.get('screen').height
const scrWidth = Dimensions.get('screen').width

export const ScreenGardenFeed = () => {

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
        <>
            <View style={{ position: 'absolute', zIndex: 10, opacity: 0.9, backgroundColor: '#090', borderRadius: 25, justifyContent: 'center', alignItems: "center", borderWidth: 1, borderColor: '#fff', bottom: scrHeight / 50, right: scrWidth / 25 }}>
                <ButtonIconCircle iconTitle='add' color='#fff' size={48} />
            </View>


            <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }} >


                <View style={{ display: 'flex', height: 46, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <View style={{}}>
                        <Text style={{ color: '#111', fontSize: 18, fontWeight: '400' }}>All categories</Text>
                    </View>
                    <Pressable>
                        <ButtonIconCircle iconTitle='tune' size={36} func={toggleOptionsMenu} color='#666' />
                    </Pressable>
                </View>

                {optionsModal && (
                    <View style={{ backgroundColor: '#fbfbfb', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginHorizontal: 10, overflow: 'hidden', gap: 10 }}>

                        <View style={{ height: 50, }}>
                            <Text style={{ color: '#111', fontWeight: '300', fontSize: 18 }}>Filter</Text>
                        </View>
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
                        <View style={{ display: 'flex', flexDirection: 'column', padding: 10, flexWrap: 'wrap', gap: 5 }}>
                            {
                                inputValues.map((input) => {

                                    // let someTag = tagList[idx]

                                    return (
                                    <View
                                        key={input.key}
                                        style={{ height: 42, width: '100%', borderRadius: 5, borderWidth: 1, borderColor: "#ccc", display: 'flex', alignContent: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <>
                                        <TextInput
                                            /* @ts-ignore */
                                            textAlignVertical='top'
                                            // underlineColorAndroid='#393'
                                            // selectionColor="#fff"
                                            selectionColor="#393"
                                            placeholder='tag'
                                            placeholderTextColor='#111'
                                            blurOnSubmit={true}
                                            style={{ color: '#111' }}
                                            // onBlur={handleBlurTag}
                                            value={input.value}
                                            onChangeText={(text) => handleInputChange(text, input.key)}
                                        />
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{}}>
                                                <ButtonIconCircle iconTitle='remove-circle-outline' size={40} color="#666" func={() => handleRemoveInput(input.key)} />
                                            </View>
                                        </View>
                                        </>
                                    </View>)

                                })
                            }

                            {/* </View> */}
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{}}>
                                    <ButtonIconCircle iconTitle='add-circle-outline' size={40} color="#666" func={handleAddInput} />
                                </View>
                            </View>

                        </View>
                        {/* </View> */}

                    </View >
                )}


                {/* <Divider /> */}

                <View style={{ display: 'flex', backgroundColor: '#fff', paddingHorizontal: 10, paddingBottom: 10, gap: 10 }}>

                    {/* <ButtonIconCircle iconTitle='settings-applications' color='#111' size={32} /> */}

                    <PostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </PostCard>

                    <PostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </PostCard>

                </View>

            </ScrollView >

        </>
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
