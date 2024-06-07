import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import Google from '../utiles/Google.svg'
import { useFirebase } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const firebase = useFirebase()
  const navigate = useNavigate()
  
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  const [createUser ,setCreateUser]=useState(false)


  const loginHandler =()=>{
     firebase.signInUser(email,password).then()
     .catch((error)=>{
      console.log(error.message);
       setErrorMessage(error?.message)
    }) 
  }
  const createUserHandler =()=>{
    firebase.createUserWithEmailAndPasswordHandler(email,password)
    .then()
     .catch((error)=>{
      console.log(error.message);
       setErrorMessage(error?.message)
    }) 
  }
  const loginWithGoogleHandler = ()=>{
    firebase.signInWithGoogle()
    .then()
     .catch((error)=>{
       console.log(error.message);
       setErrorMessage(error?.message)
    }) 
  }
  useEffect(()=>{
    if(firebase.isLoggedIn){
        navigate('/')
    }
  },[firebase,navigate])
  
  return (
    <div className='h-[100vh] -mt-5 bg-black flex justify-center items-center'>
      
      {createUser &&(
      <div className='bg-[#060606] w-[42rem] h-[28rem] mt-[5px] text-white absolute '>
        <p onClick={()=>setCreateUser(!createUser)} className='cursor-pointer ml-2 mt-2 bg-[#060606] hover:text-red-600'>
         <RxCross2 size={25}/>
        </p>

        <div className='ml-5 mt-[4rem] z-40 w-[90%]'>
           <div className='mb-5'>
           <label htmlFor="Email" className='font-bold'>Email</label>
            <br />
            <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            className='w-full h-[40px] bg-black pl-2 mt-2 rounded' 
            placeholder='You Email'/>
           </div>

           <div className='mb-5'>
           <label htmlFor="Password" className='font-bold'>Password</label>
            <br />
            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            className='w-full h-[40px] bg-black pl-2 mt-2 rounded' 
            placeholder='You Password'/>
           </div>
           <button className='bg-blue-600 rounded-md p-1 hover:bg-blue-800 mt-5 ml-[32rem]' 
            onClick={createUserHandler}
           >Create One</button>
        </div>
      </div>
      )}

      <div className='bg-[#161616] w-[680px] h-[523px] text-white'>

      <div className='mt-4' >
        <h1 className='text-center text-red-700 font-bold text-[3.5rem]'>HeartHack</h1>
        <p className='mt-1 text-center font-bold'></p>
      </div>
      
      <div className='flex mt-8'>
        <div className='w-[350px] h-[255px] border-r ml-2 mt-4'>
          <p className='text-sm ml-2 text-[#fff]'>By continuing you indicate that you agree to HeartHack  <span className='text-blue-600' >Terms of Service</span > and <span className='text-blue-600'>Privacy Policy</span>.</p>

          <div className=' mt-5 ml-2 flex  '> 
            <button className='bg-black w-[300px]  h-[45px] rounded flex items-center  hover:bg-white'
              onClick={loginWithGoogleHandler}
            >
              <img src={Google} alt="Google svg"  className='w-[2rem]  hover:bg-white h-[45px] ml-1'/>
              <p className='ml-3 '>Continue with Google</p>
            </button>
          </div>
          <p className='text-center cursor-pointer font-semibold text-[12px] mt-2 hover:text-blue-600' 
            onClick={()=>setCreateUser(!createUser)}> 
            Sign up with email
          </p>
        </div>

        <div className='w-[350px] h-[255px] ml-2'>
           <h1 className=' border-b font-bold p-2'>login</h1>
           <div className='ml-2 mt-2 '>
            <label htmlFor="Email" className='font-bold'>Email</label>
            <br />
            <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            className='w-[300px] h-[40px] bg-black pl-2 mt-2 rounded' 
            placeholder='You Email'/>
           </div>
           <div className='ml-2 mt-2 '>
            <label htmlFor="password" className='font-bold'>Password</label>
            <br />
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            className='w-[300px] h-[40px] bg-black pl-2 mt-2 rounded' 
            placeholder='You Password'/>

            <div className='flex justify-between ml-2 w-[290px] mt-4'>
              <p className='hover:underline hover:text-blue-600'>Forgot password?</p>
              <button className='bg-blue-700 p-1 w-[80px] rounded-full'
              onClick={loginHandler}>Login</button>
            </div>
           </div>
           
           <div>
             <p className='text-red-500 text-center'>{errorMessage}</p>
           </div>

        </div>
      </div>
      
      <div className='border-t border-b  mt-10  h-[3.2rem] flex justofy-center text-sm '>
         <div className='w-[580px] flex justify-around items-center ml-[4rem] '>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>About.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Careers.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Privacy.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Terms.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Contact.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Languages.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Your Ad Choice.</p>
          <p className='hover:underline hover:text-blue-600 cursor-pointer'>Press.</p>
          <p>@ HeartHack, Inc. 2024</p>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default Login