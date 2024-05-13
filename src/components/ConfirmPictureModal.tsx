import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

interface Props {
    modalVisible: boolean;
    photo: Picture;
    albums: { key: string, label: string }[];
    onSave: (selectedAlbums: string[]) => void; // Fonction appelée lorsque l'utilisateur clique sur "Save"
    onCancel: () => void; // Fonction appelée lorsque l'utilisateur clique sur "Cancel"
}

const ConfirmPictureModal: React.FC<Props> = ({ modalVisible, photo: undefined, albums, onSave, onCancel }) => {
    const [photo, setPhoto] = useState<string>();
    const [selectedAlbums, setSelectedAlbums] = useState<string[]>([]);

    const handleSave = () => {
        onSave(selectedAlbums);
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onCancel}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'translucent', padding: 20 }}>
                <View style={{ backgroundColor: '#201717', borderRadius: 10, padding: 20, width: '80%' }}>
                    <Image source={{ uri: photo }} style={{ width: 150, height: 150, marginBottom: 20, alignItems: 'center' }} resizeMode="cover" />
                    <ModalSelector
                        data={albums}
                        initValue="Choose album"
                        onChange={(option) => setSelectedAlbums(option ? [option.key] : [])}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity onPress={handleCancel} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSave} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmPictureModal;


