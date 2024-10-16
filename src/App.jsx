import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Auth/Signup'
import Auth from './pages/Auth/Auth'
import Home from './pages/otherpages/Home'
import ConfirmEmail from './pages/Auth/ConfirmEmail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />}>
          <Route path='Signup' element={<Signup />} />
          <Route path='Confirmemail' element={<ConfirmEmail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;


