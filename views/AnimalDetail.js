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
        <SafeAreaView style={{ width: '100%', height: '100%', }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerMid}>
                        <Text style={styles.title}>{route.params.animal.nome}</Text>
                    </View>

                    <Image source={require('../images/mimosa.jpeg')}
                        style={styles.avatar} />

                    <Text style={styles.info}>Espécie: Bovino</Text>

                    <Text style={styles.info}>Sexo: Fêmea</Text>

                    <Text style={styles.info}>Categoria: Matriz</Text>

                    <Text style={styles.info}>Nascimento: 20/02/2022</Text>

                    <Text style={styles.info}>Idade: 1 mes(es)</Text>

                    <Text style={styles.info}>Localizada em: Fazenda de Manacapuru</Text>

                    <Text style={styles.info}>Mãe: Bete</Text>

                    <Text style={styles.info}>Status: Abate</Text>

                    <Text style={styles.info}>Situação ADAF: A Declarar</Text>

                    <Text style={styles.info}>Observação: ficou doente no dia 05/03/2022</Text>


                    <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                        <Text style={{ color: 'white' }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
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
        color: 'black',
        fontFamily: 'Roboto'
    },
    btnBack: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#ff3333',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3333',
        borderRadius: 10,
        alignSelf: 'center'
    },
    avatar: {
        width: 200,
        height: 200,
        marginTop: 15,
        alignSelf: 'center'
    },
    info:{
        color: 'black',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 15
    }
});