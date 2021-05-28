import React from 'react';
import {View, Text, Button} from 'react-native';

export default function About(props){
    const {navigation} = props;
    return(
        <View>
            <Text>
                Estas en About
            </Text>
            <Button title='ir a Home' onPress={()=>navigation.navigate('home')}/>
            <Button title='ir a Contact' onPress={()=>navigation.navigate('contact')}/>
            <Button title='ir a Screen 1' onPress={()=>navigation.navigate('screen1')}/>
            <Button title='ir a Screen 2' onPress={()=>navigation.navigate('screen2')}/>
        </View>
    )
}