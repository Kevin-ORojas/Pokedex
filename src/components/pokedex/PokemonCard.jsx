import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const backgroundByType = {
  grass: "bg-gradient-to-b from-sky-500 to-green-500",
  fire: "bg-gradient-to-b from-red-500 to-blue-500",
  water: "bg-gradient-to-b from-blue-600 to-sky-500",
  bug: "bg-gradient-to-b from-violet-600 to-sky-500",
  normal: "bg-gradient-to-b from-pink-600 to-sky-500",
  fighting: "bg-gradient-to-b from-pink-600 to-sky-500",
  poison: "bg-gradient-to-b from-green-200 to-sky-500",
  flying: "bg-gradient-to-b from-pink-600 to-sky-500",
  ground:"bg-gradient-to-b from-red-200 to--500",
  rock:"bg-gradient-to-b from-blue-200 to-sky-500",
  ghost:"bg-gradient-to-b from-orange-200 to-sky-500",
  electric:"bg-gradient-to-b from-yellow-200 to-sky-500",
  steel:"bg-gradient-to-b from-black/50 to-sky-500",
  psychic:"bg-gradient-to-b from-green-200 to-sky-500",
  ice:"bg-gradient-to-b from-green-200 to-sky-500",
  dragon:"bg-gradient-to-b from-green-200 to-sky-500",
  dark:"bg-gradient-to-b from-green-200 to-sky-500",
  fairy:"bg-gradient-to-b from-green-200 to-sky-500"
};

const nameColorByType = {
  grass: "text-green-700",
  fire: "text-red-500",
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
  ice:"text-blue-400",
  dragon:"text-sky-400",
  dark:"text-green-400",
  fairy:"text-red-400"
  
}

const SkillColorByType = {
  grass: "text-green-700",
  fire: "text-red-500",
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
  ice:"text-blue-400",
  dragon:"text-sky-400",
  dark:"text-green-400",
  fairy:"text-red-400"
}

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState();

  const types = pokemon?.types
    .slice(0, 2)
    .map((type) => type.type.name)
    .join(" / ");

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Link
      to={`/pokedex/${pokemon?.id}`}
      className={`text-center border-8 rounded-md hover:border-yellow-500/60  ${
        bordersByType[pokemon?.types[0].type.name]
      }`}
    >
      {/* seccion superior */}
      <section
        className={` relative h-[200px] border-sm ${
          backgroundByType[pokemon?.types[0].type.name]
        }`}
      >
        <div
          className={`absolute -bottom-7  w-[170px] left-1/2 -translate-x-[35%] `}
        >
          <img
            className="flex animate-pulse w-[120px] object-contain"
            src={pokemon?.sprites.other.dream_world.front_default}
            alt=""
          />
        </div>
      </section>

      {/* seccion superior */}

      <section className="">
        <h3 className={` mt-10 font-bold ${nameColorByType[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
        <h4 className={`font-semibold ${nameColorByType[pokemon?.types[0].type.name]}`}>{types}</h4>
        <span className={`font-semibold ${nameColorByType[pokemon?.types[0].type.name]}`}>type</span>

        <hr />

        <section className="grid grid-cols-3 gap-2 p-2 ">
          {pokemon?.stats.map((stat) => (
            <div key={stat.stat.url}>
              <h5 className="text-black font-bold truncate">{stat.stat.name}</h5>
              <span className={`font-semibold ${SkillColorByType[pokemon?.types[0].type.name]}`}>{stat.base_stat}</span>
            </div>
          ))}
        </section>
      </section>
    </Link>
  );
};

export default PokemonCard;
