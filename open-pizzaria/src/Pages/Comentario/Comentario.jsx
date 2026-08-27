import React from "react";
import "./Comentario.css"

export default function index() {
  //UseState do react para gerenciar estados dos usuarios
  const [comentario, setComentario] = useState([]);

  //Hook useEffect para lidar com efeitos colaterais no componente
  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((data) => setComentario(data))
      .catch((error) => console.error("Error na API", error));
  }, []);

  console.log(comentario);

  return (
    <main className="containerComents">
      <h1>Comentarios</h1>
      <Link to="/">Voltar para Home</Link>

      <section className="contentComents">
        {comentario.map((comment) => (
          <article key={comment.id}>
            <strong>Comentario: {comment.text}</strong>
            <strong>Nota: {comment.postId}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
