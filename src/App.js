//importar css
import './App.css';

// importar vistas
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Detalle from './views/Detalle';
import NotFound from './views/NotFound';
// importar componentes
import Navegador from './components/Navegador';
import Tarjeta from './components/Tarjeta';

// importar hooks
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
         <BrowserRouter>
        <Navegador />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pokemones' element={<Pokemones />}/>
          <Route path='/pokemones/:name' element={<Detalle />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
