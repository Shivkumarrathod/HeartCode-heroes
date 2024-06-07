import { useContext,createContext } from "react";
import { 
    SignUpUser,
} from "./firebase";
const FirebaseContext = createContext(null)
export const useFirebase=()=>useContext(FirebaseContext)

export const FirebaseProvider=(props)=>{
    return <FirebaseContext.Provider value={{
        SignUpUser,
    }} >
        {props.children}
    </FirebaseContext.Provider>
}