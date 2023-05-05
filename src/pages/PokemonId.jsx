import React, { useEffect, useState } from "react";
import Header from "../components/pokedex/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonId = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  const bordersByType = {
    grass: "border-green-800/70",
    fire: "border-red-800/70",
    water: "border-blue-800/70",
    bug: "border-green-800/70",
    normal: "border-neutral-800/70",
    fighting: "border-cyan-800/70",
    poison: "border-green-800/70",
    flying: "border-sky-800/70",
    ground:"border-red-800/70",
    rock:"border-violet-800/70",
    ghost:"border-neutral-800/70",
    electric:"border-red-800/70",
    steel:"border-teal-800/70",
    psychic:"border-sky-800/70",
    ice:"border-blue-800/70",
    dragon:"border-sky-800/70",
    dark:"border-green-800/70",
    fairy:"border-violet-800/70"
  };
  
  const backgroundByType = {
    grass: "bg-gradient-to-b from-green-800 to-lime-500/10",
    fire: "bg-gradient-to-b from-red-800 to-yellow-500/20",
    water: "bg-gradient-to-b from-blue-800 to-sky-500/10",
    bug: "bg-gradient-to-b from-green-800 to-yellow-500/10",
    normal: "bg-gradient-to-b from-stone-800 to-neutral-500/10",
    fighting: "bg-gradient-to-b from-cyan-800 to-sky-500/10",
    poison: "bg-gradient-to-b from-green-800 to-lime-500/10",
    flying: "bg-gradient-to-b from-pink-800 to-sky-500/10",
    ground:"bg-gradient-to-b from-red-800 to-stone-500/10",
    rock:"bg-gradient-to-b from-stone-800 to-zinc-500/10",
    ghost:"bg-gradient-to-b from-neutral-800 to-stone-500/10",
    electric:"bg-gradient-to-b from-yellow-400 to-orange-500/10",
    steel:"bg-gradient-to-b from-teal-800 to-emerald-500/10",
    psychic:"bg-gradient-to-b from-sky-800 to-green-500/10",
    ice:"bg-gradient-to-b from-blue-800 to-indigo-500/10",
    dragon:"bg-gradient-to-b from-sky-900 to-sky-500/10",
    dark:"bg-gradient-to-b from-stone-900 to-neutral-500/10",
    fairy:"bg-gradient-to-b from-violet-800 to-sky-500/10"
    };
  
 
  const SkillColorByType = {
    grass: "text-green-400",
    fire: "text-red-400",
    water: "text-blue-400",
    bug: "text-green-400",
    normal: "text-stone-400",
    fighting: "text-violet-400",
    poison: "text-green-400",
    flying: "text-cyan-400",
    ground:"text-yellow-400",
    rock:"text-violet-400",
    ghost:"text-orange-400",
    electric:"text-stone-800",
    steel:"text-yellow-400",
    psychic:"text-violet-400",
    ice:"text-blue-400",
    dragon:"text-sky-400",
    dark:"text-green-400",
    fairy:"text-red-600"
  }
  

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getPercentStatBar = (stat_base) => {
    const percentBarProgres = (stat_base * 100) / 255;
    return `${percentBarProgres}%`;
  };

  return (
    <section className="min-h-screen grid bg-cover bg-no-repeat bg-bottom bg-[url('/images/pokeball3.jpg')] grid-rows-[1fr_auto]">
      <Header />

      <section className=" text-black px-2 py-14 ">

        <article className={`max-w-[750px] rounded-[16px] border-[10px] mx-auto drop-shadow-4xl ${bordersByType[pokemon?.types[0].type.name]}`}>
          {/**Seccion Superior */}

          <section className={` relative h-[150px]  rounded-t-[5px] drop-shadow-4xl rounded-xl ${backgroundByType[pokemon?.types[0].type.name]}`}>

            <div className="w-[180px] drop-shadow-3xl animate-pulse -mt-2 mx-auto absolute left-1/2 -translate-x-1/2 ">
              <img src={pokemon?.sprites.other.dream_world.front_default}alt=""/>
            </div>

          </section>

          {/* Informacion General */}

          <section className={`${SkillColorByType[pokemon?.types[0].type.name]}`}>
            <div>
              <h3 className={`text-center mt-6 font-bold ${SkillColorByType}`}>#{pokemon?.id}</h3>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <hr />
              <h2 className="capitalize font-bold mt-3">{pokemon?.name}</h2>
              <hr />
            </div>

            <div className="flex justify-center gap-6 text-center mt-2">
              <div>
                <h5 className="font-bold text-sm">Weight</h5>
                <span className="font-semibold">{pokemon?.weight}</span>
              </div>

              <div>
                <h5 className="font-bold text-sm">height</h5>
                <span className="font-semibold">{pokemon?.height}</span>
              </div>
            </div>

            <section className="grid sm:grid-cols-2 gap-4 ">
              {/* Tipos */}

              <section className=" text-center">
                <h3 className="font-bold">Types</h3>

                <section className="grid grid-cols-2 gap-4 px-2 mt-4 ">
                  {
                  pokemon?.types.map((type) => (
                    <article className={` p-1 font-bold px-8 border-[1px] border-gray-300 capitalize rounded-md ${
                        backgroundByType[pokemon?.types[0].type.name]}`}key={type.type.name}>{type.type.name}</article>
                  ))
                  }
                </section>
              </section>

              {/* Habilidades */}
              <section className="text-center">
                <h3 className="font-bold">ability</h3>

                <section className="grid grid-cols-2 gap-4 px-2 mt-4">
                  {
                  pokemon?.abilities.map((ability) => (
                    <article
                      className={` p-1 px-6 font-bold border-[1px] border-gray-300 capitalize rounded-md truncate ${
                        backgroundByType[pokemon?.types[0].type.name]}`}key={ability.ability.name}>{ability.ability.name}</article>
                  ))
                  }
                </section>
              </section>
            </section>
          </section>

          {/* seccion de Stats*/}
          <section>
            <h3 className={`font-bold py-2 text-center text-xl ${SkillColorByType[pokemon?.types[0].type.name]}`}>Stats</h3>

            <section>
              {pokemon?.stats.map((stat) => (
                <article key={stat.stat.name}>
                  <section className="flex  justify-between">
                    <h5 className="font-bold text-white capitalize">{stat.stat.name}</h5>

                    <span>{stat.base_stat}/255</span>
                  </section>

                  <div className="bg-gray-100 h-6 rounded-sm">
                    <div
                      style={{ width: getPercentStatBar(stat.base_stat) }}
                      className={
                        "h-full bg-gradient-to-r from-yellow-500 to-yellow-300"
                      }
                    ></div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </article>
      </section>
    </section>
  );
};

export default PokemonId;
