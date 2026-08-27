import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Users.css"

export default function index() {
  //UseState do react para gerenciar estados dos usuarios
  const [usuarios, setUsuarios] = useState([]);

  //Hook useEffect para lidar com efeitos colaterais no componente
useEffect(() => {
  console.log("olaaaaa");
}, [])

  return (
    <main className='containerUsers'>
      <h1>Lista de Usuarios</h1>
      <Link to="/">Voltar para Home</Link>
      <section className="contentUsers">
        <article>
          <strong>Nome: Kaio</strong>
          <strong>Telefone: 11 9729-68761</strong>
        </article>
      </section>
    </main>
  )
}
