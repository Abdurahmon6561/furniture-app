import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneraLayout from './components/generaLayout'
const Login = React.lazy(() => import('./components/Login'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
