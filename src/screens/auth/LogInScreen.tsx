import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const LogInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>PictsManager</Text>
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="johnexample@email.com"
                        placeholderTextColor='#6b7280'
                        style={styles.inputControl}/>
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        placeholder="********"
                        placeholderTextColor='#6b7280'
                        style={styles.inputControl}/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={
                    () => {
                        if (email !== "" && password !== "") {
                            console.log("Log in successful");
                            navigation.navigate('AlbumList');
                        } else {
                            console.log("Log in failed");
                        }
                    }
                }>
                    <Text style={styles.loginBtnText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={
                    () => {
                        navigation.navigate('SignUp');
                    }
                }>
                    <Text style={styles.loginBtnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#EC7272"
    },
    header: {
        marginVertical: 20
    },
    imgHeader: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#120101',
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        marginBottom: 16
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8
    },
    inputControl: {
        height: 44,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222'
    },
    loginBtn: {
        backgroundColor: '#E0D98C',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#120101',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    loginBtnText: {
        color: '#120101',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
    }
})

export default LogInScreen;
