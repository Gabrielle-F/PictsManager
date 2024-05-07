import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddPictureModal from "../../components/AddPictureModal";
import LogoutModal from "../../components/LogoutModal";
import * as ImagePicker from 'expo-image-picker';

// Sample albums data
const albums = [
    { id: 2, title: 'Album 2', cover: 'cover2.jpg' },
    { id: 3, title: 'Album 3', cover: 'cover3.jpg' },
    { id: 4, title: 'Album 4', cover: 'cover4.jpg' },
    { id: 5, title: 'Album 5', cover: 'cover5.jpg' },
    { id: 6, title: 'Album 6', cover: 'cover6.jpg' },
    { id: 7, title: 'Album 7', cover: 'cover7.jpg' },
    { id: 8, title: 'Album 8', cover: 'cover8.jpg' },
    { id: 9, title: 'Album 9', cover: 'cover9.jpg' },
    { id: 10, title: 'Album 10', cover: 'cover10.jpg' },
    { id: 11, title: 'Album 11', cover: 'cover11.jpg' },
    // Add more albums as needed
];

const AlbumListScreen = () => {
    const navigation = useNavigation();
    const [showPopup, setShowPopup] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const openModal = () => {
        setShowPopup(true);
    };

    const openLogoutModal = () => {
        setShowLogoutPopup(true);
    }

    const closeModal = () => {
        setShowPopup(false);
    };

    const closeLogoutModal = () => {
        setShowLogoutPopup(false);
    }

    const handleTakePhoto = () => {
        // @ts-ignore
        navigation.navigate('TakePicture');
        closeModal();
    };

    const handleSelectPhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Sélectionner uniquement les images
            allowsEditing: true, // Permettre l'édition de l'image sélectionnée
            aspect: [4, 3], // Aspect ratio
            quality: 1, // Qualité de l'image
        });

        if (!result.canceled) {
            // @ts-ignore
            console.log("Selection:", result.assets);
            closeModal(); // Fermer la popup
        } else {
            console.log('Image selection cancelled');
            closeModal(); // Fermer la popup
        }
    };

    const handleLogout = () => {
        // @ts-ignore
        navigation.navigate('Login');
    }

    // @ts-ignore
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.cover }} style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#FFF5EA' }} />
            <Text style={styles.albumTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header showTitle={true} title="PictsManager" showBackButton={true}/>

            <FlatList
                data={albums}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <Footer
                showMenuBtn={true}
                showAddAlbumBtn={true}
                showAddPictureBtn={true}
                showSearchBtn={true}
                menuBtn={openLogoutModal}
                addAlbumBtn={() => {
                    // @ts-ignore
                    navigation.navigate('AddAlbum')
                }}
                addPictureBtn={openModal}
                searchBtn={() => {
                }}
            />
            <AddPictureModal
                modalVisible={showPopup}
                closeModal={closeModal}
                handleTakePhoto={handleTakePhoto}
                handleSelectPhoto={handleSelectPhoto}
            />
            <LogoutModal
                modalVisible={showLogoutPopup}
                closeModal={closeLogoutModal}
                handleSelect={closeLogoutModal}
                handleAccount={closeLogoutModal}
                handleLogout={handleLogout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#EC7272"
    },
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingEnd: 70,
        paddingStart: 70,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    albumTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF5EA',
    }
});

export default AlbumListScreen;

