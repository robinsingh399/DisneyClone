import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCa5E9iSRWBmwAHI5OYhyUTjXHMBttFe-4",
    authDomain: "disneyplus-cloneproject.firebaseapp.com",
    projectId: "disneyplus-cloneproject",
    storageBucket: "disneyplus-cloneproject.appspot.com",
    messagingSenderId: "2595626682",
    appId: "1:2595626682:web:bf3ccc4e5229c4a43bec83",
    measurementId: "G-GF0P63M7EH"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,storage,provider};
  export default db;