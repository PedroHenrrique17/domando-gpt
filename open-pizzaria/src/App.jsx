import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Router from "./Router";
import "./Global.css";

function App() {
  return (
    <div className="container">
      <Header
        tittleHeader="Bem-vindo à OpenPizzaria!"
        textHeader=" As melhores pizzas, preparadas com carinho para deixar seu momento ainda
        mais saboroso."
      />

      

      <Router />

      <Footer />
    </div>
  );
}

export default App;
