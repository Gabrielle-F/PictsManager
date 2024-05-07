import React, { useState } from 'react';
import { Modal, View, Text, Button, TouchableOpacity } from 'react-native';

// @ts-ignore
const AddPictureModal = ({ modalVisible, closeModal, handleTakePhoto, handleSelectPhoto }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'translucent', padding: 20 }}>
                    <View style={{ backgroundColor: '#201717', borderRadius: 10, padding: 20, width: '80%' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#E0D98C', padding: 15, borderRadius: 16, marginBottom: 10 }}
                            onPress={handleTakePhoto}
                        >
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Take a picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#E0D98C', padding: 15, borderRadius: 16, marginBottom: 10 }}
                            onPress={handleSelectPhoto}
                        >
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Select a picture</Text>
                        </TouchableOpacity>
                        <Button title="Fermer" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default AddPictureModal;

