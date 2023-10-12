import { useState } from "react"
import rick from './img/rick-morty.png';
import './App.css';
import Characters from "./components/characters";

function App() {
  const [characters, setCharacters] = useState(null)

  const reqAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ? (
          // si contiene algo muestra
          <Characters characters={characters} setCharacters={setCharacters}/>) : (
          <>
            <img src={rick} alt="Rick and Morty" className="img-home" />
            <button onClick={reqAPI} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
