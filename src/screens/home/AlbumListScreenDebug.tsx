import {View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AlbumListScreenDebug = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem("jwtToken");
            fetch(`http://10.68.244.77:8080/albums`, {
                headers: {
                    "Authorization": token
                }
            })
                .then((resp) => resp.json())
                .then((json) => setData(json))
                .catch((error) => console.error(error));
        };
        fetchData();
    }, []); // Le tableau vide indique que cet effet ne s'exécute qu'une fois après le premier rendu.

    console.log("coucou");

    return (
        <View>
            {JSON.stringify(data)}
        </View>
    );
}

export default AlbumListScreenDebug;
