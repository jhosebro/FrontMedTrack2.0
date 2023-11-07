import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetStarted from '../pages/components/GetStarted/GetStarted'
import {NotFound} from '../pages/components/404NotFound/404NotFound'
import Login from '../pages/components/Login/Login'
import {Dashboard} from '../pages/components/Dashboard/Dashboard'
import RecuperarContrasena from '../pages/components/RecuperarContrasena/RecuperarContrasena'
import Register from '../pages/components/Register/Register'

export const RoutesMedTrack = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<GetStarted/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='getStarted' element={<GetStarted/>} />
            <Route path='login' element={<Login/>} />
            <Route path='recuperarContrasena' element={<RecuperarContrasena/>} />
            <Route path='register' element={<Register/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  )
}
