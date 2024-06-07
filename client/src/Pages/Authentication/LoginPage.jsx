import React from 'react'
import { useFirebase } from '../../Context/Context'

const LoginPage = () => {
    const firebase = useFirebase()
    console.log(firebase);
  return (
    <div>
      hello
    </div>
  )
}

export default LoginPage
