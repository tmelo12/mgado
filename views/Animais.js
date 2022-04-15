import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontawesomeIcons from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default function Animais({route, navigation}) {
  return (
    <LinearGradient 
    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]}
    colors={['#407258', '#37624c','#2e513f' ]} >


    
    <SafeAreaView>
      
      <ScrollView>
        <View style={styles.container}>         
          
          <Text style={styles.title}>Meus Animais<MaterialCommunityIcons name="cow" color={'#fff'} size={30} /></Text>
          <Text style={styles.info}>Selecione um tipo de registro</Text>
          
          {/** INICIO DO CARD */}
          <View style={styles.container}>
            <Text style={styles.name}>Bovinos</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/bovinos-b.png')}
                    />
                </View>

                <TouchableOpacity
                onPress={() => {navigation.navigate('ListAnimalsByType',{type:'AD Nascimento'})}    }
                >
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Bulbalinos</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/bulbalinos-b.png')}
                    />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Caprinos</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/caprinos-b.png')}
                    />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Ovinos</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/ovinos-b.png')}
                    />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Equinos</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <MaterialCommunityIcons name="horse" color={'#fff'} size={50} />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Asininos</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/asininos-b.png')}
                    />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Muares</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/muares-b.png')}
                    />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={styles.name}>Aves</Text>
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                    <Image
                      style={styles.imgIcon}
                      source={require('../images/icones/aves-b.png')}
                    />
                </View>

                <TouchableOpacity>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>AD Nascimento</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsCard}>
                  <View style={styles.cardOption}>
                    <Text style={styles.info}>Ativo</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsCard}>
                  <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    marginTop: 15,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    flex:1,
                    marginRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={styles.info}>Desligado</Text>
                  </View>
                </TouchableOpacity>

              </View>

              {/** BOTAO PARA ADICIONAR NOVO ANIMAL */}
              <View>  
                <TouchableOpacity 
                  style={styles.btnAdd}
                  onPress={() => {navigation.navigate('CadastroAnimal')}    }
                >
                  <MaterialCommunityIcons name="plus" color={'#fff'} size={50} />
                </TouchableOpacity>
              </View>

          </View> 
          {/** FIM DO CARD */}

        </View>
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 32,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto'
  },
  card:{
    backgroundColor: '#fff',
    marginTop: 25,
  },
  cards:{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  cardContent:{
    width: 100, 
    height: 100, 
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flex:1,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  cardIcon:{
    width: 75, 
    height: 100, 
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    flex:-1,
    alignItems: "center"
  },
  cardText:{
    color: 'white',
    fontFamily: 'notoserif'
  },
  name:{
    fontSize: 15,
    marginTop:5,
    marginBottom: -10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  imgIcon:{
    width: 50, 
    height: 50,
    justifyContent: "center",
    flex:-1,
    alignItems: "center"
  },
  info:{
    textAlign: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  cardOption:{
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold', 
    textAlign: 'center', 
    color: 'white',
    fontFamily: 'notoserif',
  },
  btnAdd:{
    backgroundColor: '#009900',
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    alignSelf: 'flex-end'
  },
  imageBackground:{
    width: 'auto',
    height: 'auto'
  },
  btnsCard:{
    width: 75
  }
});