import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View, TextInput, StatusBar, RefreshControl } from 'react-native'
// import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { Divider, Icon, Pressable } from '@react-native-material/core'
import { PostFilterSingleCategories } from '../../../../organisms/postsList/Posts/PostFilterSingleCategories'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { GardenFeedPostCard } from '../../../../organisms/garden/GardenFeed'


const scrHeight = Dimensions.get('screen').height
const scrWidth = Dimensions.get('screen').width

/* @ts-ignore */
export const ScrPublicGardenFeed = ({ navigation }) => {

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

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 300);
    }, []);

    return (
        <View style={{ flex: 1, display: 'flex', backgroundColor: '#fff' }}>

            <View style={{ display: 'flex', height: 38, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 2 }}>
                <View style={{ overflow: 'hidden', borderRadius: 5 }}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 8, gap: 4 }}>
                        <Icon name='sort' size={28} color='#555' />
                        <Text style={{ color: '#111', fontSize: 18, fontWeight: '400' }}>По дате ↑</Text>
                    </Pressable>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonIconCircle iconTitle='today' size={36} color='#555' />
                    <ButtonIconCircle iconTitle='tune' size={36} func={toggleOptionsMenu} color='#555' />
                </View>
            </View>

            {optionsModal && (
                <View style={{ backgroundColor: '#fbfbfb', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginHorizontal: 10, gap: 10, zIndex: 10 }}>

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

            <Divider />

            <ScrollView
                contentContainerStyle={{}}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

                <View style={{ display: 'flex', backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 10, gap: 10, zIndex: 0 }}>

                    <GardenFeedPostCard title='Second title' categories='Category 2, Category 3' postId={1}>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </GardenFeedPostCard>

                    <GardenFeedPostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </GardenFeedPostCard>

                    <GardenFeedPostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </GardenFeedPostCard>

                    <GardenFeedPostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </GardenFeedPostCard>

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

