import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter} from 'react-router-dom'
import {Route,RouterProvider,createRoutesFromElements} from 'react-router'
import { FirebaseProvider } from './Context/Context'
import LoginPage from './Pages/Authentication/LoginPage.jsx'
import Talk from './Pages/Talk.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/talk' element={<Talk/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
     <RouterProvider router={router}/>  
    </FirebaseProvider>
  </React.StrictMode>,
)
