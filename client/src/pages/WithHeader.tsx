import { Route, Routes } from 'react-router-dom'

import Home from '../templates/Home'
import Header from '../components/Header'
import TeacherForm from '../components/TeacherForm'

function AppWithHeader() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<TeacherForm />} />
      </Routes>
    </>
  )
}

export default AppWithHeader
