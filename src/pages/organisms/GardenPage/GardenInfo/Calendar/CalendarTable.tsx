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
        width: '14.285%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemFirst: {
        width: '14.285%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#e7e7e7'
    },
    itemTop: {
        width: '14.285%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#e7e7e7'
    },
    itemTopRight: {
        width: '14.285%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#e7e7e7'
    },
    itemLeft: {
        width: '14.285%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        // backgroundColor: '#e7e7e7'
    },
    itemRight: {
        width: '14.285%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemBottom: {
        width: '14.285%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    itemBottomLeft: {
        width: '14.285%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#ccc',
        // backgroundColor: '#e7e7e7'
    },
    itemLast: {
        width: '14.285%',
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

export const CalendarTable = () => {
    return (
        <View style={styles.container}>

{/* First Row */}

            {/* <View style={styles.itemFirst} /> */}
            <View style={styles.itemFirst}>
                <Text style={styles.textElement}>Mo</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>Tu</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>We</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>Th</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>Fr</Text>
            </View>
            <View style={styles.itemTop}>
                <Text style={styles.textElement}>Sa</Text>
            </View>
            <View style={styles.itemTopRight}>
                <Text style={styles.textElement}>Su</Text>
            </View>

{/* 2 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>26</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>27</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>28</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>29</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>30</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>31</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>1</Text>
            </View>
{/* 3 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>2</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>3</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>4</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>5</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>6</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>7</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>8</Text>
            </View>
{/* 4 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>9</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>10</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>11</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>12</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>13</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>14</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>15</Text>
            </View>
{/* 5 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>16</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>17</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>18</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>19</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>20</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>21</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>22</Text>
            </View>
{/* 6 Row */}

            <View style={styles.itemLeft}>
                <Text style={styles.textElement}>23</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>24</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>25</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>26</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>27</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.textElement}>28</Text>
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.textElement}>29</Text>
            </View>

{/* Last Row */}

            <View style={styles.itemBottomLeft}>
                <Text style={styles.textElement}>30</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>1</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>2</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>3</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>4</Text>
            </View>
            <View style={styles.itemBottom}>
                <Text style={styles.textElement}>5</Text>
            </View>
            <View style={styles.itemLast}>
                <Text style={styles.textElement}>6</Text>
            </View>
        </View>
    )
};