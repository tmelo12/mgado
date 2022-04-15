import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native'

import {Picker} from '@react-native-picker/picker'

import * as ImagePicker from 'react-native-image-picker'

import { MaskedTextInput } from "react-native-mask-text";


export default function CadastroAnimal ({ route, navigation }) {

  {/** VALORES CONSTANTES NO CADASTRO */}
  const especies   = ['Ave', 'Asinino','Bovino', 'Bulbalino', 'Caprino', 'Equino', 'Muare', 'Ovino', 'Suino']
  const sexos      = ['Macho','Fêmea']
  const categorias = ['Matriz','Reprodutor']
  const situacoes  = ['A Declarar','Declarado','Desligado']
  const campos     = ['Campo Manaus', 'Campo Manacapuru']
  const maes       = ['Fifi', 'Mumu']
  const allStatus  = ['No Campo', 'No Curral', 'Abate']


  {/** VARIÁVEIS */}
  const [nome, setNome]             = useState('')
  const [especie, setEspecie]       = useState('Ave')
  const [sexo, setSexo]             = useState('Macho')
  const [categoria, setCategoria]   = useState('Matriz')
  const [situacao, setSituacao]     = useState('A Declarar')
  const [campo, setCampo]           = useState('')
  const [mae, setMae]               = useState('')
  const [status, setStatus]         = useState('No Campo')
  const [nascimento, setNascimento] = useState('a')
  
  
  
  const [descricao, setDescricao] = useState('')
  const [foto, setFoto] = useState()

  return (        
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        
              <Text style={[styles.tittleCamp,{marginTop:25}]}>
                  Descreva as informações sobre o animal:
              </Text>

              {/** ESPECIE DO ANIMAL */}
              <Text style={styles.tittleCamp}>Espécie:<Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                    <Picker
                    prompt='Espécie'
                    selectedValue={especie}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setEspecie(itemValue)}
                  >
                    
                    {especies.map((especie, i) =>
                      <Picker.Item label={especie} value={especie} key={i} color='black'/>
                    )}
                  </Picker>
              </View>


              {/** NOME DO ANIMAL */}       
              <Text style={styles.tittleCamp}>Nome:<Text style={{color:'red'}}>*</Text></Text>

              <TextInput style={styles.textInput} 
                placeholder="Nome do animal"
                onChangeText={nome => setNome(nome)} value={nome}
              >                
              </TextInput>


              {/** SEXO DO ANIMAL */}
              <Text style={styles.tittleCamp}>Sexo: <Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                <Picker
                  prompt='Sexo'
                  selectedValue={sexo}
                  style={styles.dropdown}
                  onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
                >
                  {sexos.map((sexo, i) =>
                    <Picker.Item label={sexo} value={sexo} key={i} color='black'/>
                  )}
                </Picker>
              </View>

              <Text style={styles.tittleCamp}>Categoria:<Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                <Picker
                  prompt='Categoria'
                  selectedValue={categoria}
                  style={styles.dropdown}
                  onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
                >
                  {categorias.map((categoria, i) =>
                    <Picker.Item label={categoria} value={categoria} key={i} color='black'/>
                  )}
                </Picker>
              </View>

              
              <Text style={styles.tittleCamp}>Nascimento:<Text style={{color:'red'}}>*</Text></Text>

              <MaskedTextInput
                mask="99/99/9999"
                placeholder="DD/MM/YYYY"
                onChangeText={nascimento => setNascimento(nascimento)} value={nascimento}
                keyboardType="numeric"
                style={styles.textInput}
              />

              <Text style={styles.tittleCamp}>Campo Situado:<Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                <Picker
                  prompt='Campo'
                  selectedValue={campo}
                  style={styles.dropdown}
                  onValueChange={(itemValue, itemIndex) => setCampo(itemValue)}
                >
                  {campos.map((campo, i) =>
                    <Picker.Item label={campo} value={campo} key={i} color='black'/>
                  )}
                </Picker>
              </View>


              <Text style={styles.tittleCamp}>Mãe do animal:<Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                <Picker
                  prompt='Mãe'
                  selectedValue={mae}
                  style={styles.dropdown}
                  onValueChange={(itemValue, itemIndex) => setMae(itemValue)}
                >
                  {maes.map((mae, i) =>
                    <Picker.Item label={mae} value={mae} key={i} color='black'/>
                  )}
                </Picker>
              </View>

              <Text style={styles.tittleCamp}>Status:<Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                <Picker
                  prompt='Status'
                  selectedValue={status}
                  style={styles.dropdown}
                  onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                >
                  {allStatus.map((status, i) =>
                    <Picker.Item label={status} value={status} key={i} color='black'/>
                  )}
                </Picker>
              </View>

              <Text style={styles.tittleCamp}>Situação ADAF:<Text style={{color:'red'}}>*</Text></Text>
              
              <View style={styles.viewPicker}>
                <Picker
                  prompt='Situação ADAF'
                  selectedValue={situacao}
                  style={styles.dropdown}
                  onValueChange={(itemValue, itemIndex) => setSituacao(itemValue)}
                >
                  {situacoes.map((situacao, i) =>
                    <Picker.Item label={situacao} value={situacao} key={i} color='black'/>
                  )}
                </Picker>
              </View>
              
              <Text style={styles.tittleCamp}>Observação (Opcional):</Text>
              <TextInput style={styles.descricaoInput}
                placeholder="Descrição (Escreva informações que achar importante)"
                multiline={true}
                onChangeText={descricao => setDescricao(descricao)} value={descricao}
              >
              </TextInput>

              
              
              <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginTop:20}}>
                <View>
                  <TouchableOpacity style={styles.btnFoto}
                    onPress={() =>
                      ImagePicker.launchCamera(
                        {
                          mediaType: 'photo',
                          includeBase64: false,
                          maxHeight: 1000,
                          maxWidth: 1000,
                          saveToPhotos: false
                        },
                        res=>{
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
                        ,
                      )
                    }
                  >
                    <Text style= {{color: 'white'}}>Foto da Câmera</Text>
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
                      res=>{
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
                    <Text style= {{color: 'white'}}>Foto da Galeria</Text>
                  </TouchableOpacity>
                </View>
                <Image source= {{ uri: foto ? foto.uri :
                'https://image.shutterstock.com/image-vector/cute-cartoon-cow-illustration-600w-649400242.jpg'}}
                style={styles.fotoPet}/>
              </View>
              
              <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginTop:20}}>
                  <TouchableOpacity style={styles.btnSalvar}>
                    <Text style= {{color: 'white'}}>Salvar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.btnCancelar}
                    onPress={() =>navigation.goBack() }
                  >
                    <Text style= {{color: 'white'}}>Voltar</Text>
                  </TouchableOpacity>
              </View>

      </View>
      </ScrollView>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    textInput:{
      width:300,
      height:50,
      borderRadius:10,
      textAlign: "center",
      marginTop:10,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white'
    },
    descricaoInput:{
      textAlign: "center",
      width:300,
      height:100,
      borderRadius:10,
      marginTop:10,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
    },
    btnSalvar:{
      borderWidth:1,
      borderColor: '#00b33c',
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#00b33c',
      borderRadius:10
    },
    btnCancelar:{
      margin:10,
      borderWidth:1,
      borderColor: '#ff3333',
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ff3333',
      borderRadius:10
    },
    btnFoto:{
      margin:10,
      borderWidth:1,
      borderColor: '#1a75ff',
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a75ff',
      borderRadius:10
    },
    logoFundo:{
      flex: 1,
      justifyContent: "center",
      width: 250,
      height: 300
    },
    nome:{
      margin:30,
      height:60,
      width:310,
      color:'black',
    },
    fotoPet:{
      width:150,
      height:150,
      borderRadius:10
    },
    container:{
      flex:1,
      alignItems: "center",
      backgroundColor:'#fffff'
    },
    dropdown:{
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
      width: 300,
      borderRadius:10,
      textAlign: "center",
      color:'black',
    },
    viewPicker:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 1,
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      borderRadius:10
    },
    input: {
      height: 40,
      marginHorizontal: 0,
      marginVertical: 5,
      paddingHorizontal: 5,
      borderWidth: 1,
      borderRadius: 10,
    },
    tittleCamp:{
      marginTop:10 ,
      color: 'black'
    }
  });