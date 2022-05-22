import React from 'react';
import { NavigationContainer } from '@react-navigation / native';
import HomeScreen from './app/screens/HomeScreen';
import Daty from './app/screens/Daty';
import { createStackNavigator } from '@react-navigation / stack';
import 'react-native-gesture-handler';


const { Navigator, Screen } = createStackNavigator();
const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login">
            <Screen name="HomeScreen" component={HomeScreen}></Screen>
            <Screen name="Daty" component={Daty}></Screen>
        </Navigator>
    </NavigationContainer >
)
export default AppNavigator