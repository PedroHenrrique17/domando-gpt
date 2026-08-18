import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import "./Global.css"

function App() {
  return (
    <div className="container">
      <Header/>

      <Banner/>
      
      <Cards/>
    </div>
  )
}

export default App;
