import {Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../Config/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen({navigation}:any) {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
//registro
function register(){
  createUserWithEmailAndPassword(auth, correo, clave)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigation.navigate('Login')
    setCorreo('');
    setClave('');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    let mensaje=""
    let descripcion=""
    switch (errorCode) {
      case "auth/missing-email":
          mensaje="Correo Invalido"
          descripcion="Error de correo electronico, revise sus credenciales"
        
        break;
    case "auth/missing-password":
      mensaje="Contraseña incorrecta"
          descripcion="Error de contraseña, revise sus credenciales"
     break;
      default:
            mensaje="Error de registro"
          descripcion="revise sus credenciales"
        break;
    }    
    Alert.alert(mensaje,descripcion);
    // console.log(errorCode,errorMessage)
    // ..
  });
}
  return (
    <View style={styles.container}>

    <Text style={styles.title}>Registrate</Text>

    <TextInput placeholder='Ingrese correo' style={styles.input}
    onChangeText={()=>(setCorreo(""))}
      keyboardType='email-address'
      value={correo}
    /> 

    <TextInput placeholder='Ingrese contraseña' style={styles.input}
        onChangeText={()=>(setClave(""))}
        value={clave}
    />
     
   <TouchableOpacity style={styles.btn} onPress={()=>register()}>
      <Text style={styles.btnTxt}>Registrarse</Text>
   </TouchableOpacity>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green',
      width:150,
      height:45,
  },
  btnTxt:{
color:'white'
  },
  input:{
    backgroundColor:'white',
    width:200,
    height:50,
    marginBottom:8,
    padding:8
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:10
  }
});