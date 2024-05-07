import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import SwitchAuthButton from "../../components/SwitchAuthButton";

const LogInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
            setError("All fields are required");
            console.log("All fields are required")
        } else if (email === "email" && password === "password") {
            //TODO : call method to login, if login successful navigate to AlbumsList else show error message
            console.log("Log in successful");
            navigation.navigate('AlbumsList');
        } else {
            setError("Invalid email or password");
            console.log("Invalid email or password")
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>PictsManager</Text>
                <View style={styles.input}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Enter email address"
                        placeholderTextColor='#6b7280'
                        style={styles.inputControl}/>
                </View>

                <View style={styles.input}>
                    <TextInput
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        placeholder="Enter password"
                        placeholderTextColor='#6b7280'
                        style={styles.inputControl}/>
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Log In</Text>
                </TouchableOpacity>

                <SwitchAuthButton presentationText={"Don't have an account ?"} buttonText={'Sign up here'} onClick={() => {
                    navigation.navigate('SignUp');
                }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#EC7272"
    },
    header: {
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#120101',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 60
    },
    input: {
        marginBottom: 16
    },
    inputControl: {
        height: 70,
        backgroundColor: '#FFF5EA',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 36,
        borderStyle: 'solid',
        borderColor: '#120101',
        borderWidth: 2,
        fontSize: 15,
        fontWeight: '500',
        color: '#120101',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginBtn: {
        height: 50,
        backgroundColor: '#E0D98C',
        borderStyle: 'solid',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#120101',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginBtnText: {
        color: '#120101',
        fontWeight: '600',
        fontSize: 18
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10
    }
});

export default LogInScreen;
