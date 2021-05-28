import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import AboutStack from './AboutStack';
import Screen1Stack from './Screen1Stack';
import Screen2Stack from './Screen2Stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function Navigation() {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name = "home" component={Home} options={{title: 'Home'}}/> */}
            <Tab.Screen name="home" component={HomeStack} options={{
                title: 'home Stack method', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color="#37007A" size={size} />
                ),
            }} />
            <Tab.Screen name="Contact" component={ContactStack} options={{
                title: 'Contact', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cellphone-settings" color="#37007A" size={size} />
                ),
            }} />
            <Tab.Screen name="About" component={AboutStack} options={{
                title: 'Acerca de nosotros', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="information-outline" color="#37007A" size={size} />
                ),
            }} />
            <Tab.Screen name="Screen1" component={Screen1Stack} options={{
                title: 'Screen1', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="fullscreen" color="#37007A" size={size} />
                ),
            }} />
            <Tab.Screen name="Screen2" component={Screen2Stack} options={{
                title: 'Screen2', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="fullscreen-exit" color="#37007A" size={size} />
                ),
            }} />
        </Tab.Navigator>
    )
}


/* const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component={Home} options={{title: 'Home'}}/>
            <Stack.Screen name = "contact" component={Contact} options={{title: 'Contact'}}/>
            <Stack.Screen name = "about" component={About} options={{title: 'Acerca de nosotros'}}/>
        </Stack.Navigator>
    )

} */