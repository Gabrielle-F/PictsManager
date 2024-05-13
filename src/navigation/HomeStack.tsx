import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar} from 'react-native';

import LogInScreen from '../screens/auth/LogInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import AlbumListScreen from "../screens/home/AlbumListScreen";
import AddAlbumScreen from "../screens/addAlbum/AddAlbumScreen";
import {colors} from "../styles/colors";
import TakePictureScreen from "../screens/addPicture/TakePictureScreen";
import AlbumListScreenDebug from "../screens/home/AlbumListScreenDebug";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    // @ts-ignore
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#201717'}}>
            <StatusBar backgroundColor={'#EC7272'}/>
            <HomeStack.Navigator screenOptions={{
                headerShown: false,
                //headerStatusBarHeight: Platform.OS === 'ios' ? 50 : 0 // Ajustement pour la "Dynamic Island"
            }}>
                <HomeStack.Screen name="Login" component={LogInScreen} initialParams={{ backgroundColor: colors.primary }}/>
                <HomeStack.Screen name="SignUp" component={SignUpScreen} initialParams={{ backgroundColor: colors.primary }}/>
                <HomeStack.Screen name="AlbumsList" component={AlbumListScreenDebug} initialParams={{ backgroundColor: colors.headerAndFooter }}/>
                <HomeStack.Screen name="AddAlbum" component={AddAlbumScreen} initialParams={{ backgroundColor: colors.headerAndFooter }}/>
                { /* <HomeStack.Screen name="TakePicture" component={TakePictureScreen} initialParams={{ backgroundColor: colors.headerAndFooter }}/> */}
            </HomeStack.Navigator>
        </SafeAreaView>
    );
};

export default HomeStackNavigator;

