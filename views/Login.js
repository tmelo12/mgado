import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-google-signin/google-signin'

import { WEB_CLIENT_ID } from '../utils/keys'

import { firebase } from '@react-native-firebase/auth'

import React, { useState, useEffect } from 'react'

import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Linking
} from 'react-native';

export default function Login({navigation, route}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [error, setError] = useState(null)

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    })
  }

  useEffect(() => {
    getCurrentUserInfo()
    configureGoogleSign()
  }, [])

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      setUserInfo(userInfo)
      setError(null)
      setIsLoggedIn(true)
      const { accessToken, idToken } = await GoogleSignin.signIn()
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      )
      await firebase.auth().signInWithCredential(credential)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
        Alert.alert('Process Cancelled')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
        Alert.alert('Process in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
        Alert.alert('Play services are not available')
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString())
        setError(error)
      }
    }
  }

  async function getCurrentUserInfo() {
    try {
      const userInfo = await GoogleSignin.signInSilently()
      setUserInfo(userInfo)
      setIsLoggedIn(true)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // when user hasn't signed in yet
        Alert.alert('Please Sign in')
        setIsLoggedIn(false)
      } else {
        Alert.alert('Something else went wrong... ', error.toString())
        setIsLoggedIn(false)
      }
    }
  }

  async function signOut() {
    try {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setIsLoggedIn(false)
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString())
    }
  }

  return (      
    <View style={styles.container}>
      <Image
        source={require('../images/logo_login.png')}
      />

      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />

      <View style={styles.statusContainer}>
        {isLoggedIn === false ? (
          <>
            <Text style={styles.texto}>Faça o login!</Text>
            <Text style={styles.texto}>Não possui um e-mail Google?</Text>
            <Text style={{color: 'blue', textAlign: 'center'}}
                  onPress={() => Linking.openURL('https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&hl=pt-br&flowName=GlifWebSignIn&flowEntry=SignUp')}>
              Clique aqui!
            </Text>
          </>
        ) : (
          navigation.navigate('Inicio', {
            screen: 'Inicio',
            params: {user: userInfo.user},
          })
        )}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInButton: {
    width: 250,
    height: 50
  },
  texto:{
    textAlign: 'center',
    color: 'black'
  }
});