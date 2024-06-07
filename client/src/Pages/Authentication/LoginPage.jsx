import { useState } from 'react';
import { useFirebase } from '../../Context/Context';
import Google from '../../utiles/Google.svg';
import backgroundImage from '../../utiles/backgroundimage.jpg'; // Import the background image
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router';
const LoginPage = () => {
    const firebase = useFirebase();
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [createUser, setCreateUser] = useState(false);
    const navigate = useNavigate()
    const handleSignIn=()=>{
        firebase.SignInUser(signInEmail,signInPassword)
        navigate('/')
    }
    const handleSignUp = ()=>{
        firebase.SignUpUser(signUpEmail,signUpPassword)
        navigate('/')
    }
    const googleSignIn=()=>{
        firebase.loginWithGoogle()
        navigate('/')
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row bg-gray shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
                {/* Left side with background image */}
                <div 
                    className="hidden md:block md:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                </div>

                {/* Right side for login, create account, and Google login */}
                <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-70">
                    {!createUser ? (
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-blue-700">Login</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    value={signInEmail}
                                    onChange={(e) => setSignInEmail(e.target.value)}
                                    className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder='Enter Password'
                                    value={signInPassword}
                                    onChange={(e) => setSignInPassword(e.target.value)}
                                    className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button onClick={handleSignIn} className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:bg-blue-800">Sign In</button>

                            <button onClick={() => setCreateUser(true)} className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-8">Create an Account</button>
                            <div className="flex items-center justify-center mt-8">
                                <button className="flex items-center bg-white border border-gray-300 shadow-sm rounded-md py-2 px-4 hover:bg-gray-100" onClick={googleSignIn}>
                                    <img src={Google} alt="Google.svg" className="mr-2 w-5 h-5" />
                                    <span>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={()=>setCreateUser(!createUser)}><RxCross1/></button>
                            <h2 className="text-3xl font-bold mb-6 text-blue-700">Sign Up</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    value={signUpEmail}
                                    onChange={(e) => setSignUpEmail(e.target.value)}
                                    className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder='Enter Password'
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                    className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button onClick={handleSignUp} className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Sign Up</button>
                            <div className="flex items-center justify-center mt-8">
                                <button className="flex items-center bg-white border border-gray-300 shadow-sm rounded-md py-2 px-4 hover:bg-gray-100" onClick={googleSignIn}>
                                    <img src={Google} alt="Google.svg" className="mr-2 w-5 h-5" />
                                    <span>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
