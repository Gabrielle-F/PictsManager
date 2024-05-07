import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface FooterProps {
    showMenuBtn: boolean;
    showAddAlbumBtn: boolean;
    showAddPictureBtn: boolean;
    showSearchBtn: boolean;
    menuBtn?: any;
    addAlbumBtn?: any;
    addPictureBtn?: any;
    searchBtn?: any;
}
// @ts-ignore
const Footer : React.FC<FooterProps> = ({ showMenuBtn, showAddAlbumBtn, showAddPictureBtn, showSearchBtn, menuBtn, addAlbumBtn, addPictureBtn, searchBtn }) => {
    return (
        <View style={styles.bottomBar}>
            {showMenuBtn && (
                <TouchableOpacity style={styles.button} onPress={menuBtn}>
                    <Feather name="menu" size={30} color="#E0D98C" />
                </TouchableOpacity>
            )}
            {showAddAlbumBtn && (
                <TouchableOpacity style={styles.button} onPress={addAlbumBtn}>
                    <Feather name="folder-plus" size={30} color="#E0D98C" />
                </TouchableOpacity>
            )}
            {showAddPictureBtn && (
                <TouchableOpacity style={styles.button} onPress={addPictureBtn}>
                    <Feather name="camera" size={30} color="#E0D98C" />
                </TouchableOpacity>
            )}
            {showSearchBtn && (
                <TouchableOpacity style={styles.button} onPress={searchBtn}>
                    <Feather name="search" size={30} color="#E0D98C" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#201717',
        borderTopWidth: 1,
        borderTopColor: '#201717',
        paddingBottom: 15,
        paddingTop: 15,
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Footer;

