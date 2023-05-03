import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedAuth from "./components/auth/ProtectedAuth";
import PokemonId from "./pages/PokemonId";

function App() {
  return (
    <section className="bg-sky-200 min-h-screen">
      
        
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedAuth />}>
          <Route path="/pokedex" element={<Pokedex />} />

          <Route path="/pokedex/:id" element={<PokemonId />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
