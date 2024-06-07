import {initializeApp} from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {getDatabase, ref, set} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyACPtHblHYp9JkmpIxoLciUZPLfTEfARDU",
    authDomain: "heartcode01.firebaseapp.com",
    projectId: "heartcode01",
    storageBucket: "heartcode01.appspot.com",
    messagingSenderId: "598999667606",
    appId: "1:598999667606:web:b4e71e4cd7c456cc34c3b7",
    databaseURL:"https://heartcode01-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
const firebaseDatabase = getDatabase()

const GoogleProvider = new GoogleAuthProvider()


const SignUpUser = (email,password)=>{
    createUserWithEmailAndPassword(firebaseAuth ,email,password)
   .then((userCredential)=>{
    console.log(userCredential);
    })
    .catch((err)=>{
            console.log(err);
    })
}
const SignInUser = (email,password)=>{
    signInWithEmailAndPassword(firebaseAuth ,email,password)
    .then((userCredential)=>{
        console.log(userCredential);
    })
    .catch((err)=>{
        console.log(err);
    })
}
const loginWithGoogle = ()=>{
    signInWithPopup(firebaseAuth,GoogleProvider)
    .then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result)
        console.log(credential.accessToken);
        console.log(result.user);
    })
    .catch((err)=>{
        console.log(err);
    })
}
const signoutUser = ()=>{
    signOut(firebaseAuth).then(()=>{
        console.log("lout user");

    }).catch((err)=>{
        console.log(err);
    })
}
const writeRecordedData=(userId,trancript)=>{
    set(ref(firebaseDatabase,'doctor/'+userId+Date()),{
        transcript:trancript
    })
}
export {
    SignUpUser,
    SignInUser,
    loginWithGoogle,
    signoutUser,
    writeRecordedData
}