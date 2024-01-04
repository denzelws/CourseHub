import { Route, Routes } from "react-router-dom"

import AppWithHeader from "./WithHeader"
import FormSignUp from "../components/FormSignUp"
import Auth from "../templates/Auth"
import FormSignIn from "../components/FormSignIn"

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<Auth title='Sign Up'><FormSignUp/></Auth>} />
      <Route path='/sign-in' element={<Auth title='Sign In'><FormSignIn/></Auth>} />
      <Route path='/*' element={<AppWithHeader />} />
    </Routes>
  )
}

export default App
