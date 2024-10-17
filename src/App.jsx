// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Signup from './pages/Auth/Signup'
// import Auth from './pages/Auth/Auth'
// import Home from './pages/otherpages/Home'
// import ConfirmEmail from './pages/Auth/ConfirmEmail'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Auth' element={<Auth />}>
//           <Route path='Signup' element={<Signup />} />
//           <Route path='Confirmemail' element={<ConfirmEmail />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App;
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Auth/Signup'
import Auth from './pages/Auth/Auth'
import Home from './pages/otherpages/Home'
import ConfirmEmail from './pages/Auth/ConfirmEmail'
import Login from './pages/Auth/Login/Login'
import ForgetPass from './pages/Auth/ForgetPassword/ForgetPass'
import ConfirmPass from './pages/Auth/ConfirmPass/ConfirmPass'
import SetNewPass from './pages/Auth/SetNewPass/SetNewPass'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />}>
          <Route path='Signup' element={<Signup />} />
          <Route path='Confirmemail' element={<ConfirmEmail />} />
          <Route path ='Login' element={<Login />} />
          <Route path='ForgetPassword' element={<ForgetPass />} />
          <Route path='ConfirmPassword' element={<ConfirmPass />} />
          <Route path='SetNewPass' element={<SetNewPass />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;


