import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                    <Text style={styles.inputLabel}>Username</Text>
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

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        autoCapitalize="none"
                        placeholder="********"
                        placeholderTextColor='#6b7280'
                        style={styles.inputControl}/>
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => console.log("Sign Up button pressed")}>
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
        fontSize: 18
    }
});

export default SignUpScreen;
