import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from '../screens/auth/LogInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import AlbumListScreen from "../screens/home/AlbumListScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Login" component={LogInScreen} />
            <HomeStack.Screen name="SignUp" component={SignUpScreen} />
            <HomeStack.Screen name="AlbumList" component={AlbumListScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;
