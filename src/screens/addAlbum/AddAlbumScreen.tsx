import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import TxtInputAlbum from '../../components/TxtInputAlbum';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const AddAlbumScreen = () => {
    const navigation = useNavigation();
    const [name, setAlbumName] = useState('');

    const handleSave = async () => {
        const token = await AsyncStorage.getItem("jwtToken");

        fetch("http://10.68.244.77:8080/albums", {
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
            <Header showTitle={false} showBackButton={true}/>
            <View style={styles.txtInputStyle}>
                <TxtInputAlbum text={name} title={setAlbumName}/>
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
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
    },
    txtInputStyle: {
        marginStart: 60,
        marginBottom: 180,
    },
    visibilityText: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 80,
        marginBottom: 30,
    },
    selectVisibility: {
        marginTop: 20,
        marginBottom: 20
    },
    saveButton: {
        backgroundColor: '#FFF5EA', // Couleur du bouton modifiée pour correspondre au thème
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginStart: 60,
        marginEnd: 60,
        marginTop: 20,
        marginBottom: 120,
    },
    saveButtonText: {
        color: '#120101',
        fontSize: 22,
        fontWeight: 'bold',
    },
    saveConfirmation: {
        color: 'green',
        textAlign: 'center',
        marginTop: 10,
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

