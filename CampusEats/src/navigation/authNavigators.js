import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';


const Auth =createStackNavigator();
const authNavigators = () => {
  return (
    <Auth.Navigator>
        <Auth.Screen
            name="SignInWelcomeScreen"
            component={SignInWelcomeScreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
        <Auth.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
      
        <Auth.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
        <Auth.Screen
            name="RestaurantsMapScreen"
            component={RestaurantsMapScreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />

    </Auth.Navigator>
  )
}

export default authNavigators

const styles = StyleSheet.create({})