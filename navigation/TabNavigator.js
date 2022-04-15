import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Inicio from '../views/Inicio'
import CadastroAnimal from '../views/CadastroAnimal'
import MeusCampos from '../views/MeusCampos'
import MeusAnimais from '../views/Animais'
import Vacinas from '../views/Vacinas'
import Sincronizar from '../views/Sincronizar'

const Tab = createBottomTabNavigator();

export default function BottomTabs({route, navigation}) {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Resumo"
          component={Inicio}
          options={{
            tabBarLabel: 'Resumo',
            headerTransparent:true,
            title:null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file-account" color={color} size={size} />
            )
          }}
          initialParams={{ user : route.params }}
        />
        <Tab.Screen name="Meus Animais"
          component={MeusAnimais}
          options={{
            tabBarLabel: 'Meus Animais',
            headerTransparent:true,
            title:null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cow" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="Meus Campos"
          component={MeusCampos}
          options={{
            tabBarLabel: 'Meus Campos',
            headerTransparent:true,
            title:null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="barn" color={color} size={size} />
            )
          }}
          initialParams={{ user : route.params }}
        />
        <Tab.Screen name="Vacinas"
          component={Vacinas}
          options={{
            tabBarLabel: 'Vacinas',
            headerTransparent:true,
            title:null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="needle" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="Sincronizar"
          component={Sincronizar}
          options={{
            tabBarLabel: 'Sincronizar',
            headerTransparent:true,
            title:null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
  );
}