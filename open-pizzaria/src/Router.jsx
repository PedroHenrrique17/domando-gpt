import React from 'react'
import Home from './Pages'
import Sobre from './Pages/Sobre'
import Cardapio from './Pages/Cardapio'
import Users from './Pages/Users'
import Menu from './Components/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Menu  />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path ="/users" element={<Users />} />
        </Routes>
    </BrowserRouter>
      
    
  )
}
