import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';

export default function Resultados(props) {
    const { num1, num2 } = props

    return (
        <View style={styles.viewRes}>
            <View style={styles.viewInputs}>
            <Text style={styles.res}>Suma = {Number(num1) + Number(num2)}</Text>
            <Text style={styles.res}>Resta = {Number(num1) - Number(num2)}</Text>
            <Text style={styles.res}>Multiplicación =  {Number(num1) * Number(num2)}</Text>
            <Text style={styles.res}>División = {Number(num1) / Number(num2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewRes: {
        top: 70,
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
        flexDirection: 'column'
    },
    res: {
        borderColor: colors.PRIMARY_COLOR,
        color: "#ffff",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    }
});