import React from 'react';
import Home from '../screens/Home';
import Screen1 from '../screens/Screen1';
import Contact from '../screens/Contact';
import About from '../screens/About';
import Screen2 from '../screens/Screen2';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Screen2Stack() {
    return (
        <Stack.Navigator initialRouteName="Screen2">
            <Stack.Screen name="screen2" component={Screen2} options={{ title: 'Screen 2' }} />
            <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name="contact" component={Contact} options={{ title: 'Contact' }} />
            <Stack.Screen name="about" component={About} options={{ title: 'About' }} />
            <Stack.Screen name="screen1" component={Screen1} options={{ title: 'Screen 1' }} />
        </Stack.Navigator>
    )
}