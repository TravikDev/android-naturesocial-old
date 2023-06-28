import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const stylesRatios = StyleSheet.create({
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

export const ElementsRatiosTable = () => {
    return (
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
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>1</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>2.01</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>8.24</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.99</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>4.50</Text>
            </View>
            <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>2.32</Text>
            </View>


            <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>P</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.11</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>1</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>8.24</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.99</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>4.50</Text>
            </View>
            <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>2.32</Text>
            </View>


            <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>K</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.11</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>2.01</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>1</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.99</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>4.50</Text>
            </View>
            <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>2.32</Text>
            </View>


            <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>Ca</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.11</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>2.01</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>8.24</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>1</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>4.50</Text>
            </View>
            <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>2.32</Text>
            </View>


            <View style={stylesRatios.itemLeft}>
                <Text style={stylesRatios.textElement}>Mg</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.11</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>2.01</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>8.24</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>0.99</Text>
            </View>
            <View style={stylesRatios.item}>
                <Text style={stylesRatios.textElement}>1</Text>
            </View>
            <View style={stylesRatios.itemRight}>
                <Text style={stylesRatios.textElement}>2.32</Text>
            </View>


            <View style={stylesRatios.itemBottomLeft}>
                <Text style={stylesRatios.textElement}>S</Text>
            </View>
            <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>1.51</Text>
            </View>
            <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>7.50</Text>
            </View>
            <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>4.21</Text>
            </View>
            <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>0.11</Text>
            </View>
            <View style={stylesRatios.itemBottom}>
                <Text style={stylesRatios.textElement}>1.00</Text>
            </View>
            <View style={stylesRatios.itemLast}>
                <Text style={stylesRatios.textElement}>1</Text>
            </View>
        </View>
    )
};