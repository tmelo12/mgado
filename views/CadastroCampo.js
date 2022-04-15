import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'

import * as ImagePicker from 'react-native-image-picker'

import uuid from 'react-native-uuid';

import Farm from '../services/sqlite/farms/index'

export default function CadastroCampo({ route, navigation }) {

  const [nome, setNome] = useState('')
  const [local, setLocal] = useState('')

  const [foto, setFoto] = useState()

  function createFarm(){
    Farm.create( { id: uuid.v4(), name: nome, local: local, email_user: "thiago@exemplo.com" } )
    .then( id => console.log('Farm created with id: ' +id))
    .catch( e => console.log('Error created farm: '+e))
  }

  useEffect(() =>{
    
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <View style={styles.container}>

          <Text style={{ marginTop: 25, fontSize: 20, textAlign: 'center', color: 'black' }}>
            Descreva as informações sobre o campo:
          </Text>

          <Text style={{ marginTop: 10, color: 'black' }}>Nome:</Text>

          <TextInput style={styles.textInput}
            placeholder="Nome"
            onChangeText={nome => setNome(nome)}
            value={nome}
          >
          </TextInput>
          
          <Text style={{ marginTop: 10, color: 'black' }}>Local:</Text>

          <TextInput style={styles.textInput}
            placeholder="Local do Campo"
            onChangeText={local => setLocal(local)}
            value={local}
          >
          </TextInput>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginTop: 20 }}>
            <View>
              <TouchableOpacity style={styles.btnFoto}
                onPress={() =>
                  ImagePicker.launchCamera(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 1000,
                      maxWidth: 1000,
                    },
                    res => {
                      console.log('Response = ', res);
                      console.log('a uri = ', res.assets[0].uri);

                      if (res.didCancel) {

                        console.log('User cancelled image picker');

                      } else if (res.error) {

                        console.log('ImagePicker Error: ', res.error);

                      } else if (res.customButton) {

                        console.log('User tapped custom button: ', res.customButton);

                        alert(res.customButton);

                      } else {

                        let source = res;

                        setFoto(res.assets[0]);

                      }


                    }
                  )
                }
              >
                <Text style={{ color: 'white' }}>Foto da Câmera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnFoto}
                onPress={() =>
                  ImagePicker.launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 1000,
                      maxWidth: 1000,
                    },
                    res => {
                      console.log('Response = ', res);
                      console.log('a uri = ', res.assets[0].uri);

                      if (res.didCancel) {

                        console.log('User cancelled image picker');

                      } else if (res.error) {

                        console.log('ImagePicker Error: ', res.error);

                      } else if (res.customButton) {

                        console.log('User tapped custom button: ', res.customButton);

                        alert(res.customButton);

                      } else {

                        let source = res;

                        setFoto(res.assets[0]);

                      }


                    }
                  )
                }
              >
                <Text style={{ color: 'white' }}>Foto da Galeria</Text>
              </TouchableOpacity>
            </View>
            <Image source={{
              uri: foto ? foto.uri :
                'https://image.shutterstock.com/image-vector/rural-landscape-field-trees-grass-600w-1694307613.jpg'
            }}
              style={styles.fotoLocal} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity style={styles.btnSalvar}
              onPress ={ createFarm }
            >
              <Text style={{ color: 'white' }}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancelar}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ color: 'white' }}>Voltar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black'
  },
  btnSalvar: {
    borderWidth: 1,
    borderColor: '#00b33c',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b33c',
    borderRadius: 10
  },
  btnCancelar: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ff3333',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff3333',
    borderRadius: 10
  },
  btnFoto: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#1a75ff',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a75ff',
    borderRadius: 10
  },
  fotoLocal: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
});