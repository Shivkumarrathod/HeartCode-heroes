import React, { useState } from 'react'
import { useFirebase } from '../../Context/Context'
import Google from '../../utiles/Google.svg'


const LoginPage = () => {
    const firebase = useFirebase()
    const [signInEmail ,setSignInEmail] = useState('')
    const [signInPassword ,setSignInPassword] = useState('')
    const [signUpEmail ,setSignUpEmail] = useState('')
    const [signUpPassword ,setSignUpPassword] = useState('')
    const [creatUser,setCreatUser] = useState(false)


    const handleSignIn=()=>{
        firebase.SignUpUser(setSignInEmail,setSignInPassword)
    }
    const handleSignUp = ()=>{
        firebase.SignUpUser(setSignInEmail,setSignInPassword)
    }
  return (
    <div>
        {/* fore login page */}
      <div>
        <div>
            <label >Email</label>
            <input type="email" placeholder='Enter Email' 
             value={signInEmail}
             onChange={(e)=>setSignInEmail(e.target.value)}
            />
        </div>
        <div>
            <label >Password</label>
            <input type="email" placeholder='Enter Password' 
             value={signInPassword}
             onChange={(e)=>setSignInPassword(e.target.value)}
            />
        </div>
        <button onClick={handleSignIn}>Sign In</button>
      </div>

      {/* for signup and google logged in page */}
      <div>
        <div>
            <button onClick={()=>setCreatUser(!creatUser)}>Create an Account</button>
        </div>
        <div>
            <button>
                <img src={Google} alt="Google.svg" />
                <p>Continue with Google</p>
            </button>
        </div>
      </div>

    {/* signup things */}
      {creatUser&&(
        <div>
        <div>
            <label >Email</label>
            <input type="email" placeholder='Enter Email' 
             value={signUpEmail}
             onChange={(e)=>setSignUpEmail(e.target.value)}
            />
        </div>
        <div>
            <label >Password</label>
            <input type="email" placeholder='Enter Password' 
             value={signUpPassword}
             onChange={(e)=>setSignUpPassword(e.target.value)}
            />
        </div>
        <button onClick={handleSignUp}>Sign In</button>
      </div>
      )}
    </div>
  )
}

export default LoginPage
