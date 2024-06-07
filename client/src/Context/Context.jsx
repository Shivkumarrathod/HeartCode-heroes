import { useContext,createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase";

import { 
    SignUpUser,
    SignInUser,
    loginWithGoogle,
    signoutUser,
    writeRecordedData,
} from "./firebase";
const FirebaseContext = createContext(null)
export const useFirebase=()=>useContext(FirebaseContext)

export const FirebaseProvider=(props)=>{

    const [user,setUser]= useState(null)
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
          if(user){
            setUser(user)
          }else{
            setUser(null)
          }
        })
    },[onAuthStateChanged])
    const isUserLoggedIn=(user!=null)?true:false
    return <FirebaseContext.Provider value={{
        SignUpUser,
        SignInUser,
        loginWithGoogle,
        signoutUser,
        isUserLoggedIn,
        writeRecordedData
    }} >
        {props.children}
    </FirebaseContext.Provider>
}