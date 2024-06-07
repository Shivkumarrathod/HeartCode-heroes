import { Outlet } from 'react-router'
import Navigatebar from './Pages/Navigatebar'

function App() {
 
  return (
    <>
     <Navigatebar/>
     <main>
       <Outlet/>
     </main>
    </>
  )
}

export default App
