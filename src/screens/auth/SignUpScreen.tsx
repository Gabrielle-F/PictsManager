import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import SwitchAuthButton from "../../components/SwitchAuthButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async () => {
        if (password.trim() === "" || email.trim() === "" || confirmPassword.trim() === "" || username.trim() === "") {
            setError("All fields are required");
        }

        if (password === confirmPassword) {
            fetch("http://10.68.244.77:8080/auth/signup", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then(async (responseData) => {
                    await AsyncStorage.setItem('jwtToken', responseData.token)
                    navigation.navigate('AlbumsList');
                })
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
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Enter your username"
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

                <View style={styles.input}>
                    <TextInput
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        autoCapitalize="none"
                        placeholder="Confirm password"
                        placeholderTextColor='#6b7280'
                        style={styles.inputControl}/>
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
                    <Text style={styles.signUpBtnText}>Sign Up</Text>
                </TouchableOpacity>

                <SwitchAuthButton presentationText={'Already have an account ?'} buttonText={'Log in here'} onClick={() => {
                    navigation.navigate('Login');
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
        marginVertical: 20
    },
    title: {
        fontSize: 25,
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
        color: '#222'
    },
    signUpBtn: {
        height: 50,
        backgroundColor: '#E0D98C',
        borderStyle: 'solid',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#120101',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    signUpBtnText: {
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

export default SignUpScreen;
