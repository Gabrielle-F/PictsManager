import React, {useState, useEffect, useRef} from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import Header from "../../components/Header";

// @ts-ignore
const TakePictureScreen = ({ navigation }) => {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const cameraRef = useRef<Camera>(null);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            // @ts-ignore
            setCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (!cameraPermission) {
            Alert.alert('Permission to access camera is required');
            return;
        }

        if(cameraRef.current ) {
            const photo = await cameraRef.current.takePictureAsync();
            // @ts-ignore
            setImage(photo.uri);
            navigation.navigate('AlbumsList')
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Header showBackButton={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {image ? (
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                ) : (
                    <Button title="Take Picture" onPress={takePicture} />
                )}
            </View>
        </View>
    );
};

export default TakePictureScreen;

