import { Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';


function App() {
  return (
    <>
      <header>
        <h1>Pokedex Home</h1>
        <nav>
          <ul>
            <li><Link to="/">Carousel</Link></li>
            <li><Link to="/pokelist">Pokedex</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={(<Home />)} />
          <Route path="/pokelist" element={(<Pokedex />)} />
          <Route path="/pokelist/:pokemonId" element={(<Pokemon/>)} />
        </Routes>
      </main>
      <footer>
        CARLOS GALO 2025
      </footer>
    </>
  )
}

export default App