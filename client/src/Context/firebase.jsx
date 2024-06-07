import {initializeApp} from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyACPtHblHYp9JkmpIxoLciUZPLfTEfARDU",
    authDomain: "heartcode01.firebaseapp.com",
    projectId: "heartcode01",
    storageBucket: "heartcode01.appspot.com",
    messagingSenderId: "598999667606",
    appId: "1:598999667606:web:b4e71e4cd7c456cc34c3b7"
};
const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)

const SignUpUser = (email,password)=>{
   createUserWithEmailAndPassword(firebaseAuth ,email,password)
    .then((userCredential)=>{
        console.log(userCredential);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export {
    SignUpUser
}