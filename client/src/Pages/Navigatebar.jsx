
import {Link} from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import Logo from '../utiles/Logo.jpg'
import { useState } from 'react';
import { useFirebase } from '../Context/Context';

const Navigatebar = () => {
  const firebase = useFirebase()
  console.log(firebase);
  const [usertoggle,setUsertoggle] = useState(false)
 
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src={Logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-blue-700">Jayadeva Hospital</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to='/' className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Home
              </Link>
              <Link to='/' className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Reports
              </Link>
              <Link to='/' className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Talk
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div>
                <button type="button" className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                 onClick={()=>setUsertoggle(!usertoggle)}
                >
                  <span className="sr-only">Open user menu</span>
                  {/* <img className="h-8 w-8 rounded-full" src="/path/to/user-profile.jpg" alt="User" /> */}
                  <FaUser size={20}/>
                </button>
              </div>
              {usertoggle&&(
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  {firebase.isUserLoggedIn ?(
                    <button className='p-2 w-48' onClick={()=>firebase.signoutUser()}>Sign out</button>
                  ):(
                    <Link className=' w-[10rem] p-4' to='/login'>Log In</Link>
                  )}
                </div>
              )}   
            </div>
          </div>
          
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link to='/' className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to='/' className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Report</Link>
          <Link to='/' className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Talk</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigatebar;

