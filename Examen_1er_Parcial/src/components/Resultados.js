import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';

export default function Resultados(props) {
    const { contador, contador2, contador3, boton } = props
    console.log(boton)
    var multiplos = "", multiplicacion = "", fibo = "", resu = "";
    var multi = 1, fibonacci = 0;

    const Multiplos = () => {
        for (let i = 1; i < Number(contador); i++) 
            {
                multiplos = multiplos + (i*2) + ", ";
            }
            resu = multiplos
        return(resu)
    };

    const Fibonacci = () => {
        for (let i = 0; i < Number(contador2); i++) 
            {
                if (i === 0){
                    fibo = fibo + 0 + ', '
                } else if (i === 1){
                    fibo = fibo + 1 + ', '
                } else if (i > 1) {
                    fibonacci = (i-1) + (i-2)
                    fibo = fibo + fibonacci + ', '
                }
            }
            resu = fibo
        return(resu)
    };

    const Multiplicacion = () => {
        for (let i = 1; i < Number(contador3); i++) 
            {
                multi = multi * i;
                multiplicacion = multiplicacion + i + " * ";
            }
            resu = multiplicacion + '\nresultado = ' + multi 
        return(resu)
    };

    
    switch(boton){
        case 1:
            Multiplos();
            break;
        case 2:
            Fibonacci();
            break;
        case 3:
            Multiplicacion();
            break;
    }


    return (
        <View style={styles.container}>
            <View style={styles.viewRes}>
                <View style={styles.viewInputs}>
                    <Text style={styles.res}>{resu}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25
    },
    viewRes: {
        top: 50,
        height: 250,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
    },
    res: {
        borderColor: colors.PRIMARY_COLOR,
        color: "#ffff",
        fontSize: 18,
        textAlign: 'justify',
        margin: 10
    }
});
