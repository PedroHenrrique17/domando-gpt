import React from 'react'
import Home from './Pages'
import Menu from './Components/Menu'
import Sobre from './Pages/Sobre'
import Comentario from './Pages/Comentario'
import Users from './Pages/Users'
import Cadastro from './Pages/Cadastro'
import Cardapio from './Pages/Cardapio'
import NotFound from './Pages/NotFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Menu  />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/users" element={<Users />} />
            <Route path="/comments" element={<Comentario />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
      
    
  )
}
