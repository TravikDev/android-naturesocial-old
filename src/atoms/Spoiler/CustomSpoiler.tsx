import { Icon, ListItem, Pressable } from '@react-native-material/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* @ts-ignore */
export const CustomSpoiler = ({ title, grams, children, leadingIcon = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.fullContainer}>
            <Pressable
                style={[styles.pressableContainer, !isExpanded && { borderBottomWidth: 0 }, isExpanded && { backgroundColor: '#e7e7e7' }]}
                //   title={title}
                //   trailing={() => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
                onPress={toggleExpansion}
            >
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.viewGrams}>
                    <Text style={styles.text}>{grams}</Text>
                </View>
            </Pressable>
            {isExpanded && (
                <View style={styles.spoilerContent}>
                    {children}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    fullContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
    },
    pressableContainer: {
        padding: 8,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        // padding: 8
    },
    spoilerContent: {
        padding: 5
    },
    viewGrams: {
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: '#e7e7e7'
        // borderLeftColor: '#ccc',
        // borderLeftWidth: 1,
        // paddingHorizontal: 5
    },
    text: {
        fontWeight: '300',
        fontSize: 18,
        color: '#111',
    }
})