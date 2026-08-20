import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "./Global.css"


function App() {
  return (
    <div className="container">
      <Header/>

      <Menu/>

      <Banner/>
      
      <Cards/>

      <Footer titleFooter="OpenPizzaria - todos os direitos reservados - 2026" />
    </div>
  )
}

export default App;
