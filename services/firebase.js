import {firebase}  from "@react-native-firebase/database";
import storage from "@react-native-firebase/storage"

var firebaseConfig={
    apiKey: "AIzaSyAza2qUkJ2Ay7TB-QEulvPK8XN643ApofM",
    authDomain: "meugado-9f30b.firebaseapp.com",
    project_id: "meugado-9f30b",
    storage_bucket: "meugado-9f30b.appspot.com",
    messagingSenderId: "793269638073",
    appId: "1:793269638073:android:178881f6a3dc965e791c68"
}

firebase.initializeApp(firebaseConfig)

export default firebase