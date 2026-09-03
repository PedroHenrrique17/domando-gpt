import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";

export default function index() {
  //UseState do react para gerenciar estados dos usuarios
  const [usuarios, setUsuarios] = useState([]);

  //Hook useEffect para lidar com efeitos colaterais no componente
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error na API", error));
  }, []);

  const deleteUsuario = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setUsuarios(usuarios.filter((usuarios) => usuarios.id !== id))
    })
    .catch((error) => console.log(error));
  }

  return (
    <main className="containerUsers">
      <h1>Lista de Usuarios</h1>
      <Link to="/">Voltar para Home</Link>

      <section className="contentUsers">
        {usuarios.map((user) => (
          <article key={user.id}>
            <strong>Nome: {user.nome}</strong>
            <strong>Email: {user.email}</strong>
            <strong>Telefone: {user.telefone}</strong>
            <button 
            className="btn-delete"
            onClick={() => deleteUsuario(user.id)}
            >Deletar {user.nome}</button>
          </article>
        ))}
      </section>
    </main>
  );
}
