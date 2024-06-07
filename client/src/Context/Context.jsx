import { useContext,createContext } from "react";
import { 
    SignUpUser,
    SignInUser,
    loginWithGoogle,
} from "./firebase";
const FirebaseContext = createContext(null)
export const useFirebase=()=>useContext(FirebaseContext)

export const FirebaseProvider=(props)=>{
    return <FirebaseContext.Provider value={{
        SignUpUser,
        SignInUser,
        loginWithGoogle,
    }} >
        {props.children}
    </FirebaseContext.Provider>
}