import firebase from 'firebase'

const config = require('./secrets.json')

firebase.initializeApp(config)

export default firebase