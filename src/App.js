import './App.css';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contato from "./Components/Contato/Contato"
import Sobre from './Components/Sobre/Sobre';
import ListaDrinks from "./Components/ListaDrinks/ListaDrinks"
{/* import BuscaDrinks from "./Components/Api/BuscaDrinks";*/} 

function App() {
  return (
    <div className="App">
      <Router > 
        <Header />
        <Switch>
          <Route exact path="/Drinks">
            <ListaDrinks />
          </Route>
          <Route exact path="/Sobre">
            <Sobre />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/NossoTime">
            <Home />
          </Route>
          <Route exact path="/Contato">
            <Contato />
          </Route>
        
        </Switch>
      {/*}  <Contato />
        <BuscaDrinks className="conteudo"/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
