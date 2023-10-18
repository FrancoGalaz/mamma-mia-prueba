import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Provider from './contexts/PizzaContext';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';
import NotFound from './views/NotFound';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/desafio-mammamia/" element={<Home />} />
      <Route path="/desafio-mammamia/home" element={<Home />} />
      <Route path="/desafio-mammamia/pizza/:id" element={<Pizza />} />
      <Route path="/desafio-mammamia/carrito" element={<Carrito />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navigation />
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
