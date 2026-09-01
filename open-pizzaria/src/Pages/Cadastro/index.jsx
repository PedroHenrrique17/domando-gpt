import { useState } from "react";
import "./Cadastro.css";

export default function Index() {
  // Estado para armazenar os dados do formulario
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  //Função para atualizar o estado ao digitar no formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações
    if (!formData.nome.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Por favor, informe seu e-mail.");
      return;
    }

    // Validação simples do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(formData.email)) {
      alert("Por favor, informe um e-mail válido.");
      return;
    }

    if (!formData.telefone.trim()) {
      alert("Por favor, informe seu telefone.");
      return;
    }

    // Enviando os dados para o backend
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuário cadastrado com sucesso", data);

        // Limpa o formulário após o envio
        setFormData({
          nome: "",
          email: "",
          telefone: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Ocorreu um erro ao cadastrar o usuário.");
      });
  };

  return (
    <main className="containerCadastro">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <article className="form-control">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            name="telefone"
            placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChange={handleChange}
          />
        </article>
        <br />
        <button className="botao-cadastro">Cadastrar</button>
      </form>
    </main>
  );
}
