import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';


export default function Inicio({ route, navigation }) {

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 0.6]}
      colors={['#407258', '#37624c', '#2e513f']} >

      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcome}>Bem vindo, {route.params.user.params.user.givenName}!</Text>
            <Text style={styles.title}>Resumo <MaterialCommunityIcons name="file" color={'#fff'} size={30} /></Text>
            <Text style={styles.info}>Aperte sobre o animal que deseja para visualizar um resumo completo.</Text>


            <Text style={styles.name}>Bovinos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Bovinos' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/bovinos-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Bulbalinos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Bulbalinos' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/bulbalinos-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Caprinos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Caprinos' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/caprinos-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Ovinos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Ovinos' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/ovinos-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Equinos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Equinos' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <MaterialCommunityIcons name="horse" color={'#fff'} size={50} />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Asininos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Asininos' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/asininos-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Muares</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Muares' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/muares-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>Aves</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ResumoAnimal', { tipo: 'Aves' }) }}
            >
              <View style={styles.cards}>
                <View style={styles.cardIcon}>
                  <Image
                    style={styles.imgIcon}
                    source={require('../images/icones/aves-b.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.tittleCard}>Contagem Registrada</Text>
                  <Text style={styles.cardText}>Macho(s): 15</Text>
                  <Text style={styles.cardText}>Femea(s): 10</Text>
                </View>
              </View>
            </TouchableOpacity>
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
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#008000',
    marginTop: 25
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  cardContent: {
    width: 100,
    height: 100,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  cardIcon: {
    width: 75,
    height: 100,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    flex: -1,
    alignItems: "center"
  },
  cardText: {
    marginLeft: 5,
    color: 'white',
    fontFamily: 'notoserif'
  },
  name: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: -10,
    marginLeft: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  imgIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    flex: -1,
    alignItems: "center"
  },
  info: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'notoserif'
  },
  tittleCard: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
    fontFamily: 'notoserif'
  },
  welcome: {
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    fontSize: 20
  }
});