import { View, StyleSheet, Text, Dimensions } from 'react-native';

const scrWidth = Dimensions.get('window').width

export const ProgressBar = ({ percent = 0 }) => {

    return (
        <View style={{ display: 'flex', width: scrWidth*0.8 }}>
            <View style={styles.container}>
                <View style={[styles.progressBar, { width: `${percent}%` }]} />
            </View>
            <View style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: scrWidth*0.8 }}>
                <Text style={{ fontSize: 16, top: -1 }}>{percent}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        height: 20,
        overflow: 'hidden',
    },
    progressBar: {
        backgroundColor: '#3FB049',
        height: 20,
    },
});