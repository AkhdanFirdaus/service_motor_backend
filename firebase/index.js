const firebase = require('firebase-admin')

const credentials = require('./serviceAccountKey.json')

firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL: "https://notes-app-66431-default-rtdb.firebaseio.com",
})

module.exports = firebase