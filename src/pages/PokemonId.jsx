import React, { useEffect, useState } from "react";
import Header from "../components/pokedex/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonId = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  const backgroundByType = {
    grass: "bg-gradient-to-b from-green-800 to-sky-800/80",
    fire: "bg-gradient-to-b from-red-500 to-blue-500",
    water: "bg-gradient-to-b from-blue-600 to-sky-500",
    bug: "bg-gradient-to-b from-violet-600 to-sky-500",
    normal: "bg-gradient-to-b from-pink-600 to-sky-500",
    fighting: "bg-gradient-to-b from-pink-600 to-sky-500",
    poison: "bg-gradient-to-b from-green-200 to-sky-500",
    flying: "bg-gradient-to-b from-pink-600 to-sky-500",
    ground: "bg-gradient-to-b from-red-200 to--500",
    rock: "bg-gradient-to-b from-blue-200 to-sky-500",
    ghost: "bg-gradient-to-b from-orange-200 to-sky-500",
    electric: "bg-gradient-to-b from-yellow-200 to-sky-500",
    steel: "bg-gradient-to-b from-black/50 to-sky-500",
    psychic: "bg-gradient-to-b from-green-200 to-sky-500",
    ice: "bg-gradient-to-b from-green-200 to-sky-500",
    dragon: "bg-gradient-to-b from-green-200 to-sky-500",
    dark: "bg-gradient-to-b from-green-200 to-sky-500",
    fairy: "bg-gradient-to-b from-green-200 to-sky-500",
  };

  const bordersByType = {
    grass: "border-green-500",
    fire: "border-red-500",
    water: "border-sky-500",
    bug: "border-violet-500",
    normal: "border-pink-500",
    fighting: "border-violet-500",
    poison: "border-green-500",
    flying: "border-sky-400",
    ground:"border-yellow-400",
    rock:"border-violet-400",
    ghost:"border-orange-400",
    electric:"border-red-400",
    steel:"border-yellow-400",
    psychic:"border-violet-400",
    ice:"border-blue-400",
    dragon:"border-sky-400",
    dark:"border-green-400",
    fairy:"border-red-400"
  };

  const SkillColorByType = {
    grass: "text-green-700",
    fire: "text-red-700",
    water: "text-sky-500",
    bug: "text-violet-500",
    normal: "text-pink-500",
    fighting: "text-violet-500",
    poison: "text-green-500",
    flying: "text-sky-400",
    ground:"text-yellow-400",
    rock:"text-violet-400",
    ghost:"text-orange-400",
    electric:"text-red-400",
    steel:"text-yellow-400",
    psychic:"text-violet-400",
    ice:"text-blue-800",
    dragon:"text-sky-400",
    dark:"text-green-400",
    fairy:"text-red-400"
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

        <article className={`max-w-[750px] mx-auto drop-shadow-4xl border-8 rounded-md  p-1 ${bordersByType[pokemon?.types[0].type.name]}`}>
          {/**Seccion Superior */}

          <section className={` relative h-[150px]   ${backgroundByType[pokemon?.types[0].type.name]}`}>

            <div className="w-[200px] mx-auto absolute left-1/2 -translate-x-1/2 -top-8">
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

                <section className="grid grid-cols-2 gap-4 mt-4 ">
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

                <section className="grid grid-cols-2 gap-4 mt-4">
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
            <h3 className={`font-bold py-4 text-center  text-xl ${SkillColorByType[pokemon?.types[0].type.name]}`}>Stats</h3>

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
