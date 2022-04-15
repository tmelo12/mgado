import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Telas
import Login from '../views/Login'
import CadastroCampo from '../views/CadastroCampo'
import ResumoAnimal from '../views/ResumoAnimal'
import CadastroAnimal from '../views/CadastroAnimal'
import ListAnimalsByType from '../views/ListAnimalsByType';
import ListAnimals from '../views/ListAnimals';
import AnimalDetail from '../views/AnimalDetail'

//Tabs
import Tabs from './TabNavigator'

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: null,
            headerTransparent: true,
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="Inicio"
          component={Tabs}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="CadastroCampo"
          component={CadastroCampo}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="ResumoAnimal"
          component={ResumoAnimal}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="CadastroAnimal"
          component={CadastroAnimal}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="ListAnimals"
          component={ListAnimals}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="ListAnimalsByType"
          component={ListAnimalsByType}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="AnimalDetail"
          component={AnimalDetail}
          backBehavior="history"
          options={{
            title: null,
            headerBackVisible: false,
            headerTransparent: true
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;