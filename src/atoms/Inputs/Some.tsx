import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderWidth: 1,
        // borderLeftWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
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
    }
});

export const MultiplicationTable = () => {
    return (
        <View style={styles.container}>

{/* First Row */}

            <View style={styles.itemFirst} />
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>N</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>P</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>K</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>Ca</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>Mg</Text>
            </View>
            <View style={styles.itemTopRight}>
                <Text style={styles.textElement}>S</Text>
            </View>

{/* 2 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>N</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>2.01</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>8.24</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.99</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>4.50</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>2.32</Text>
            </View>
{/* 3 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>P</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.11</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>8.24</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.99</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>4.50</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>2.32</Text>
            </View>
{/* 4 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>K</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.11</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>2.01</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.99</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>4.50</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>2.32</Text>
            </View>
{/* 5 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>Ca</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.11</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>2.01</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>8.24</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>4.50</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>2.32</Text>
            </View>
{/* 6 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>Mg</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.11</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>2.01</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>8.24</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>0.99</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>1</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>2.32</Text>
            </View>

{/* Last Row */}

            <View style={styles.itemBottomLeft}>
                <Text style={styles.textElement}>S</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>1.51</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>7.50</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>4.21</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>0.11</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>1.00</Text>
            </View>
            <View style={styles.itemLast}>
                <Text style={styles.textElement}>1</Text>
            </View>
        </View>
    )
};