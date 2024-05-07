import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// @ts-ignore
const SwitchAuthButton = ({ presentationText, buttonText, onClick }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.indicatorText}>{presentationText}</Text>
            <TouchableOpacity onPress={onClick}>
                <Text style={styles.actionText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    indicatorText: {
        color: 'white',
        marginRight: 5,
    },
    actionText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default SwitchAuthButton;
