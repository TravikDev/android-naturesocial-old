import React, { useRef, useState } from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { PostCard } from '../../../organisms/Posts/PostCard'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { Divider, FAB, Icon, Pressable } from '@react-native-material/core'

const scrHeight = Dimensions.get('screen').height
const scrWidth = Dimensions.get('screen').width

export const ScreenGardenFeed = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    // const [loading, setLoading] = useState(true);

    return (
        <>
            <View style={{ position: 'absolute', zIndex: 10, opacity: 0.9, backgroundColor: '#090', borderRadius: 25, justifyContent: 'center', alignItems: "center", borderWidth: 1, borderColor: '#fff', bottom: scrHeight / 50, right: scrWidth / 25 }}>
                <ButtonIconCircle iconTitle='add' color='#fff' size={48} func={fadeIn} />
            </View>

            <ScrollView contentContainerStyle={{ }}>

                {/* <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim,
                    },
                ]}>
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View> */}


                <View style={{ display: 'flex', height: 46, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <View style={{}}>
                        <Text style={{ color: '#111', fontSize: 18, fontWeight: '400' }}>All categories</Text>
                    </View>
                    <View>
                        <ButtonIconCircle iconTitle='tune' size={36} color='#666' />
                    </View>
                </View>

                <Divider />

                <View style={{ display: 'flex', backgroundColor: '#fff', paddingHorizontal: 10, paddingTop: 10, gap: 10 }}>

                    {/* <ButtonIconCircle iconTitle='settings-applications' color='#111' size={32} /> */}

                    <PostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </PostCard>

                    <PostCard title='Second title' categories='Category 2, Category 3'>
                        Molestias, omnis aperiam est in blanditiis quo quod dolorum. Illo voluptate, voluptatem ducimus, alias iusto ipsam odit ad ratione tempore dicta.
                    </PostCard>

                </View>

            </ScrollView>

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
