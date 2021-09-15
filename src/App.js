import { Route } from 'react-router';
import Navegacion from './componentes/NavBar.jsx'
import PaginaPrincipal from './Pages/MainPage.jsx';
import Generador from './componentes/Generador.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Navegacion} /> 
      <Route exact path='/' component={PaginaPrincipal} />
      <Route exact path='/game' component={Generador} />
    </div>
  );
}

export default App;
