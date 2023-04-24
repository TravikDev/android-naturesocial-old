import { Icon, ListItem, Pressable } from '@react-native-material/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* @ts-ignore */
export const SpoilerGardenPage = ({ title, children, expanded = false, leadingIcon = ''}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.fullContainer}>
            <Pressable
                style={[styles.pressableContainer, isExpanded && { backgroundColor: '#e7e7e7' }]}
                //   title={title}
                //   trailing={() => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
                onPress={toggleExpansion}
            >
                <View style={{ gap: 5, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {leadingIcon && <Icon name={leadingIcon} size={26}/>}
                    <View>
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </View>
                <View style={styles.viewValue}>
                    <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} size={28} />
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
        // borderColor: '#ccc',
        // borderWidth: 1,
        overflow: 'hidden',
    },
    pressableContainer: {
        height: 48,
        padding: 8,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderColor: '#ccc',
        // borderBottomWidth: 1,
        // padding: 8
    },
    spoilerContent: {
        padding: 5
    },
    viewValue: {
        width: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: '#e7e7e7'
        // borderLeftColor: '#ccc',
        // borderLeftWidth: 1,
        // paddingHorizontal: 5
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#111',
    }
})