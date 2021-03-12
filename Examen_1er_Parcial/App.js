import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button, TouchableOpacity} from 'react-native';

import colors from './src/utils/colors';
import Resultados from './src/components/Resultados';

export default function App(){
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);
  const [boton, setBoton] = useState(null);

return(
  <>
  <StatusBar barStyle="light-content"> </StatusBar>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Equipo Primas</Text>
    </SafeAreaView>
    <Resultados contador = {contador} contador2 = {contador2} contador3 = {contador3} boton = {boton}></Resultados>
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={()=>{
        setContador(prevContador => prevContador + 1),
        setBoton(1)
      }}><Text style={styles.text}>Números Pares</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button}  onPress={()=>{
        setContador2(prevContador2 => prevContador2 + 1),
        setBoton(2)
      }}><Text style={styles.text}>Serie de Fibonacci</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>{
        setContador3(prevContador3 => prevContador3 + 1),
        setBoton(3)
      }}><Text style={styles.text}>Multiplicación</Text></TouchableOpacity>
    </View> 
  </>
);
} 

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: colors.PRIMARY_COLOR_DARK,
    borderWidth: 2,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  titleApp: {
    fontSize:25,
    fontWeight: "bold",
    color: '#fff',
    marginTop:25
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30
  },
  button:{
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.PRIMARY_COLOR_DARK,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
    
  },
  text: {
    color:'#fff',
    fontSize: 18
  }
})