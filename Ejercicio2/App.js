import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Form';
import Resultados from './src/components/Resultados';

export default function App(){
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  
  const onSubmit = ()=>{
    console.log("numero 1 ->", num1)
    console.log("numero 2 ->", num2)
  }

return(
  <>
  <StatusBar barStyle="light-content"> </StatusBar>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Adquisición de variables</Text>
    </SafeAreaView>
    <Form setNum1 = {setNum1} setNum2 = {setNum2}/>
    <Resultados num1 = {num1} num2={num2}></Resultados>
    <View style={styles.btnenviar}>
      <Button title="Enviar" onPress={onSubmit}></Button>
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
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  titleApp: {
    fontSize:25,
    fontWeight: "bold",
    color: '#000',
    marginTop:25
  },
  btnenviar: {
    top: 200,
    color: "#ffff",
    width: 300,
    marginLeft: 25
  }
})
