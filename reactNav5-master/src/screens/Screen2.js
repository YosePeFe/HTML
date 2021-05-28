import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Screen2(props){
    const {navigation} = props;
    return(
        <View>
            <Text>
                Estas en Screen2
            </Text>
            <Button title='ir a Home' onPress={()=>navigation.navigate('home')}/>
            <Button title='ir a Contact' onPress={()=>navigation.navigate('contact')}/>
            <Button title='ir a About' onPress={()=>navigation.navigate('about')}/>
            <Button title='ir a Screen 1' onPress={()=>navigation.navigate('screen1')}/>
        </View>
    )
}