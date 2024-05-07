import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather} from "@expo/vector-icons";

interface HeaderProps {
    showTitle?: boolean;
    title?: string;
    showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showTitle, title, showBackButton }) => {
    const navigation = useNavigation();

    const handleBackButtonPress = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container, { width: '100%' }]}>
            {showBackButton && (
                <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
                    <Feather name="arrow-left-circle" size={30} color="#E0D98C" />
                </TouchableOpacity>
            )}
            {showTitle && <Text style={styles.title}>{title}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // Modifier cette ligne
        alignItems: 'center',
        height: 65,
        backgroundColor: '#201717',
        borderBottomWidth: 1,
        borderBottomColor: '#201717',
    },
    shadowAndroid: {
        elevation: 5,
    },
    shadowIOS: {
        shadowColor: 'rgba(32,23,23,0.93)',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    backButton: {
        marginStart: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF5EA',
        marginStart: 20,
    },
});

export default Header;
