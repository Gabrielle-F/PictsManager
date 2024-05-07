import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

// @ts-ignore
const TxtInputAlbum = ({ text, title }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                onChangeText={title}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter album name"
                placeholderTextColor='#FFF5EA'
                style={styles.inputControl}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20
    },
    inputControl: {
        color: '#FFF',
        backgroundColor: '#201717',
        opacity: 0.6,
        width: 300,
        height: 60,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontWeight: '500',
    },
});

export default TxtInputAlbum;
