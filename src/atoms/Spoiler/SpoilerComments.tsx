import { Icon, ListItem, Pressable } from '@react-native-material/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* @ts-ignore */
export const SpoilerComments = ({ title, children, leadingIcon = ''}) => {
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
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
    },
    pressableContainer: {
        height: 48,
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
        fontWeight: '300',
        fontSize: 18,
        color: '#111',
    }
})