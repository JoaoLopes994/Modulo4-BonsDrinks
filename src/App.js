import './App.css';
import BuscaDrinks from './Components/Api/BuscaDrinks';
import Button from './Components/Button/Button';
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

function App() {
  return (
    <div className="App">

      <Header />
      {/* < Home/ > */}
      <BuscaDrinks className="conteudo"/>
      <Footer />
    </div>
  );
}

export default App;
