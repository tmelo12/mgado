import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export default function Sincronizar({route, navigation}) {
  return (
    <LinearGradient 
    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]}
    colors={['#407258', '#37624c','#2e513f' ]} >

    <SafeAreaView style = {{ width:'100%', height:'100%' }}>
      <ScrollView>  
        <View style={styles.container}>
          <Text style={styles.title}>Sincronizar <MaterialCommunityIcons name="cached" color={'#fff'} size={30} /></Text>
            <Image
              source={require('../images/logo_sinc.png')}
              style={styles.img}
            />

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{color:'black',fontFamily:'notoserif',fontSize: 15}}>Enviar Alterações <MaterialCommunityIcons name="cached" color={'#008000'} size={20} /></Text>
            </TouchableOpacity>

            <Text style={styles.mensage}>Você não possui dados para atualizar no nomento.</Text>
    
        </View>
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 25,
    marginRight: 25,
  },
  title:{
    fontSize: 32,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#b3ffd9",
    padding: 10,
    borderColor:'#000',
    borderWidth: 1,
    borderRadius: 20,
  },
  mensage:{
    color: 'white',
    textAlign: 'center',
    fontFamily:'notoserif'
  },
  img:{
    alignSelf: 'center'
  }
});