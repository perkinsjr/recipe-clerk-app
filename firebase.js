import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuiWIa1Aw7saTXtxh2ZmieR5kuYDTlW4U',
  authDomain: 'recipe-app-4b8f8.firebaseapp.com',
  databaseURL: 'https://recipe-app-4b8f8-default-rtdb.firebaseio.com',
  projectId: 'recipe-app-4b8f8',
  storageBucket: 'recipe-app-4b8f8.appspot.com',
  messagingSenderId: '336569099381',
  appId: '1:336569099381:web:25f39889adf81ed0ebc43c'
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { database }
