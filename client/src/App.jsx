import { Outlet } from 'react-router'
import Navigatebar from './Pages/Navigatebar'
import LoginPage from './Pages/Authentication/LoginPage'
function App() {
 
  return (
    <>
     <Navigatebar/>
     <LoginPage/>
     <main>
       <Outlet/>
     </main>
    </>
  )
}

export default App
