import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {colors,parameters} from '../global/styles'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import { ClientStack } from './ClientStack'

const ClientTab = createBottomTabNavigator();
const ClientTabs = () => {
  return (
    <ClientTab.Navigator
        tabBarOptions ={{
            activeTintColor: colors.buttons
            
            
        }}
        >


        <ClientTab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <Icon
                        name='home'
                        type='material'
                        color={color}
                        size={size}
                    />
                )


            }}
        />
        <ClientTab.Screen
            name='SearchScreen'
            component={ClientStack}
            options={{
                headerShown:false,
                tabBarLabel:'Search',
                tabBarIcon:({color,size})=>(
                    <Icon
                        name='search'
                        type='material'
                        color={color}
                        size={size}
                    />
                )


            }}
        />
        <ClientTab.Screen
            name='MyOrderScreen'
            component={MyOrdersScreen}
            options={{
                headerShown:false,
                tabBarLabel:'My Orders',
                tabBarIcon:({color,size})=>(
                    <Icon
                        name='view-list'
                        type='material'
                        color={color}
                        size={size}
                    />
                )


            }}
        />
       
        <ClientTab.Screen
            name='MyAccount'
            component={MyAccountScreen}
            options={{
                headerShown:false,
                tabBarLabel:'My Account',
                tabBarIcon:({color,size})=>(
                    <Icon
                        name='person'
                        type='material'
                        color={color}
                        size={size}
                    />
                )


            }}
        />
       
    </ClientTab.Navigator>
  )
}

export default ClientTabs

const styles = StyleSheet.create({})