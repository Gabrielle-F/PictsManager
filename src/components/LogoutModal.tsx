import React, { useState } from 'react';
import { Modal, View, Text, Button, TouchableOpacity } from 'react-native';

// @ts-ignore
const LogoutModal = ({ modalVisible, closeModal, handleSelect, handleAccount, handleLogout }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start', backgroundColor: 'translucent' }}>
                <View style={{ backgroundColor: 'transparent', padding: 20, width: '60%', marginBottom: 20 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#E0D98C', padding: 15, borderRadius: 16, borderStyle: 'solid', borderWidth: 1, borderColor: '#FFF5EA', marginBottom: 10 }}
                        onPress={handleSelect}
                    >
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Select</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#E0D98C', padding: 15, borderRadius: 16, borderStyle: 'solid', borderWidth: 1, borderColor: '#FFF5EA', marginBottom: 10 }}
                        onPress={handleAccount}
                    >
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#E0D98C', padding: 15, borderRadius: 16, borderStyle: 'solid', borderWidth: 1, borderColor: '#FFF5EA', marginBottom: 10 }}
                        onPress={handleLogout}
                    >
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Log Out</Text>
                    </TouchableOpacity>
                    <Button title="Close" onPress={closeModal} />
                </View>
            </View>
        </Modal>
    );
};

export default LogoutModal;
