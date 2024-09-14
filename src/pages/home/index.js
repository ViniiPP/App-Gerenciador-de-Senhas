import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import  Slider  from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassowrd } from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

export function Home() {
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />  

      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>  
        {/* barra de arrastar */}
        <Slider 
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={30}
          maximumTrackTintColor='lightgrey'
          thumbTintColor='lightgreen'
          value={size}
          onValueChange={(value) => {setSize(value.toFixed(0))}}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassowrd password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginBottom: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: 'lightgreen',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
