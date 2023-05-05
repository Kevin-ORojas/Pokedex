import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/pokedex/PokemonCard";
import { paginationLogic } from "../utils/pagination";

const Pokedex = () => {
  //? Array de pokemons antes de filtrar
  const [pokemons, setpokemons] = useState([]);

  //?string para filtrar los pokemons por nombre
  const [pokemonName, setPokemonName] = useState("");

  //? arreglo de tipos de pokemons posibles
  const [types, setTypes] = useState([]);
  
  //? string de tipo de pokemons actual, cambia de acuerdo al select
  const [currentType, setCurrentType] = useState("")

  //? pagina actual
  const [currentPage, setCurrentPage] = useState(1)

  //? estado global donde se almacena el nombre el usuario
  const nameTrainer = useSelector((store) => store.nameTrainer);

  const handlePlusOne = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );



   const {lastPage, pagesInBlock, pokemonInPage} = useMemo(() => paginationLogic(currentPage, pokemonsByName), [currentPage, pokemons, pokemonName, currentType])

   const handleClickPreviusPage = () => {
    const newCurrentPage = currentPage - 1
    if(newCurrentPage >= 1){
      setCurrentPage(newCurrentPage)
    }
   }

   const handleClickNextPage = () => {
    const newCurrentPage = currentPage + 1
    if(newCurrentPage <= lastPage){
      setCurrentPage(newCurrentPage)
    }
   }
  
  useEffect(() => {
    if(!currentType){
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";

    axios
      .get(URL)
      .then((res) => setpokemons(res.data.results))
      .catch((err) => console.log(err));
    }
  }, [currentType]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";

    axios
      .get(URL)
      .then((res) => {
        const newTypes = res.data.results.map((type) => type.name);
        setTypes(newTypes);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if(currentType){
    const URL = `https://pokeapi.co/api/v2/type/${currentType}/`


    axios
    .get(URL)
    .then((res) => {
      const pokemonByType = res.data.pokemon.map(pokemon => pokemon.pokemon)
      setpokemons(pokemonByType)
    }) 
    .catch((err) => console.log(err))
    }
  }, [currentType])

  useEffect (() => {
    setCurrentPage(1)
  }, [pokemonName, currentType])

  return (
    <section className="bg-slate-200  min-h-screen">
      {/**Seccion de filtros y saludos */}
      <Header />
      <section className="py-6  px-2 text-[12px] sm:text-2xl md:text-4xl font-bold flex flex-col mx-auto justify-between items-center">
        <h3 className="text-red-500 font-semibold">
          Welcome {nameTrainer}
          <span className="text-black  sm:text-2xl md:text-3xl ">
            , here you can find your favorite pokemon
          </span>
        </h3>

        <form className="flex drop-shadow-4xl p-2 mt-4 md:mt-4 " onSubmit={handlePlusOne}>
          <div className="flex text-sm  h-10">
            <input className="text-black border-4 placeholder-black bg-transparent border-red-500 sm:w-72 xl:w-80 rounded-md   "
              id="pokemonName"
              type="text"
              placeholder="Search your pokemon"
            />
            <button className="inline-block h-10 w-12  sm:h-10 sm:w-16 rounded-md bg-red-500">Search</button>
          </div>

          <select className="w-10 text-sm bg-red-500 rounded-md" onChange={(e) => setCurrentType(e.target.value)}>
            <option value="all">All</option>
            {types.map((type) => (
              <option className="capitalize" value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </form>
      </section>

          {/* Paginacion */}
          <ul className="flex gap-2 justify-center items-center py-4 px-2 flex-wrap ">
            {/* pagina anterior */}
            <li onClick={() => setCurrentPage(1)} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{"<<"}</li>
            {/* Pagina anterior */}
          <li onClick={handleClickPreviusPage} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{"<"}</li>

          {/* lista de paginas */}
            {
              pagesInBlock.map(numberPage => <li onClick={() => setCurrentPage(numberPage)} className={`p-3 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer ${numberPage === currentPage ? "bg-red-300" : "bg-red-500"}`} key={numberPage}>{numberPage}</li>)
            }

            {/* Pagina siguiente */}
            <li onClick={handleClickNextPage} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{">"}</li>
            {/*Ultima pagina */}
            <li onClick={() => setCurrentPage(lastPage)} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{">>"}</li>
          </ul>


      {/** seccion lista de pokemon */}
      <section className="px-6 md:px-12 py-8 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_320px))] justify-center">
        {pokemonInPage.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}
      </section>
      <ul className="flex gap-2 justify-center items-center py-4 px-2 flex-wrap ">
            {/* pagina anterior */}
            <li onClick={() => setCurrentPage(1)} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{"<<"}</li>
            {/* Pagina anterior */}
          <li onClick={handleClickPreviusPage} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{"<"}</li>

          {/* lista de paginas */}
            {
              pagesInBlock.map(numberPage => <li onClick={() => setCurrentPage(numberPage)} className={`p-3 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer ${numberPage === currentPage ? "bg-red-300" : "bg-red-500"}`} key={numberPage}>{numberPage}</li>)
            }

            {/* Pagina siguiente */}
            <li onClick={handleClickNextPage} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{">"}</li>
            {/*Ultima pagina */}
            <li onClick={() => setCurrentPage(lastPage)} className="p-1 bg-red-600 font-bold text-white rounded-md hover:animate-ping cursor-pointer">{">>"}</li>
          </ul>

          <footer className="flex gap-2 p-2 justify-center">
        <a
          className="text-4xl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/NozoDev"
        >
          <i className="bx bxl-github text-black hover:bg-red-700 rounded-full "></i>
        </a>
        <a
          className="text-4xl"
          target="_blank" // permite abrir en nueva pestaña
          rel="noopener noreferrer" //evita malwares maliciosos al abrir ventanas
          href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/"
        >
          <i className="bx bxl-linkedin text-black hover:bg-red-700 rounded-full "></i>
        </a>
        <a
          className="text-4xl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kevinrojasxd/"
        >
          <i className="bx bxl-instagram text-black hover:bg-red-700 rounded-full"></i>
        </a>
      </footer>

      <span className="text-black text-sm font-semibold  flex items-center justify-center">
        © Todos los derechos reservados 2023{" "}
      </span>
    </section>
  );
};

export default Pokedex;
