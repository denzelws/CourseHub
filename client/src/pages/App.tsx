import { Route, Routes } from "react-router-dom"
import Auth from "../templates/Auth"
import Home from "../templates/Home"
import FormSignUp from "../components/FormSignUp"

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<Auth title='Sign Up'><FormSignUp/></Auth>} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
