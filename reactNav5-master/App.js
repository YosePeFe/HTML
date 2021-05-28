import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Contact from './src/screens/Contact';
import About from './src/screens/About';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </>
  );
}