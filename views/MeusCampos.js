import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Inicio({route, navigation}) {


  return (
    
    <LinearGradient 
    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]}
    colors={['#407258', '#37624c','#2e513f' ]} >

      <SafeAreaView style = {{ width:'100%', height:'100%' }}>
        <ScrollView>   
        <View style={styles.container}>
            <Text style={styles.title}>Meus Campos <MaterialCommunityIcons name="barn" color={'#fff'} size={30} /></Text>
              
            <View style={styles.container}>
              <Text style={styles.name}>Fazenda de Manaus</Text>
              <View style={styles.cards}>
              <Image style={styles.cardPhoto}
                source={require('../images/fazenda.jpg')}
              />
                <View style={styles.cardContent}>
                  <Text style={{fontWeight:'bold', textAlign: 'center', marginBottom:15, color:'white'}}>Localização</Text>
                  <Text style={styles.cardText}>Cidade: Manaus</Text>
                </View>
              </View>
            </View>

            <View>  
              <TouchableOpacity style={styles.btnAdd}
                onPress={() => {navigation.navigate('CadastroCampo', {email:route.params.user.params.user.email} )}    }
              >
                <MaterialCommunityIcons name="plus" color={'#fff'} size={50} />
              </TouchableOpacity>
            </View>
            
            
            
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
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    fontSize: 32,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto'
  },
  btnAdd:{
    backgroundColor: '#009900',
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  },
  card:{
    width: 100,
    height: 100,
    backgroundColor: '#008000',
    marginTop: 25
  },
  cards:{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  cardContent:{
    width: 100, 
    height: 120, 
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
  cardPhoto:{
    width: 150, 
    height: 120, 
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  cardText:{
    marginLeft: 5,
    color: 'white',
    fontFamily: 'notoserif'
  },
  name:{
    fontSize: 15,
    marginTop:5,
    marginBottom: -10,
    color:'white'
  },
});