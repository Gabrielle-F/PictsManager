import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import TxtInputAlbum from '../../components/TxtInputAlbum';
import SelectVisibilityDropDown from "../../components/SelectVisibilityDropDown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const AddAlbumScreen = () => {
    const navigation = useNavigation();
    const [name, setAlbumName] = useState('');

    const handleSave = async () => {
        const token = await AsyncStorage.getItem("jwtToken");

        fetch("http://10.52.4.201:8080/albums", {
            method: "POST",
            headers: {
                "Authorization": token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: name,
                description: "",
            }),
        })
            .then((response) => response.json())
            .then(async (responseData) => {
                navigation.navigate('AlbumsList');
            })
        console.log('Album saved:', name);
    };

    return (
        <View style={styles.container}>
            <Header showTitle={false} showBackButton={true} />
            <View>
                <TxtInputAlbum text={name} title={setAlbumName} />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EC7272',
    },
    containerSecondary: {
        marginStart: 20,
    },
    visibilityText: {
        color: '#FFF5EA',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    saveButton: {
        backgroundColor: '#FFF5EA',
        height: 50,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#201717',
    },
    saveButtonText: {
        color: '#201717',
        fontSize: 22,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#201717',
    },
});

export default AddAlbumScreen;

