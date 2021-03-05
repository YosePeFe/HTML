import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';
import Resultados from './Resultados';

export default function From(props){
    const{setNum1, setNum2} = props;

    console.log(props);

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput  placeholder = "Numero 1" keyboardType= "numeric" style = {styles.input} onChange = {(e)=> setNum1(e.nativeEvent.text)}
                    /*onChange= {(e)=> console.group(e.nativeEvent.text)}*//>
                <TextInput  placeholder = "Numero 2" keyboardType= "numeric" style = {[styles.input, styles.input2]} onChange = {(e)=> setNum2(e.nativeEvent.text)}
                    /*onChange= {(e)=> console.group(e.nativeEvent.text)}*//>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm:{
        top: 50,
        width: "85%",
        paddingHorizontal:50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input:{
        height:50,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "50%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color:"#000",
        paddingHorizontal: 20
    },
    input2:{
        width: "50%",
        marginLeft: 5
    }
});