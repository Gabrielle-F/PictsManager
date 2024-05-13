import {View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AlbumListScreenDebug = async () => {
    const [data, setData] = useState([]);
    const token = await AsyncStorage.getItem("jwtToken");
    
    useEffect(() => {
        fetch(`http://10.52.4.201:8080/albums`, {
            headers: {
                "Authorization": token
            }
        })
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (
        <View />
    )
}

export default AlbumListScreenDebug;
