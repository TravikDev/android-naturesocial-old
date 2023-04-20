import { Icon } from '@react-native-material/core';
import { View, Text, StyleSheet, Pressable } from 'react-native';

/* @ts-ignore */
export const GardenStateIndicator = ({ title, subTitle = '', value = '', leadingIcon = '', onClick = f => f }) => {

    return (
        <View style={styles.fullContainer}>
            <Pressable
                style={[styles.pressableContainer]}
                //   title={title}
                //   trailing={() => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
                onPress={onClick}
            >
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: "center" }}>
                    {leadingIcon && <View style={{ borderRightColor: '#ccc', borderRightWidth: 1, paddingRight: 4 }}><Icon name={leadingIcon} size={26} /></View>}
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 4 }}>
                        {subTitle 
                          ? <>
                          <Text style={styles.titleWithDesc}>{title}</Text>
                          <Text style={styles.subTitle}>{subTitle}</Text>
                           </>
                          : <Text style={styles.text}>{title}</Text>}
                    </View>
                </View>
                <View style={styles.viewValue}>
                    <Text style={styles.textOn}>{value}</Text>
                </View>
            </Pressable>
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
        gap: 5,
        // padding: 8
    },
    spoilerContent: {
        padding: 5
    },
    viewValue: {
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
    },
    titleWithDesc: {
        fontWeight: '300',
        fontSize: 16,
        color: '#111',
    },
    textOn: {
        fontWeight: '300',
        fontSize: 18,
        color: '#111',
    },
    textOff: {
        fontWeight: '300',
        fontSize: 18,
        color: '#bb0000',
    },
    subTitle: {
        fontSize: 12, 
        fontWeight: '300', 
        color: '#111'
    }
})