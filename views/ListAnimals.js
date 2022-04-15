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
import Icon from 'react-native-vector-icons/FontAwesome'
import { DataTable, Divider } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default function ListAnimals({
  navigation,
  route
}) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 0.6]}
      colors={['#407258', '#37624c', '#2e513f']} >



      <SafeAreaView style={{ width: '100%', height: '100%', }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.containerMid}>
              <Text style={styles.title}>Lista de {route.params.gen} {route.params.statusAnimal}</Text>
            </View>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={styles.alignTable}>
                  <Text style={styles.headerTable}>ID</Text>
                </DataTable.Title>

                <DataTable.Title style={styles.alignTable}>
                  <Text style={styles.headerTable}>Nome</Text>
                </DataTable.Title>

                <DataTable.Title style={styles.alignTable}>
                  <Text style={styles.headerTable}>Meses</Text>
                </DataTable.Title>

                <DataTable.Title style={styles.alignTable}>
                  <Text style={styles.headerTable}>Detalhes</Text>
                </DataTable.Title>
              </DataTable.Header>

              <Divider />

              <DataTable.Row>
                <DataTable.Cell style={styles.alignTable}>1</DataTable.Cell>

                <DataTable.Cell style={styles.alignTable}>Mimosa</DataTable.Cell>

                <DataTable.Cell style={styles.alignTable}>20</DataTable.Cell>

                <DataTable.Cell style={styles.btnDetails}>
                  <TouchableOpacity
                    onPress={() => {navigation.navigate('AnimalDetail', {
                        animal: {
                            id: 1,
                            idade: 20,
                            nome:'Mimosa'
                        }
                    
                    } )} }
                  >
                    <Icon name="list-ol" size={20} color="#fff" />
                  </TouchableOpacity>
                </DataTable.Cell>

              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell style={styles.alignTable}>2</DataTable.Cell>

                <DataTable.Cell style={styles.alignTable}>Tomás</DataTable.Cell>

                <DataTable.Cell style={styles.alignTable}>12</DataTable.Cell>

                <DataTable.Cell style={styles.btnDetails}>
                  <TouchableOpacity
                    onPress={() => setModalF1324Visible(true)}
                  >
                    <Icon name="list-ol" size={20} color="#fff" />
                  </TouchableOpacity>
                </DataTable.Cell>

              </DataTable.Row>

            </DataTable>


            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
              <Text style={{ color: 'white' }}>Voltar</Text>
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
  btnBack:{
    margin:10,
    borderWidth:1,
    borderColor: '#ff3333',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ff3333',
    borderRadius:10,
    alignSelf:'center'
  },
  alignTable:{
  },
  headerTable:{
      fontWeight: 'bold',
      fontSize: 15
  },
});