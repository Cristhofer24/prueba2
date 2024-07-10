import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import GaleriaScreen from '../Screens/GaleriaScreen';
import CamaraScreen from '../Screens/CamaraScreen';
import MapScreen from '../Screens/MapScreen';

const stack=createStackNavigator();

function MyStackNavigator(){
return(
    <stack.Navigator  screenOptions={{ headerShown: false }}>
    <stack.Screen name='Login' component={LoginScreen}/>
    <stack.Screen name='Registro' component={RegisterScreen}/>
    <stack.Screen name='Galeria' component={GaleriaScreen}/>
    <stack.Screen name='Camara' component={CamaraScreen}/>
    <stack.Screen name='Mapa' component={MapScreen}/>
    <stack.Screen name='Drawer' component={MyDrawerNavigation}/>
    </stack.Navigator>
);

}
const Drawer=createDrawerNavigator();

function MyDrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Galeria' component={GaleriaScreen}/>
            <Drawer.Screen name='Camara' component={CamaraScreen}/>
            <Drawer.Screen name='Mapa' component={MapScreen}/>
            <Drawer.Screen name='Top' component={MyTopNavigator}/>
        </Drawer.Navigator>
    )
}
const Top=createMaterialTopTabNavigator();

function MyTopNavigator(){
    return(
        <Top.Navigator>
            <Top.Screen name='Galeria'  component={GaleriaScreen}/>
            <Top.Screen name='Camara'  component={CamaraScreen}/>
            <Top.Screen name='Mapa'  component={MapScreen}/>
        </Top.Navigator>
    )
}


export default function MainNavigator() {
  return (
    <NavigationContainer>
       <MyStackNavigator/>
    </NavigationContainer>
  )
}
