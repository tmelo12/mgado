import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase("db.db")

export default db