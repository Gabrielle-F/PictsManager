import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const SelectVisibilityDropDown = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const data = [
        { key: 1, label: 'Ami 1' },
        { key: 2, label: 'Ami 2' },
        { key: 3, label: 'Ami 3' },
        // Ajoutez autant d'options que nécessaire
    ];

    const handleSelection = (item) => {
        // @ts-ignore
        const index = selectedItems.findIndex((selectedItem) => selectedItem.key === item.key);
        if (index === -1) {
            // Si l'élément n'est pas déjà sélectionné, l'ajouter à la liste
            setSelectedItems([...selectedItems, item]);
        } else {
            // Si l'élément est déjà sélectionné, le retirer de la liste
            const updatedItems = [...selectedItems];
            updatedItems.splice(index, 1);
            setSelectedItems(updatedItems);
        }
    };

    // @ts-ignore
    // @ts-ignore
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
            <ModalSelector
                data={data}
                initValue="Select"
                onChange={(option) => handleSelection(option)}
                style={{ flex: 1 }}
                multiple={true} // Permet la sélection multiple
                selectedKey={selectedItems.map((item) => item.key)} // Définit les éléments sélectionnés
            />
            <TouchableOpacity style={{ marginLeft: 10 }}>
                {/* Ajoutez ici votre icône, par exemple une icône de flèche vers le bas */}
                <Feather name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default SelectVisibilityDropDown;
