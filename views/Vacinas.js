import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Vancinas({route, navigation}) {
  return ( 
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.containerMid}>
          <Text style={styles.title}>Vacinas</Text>
      </View>

    </View>
    </ScrollView>     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft: 25,
    marginRight: 25
  },
  title:{
    fontSize:32,
    marginTop: 30,
  },
});