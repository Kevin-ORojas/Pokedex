import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const nameColorByType = {
  grass: "text-green-700",
  fire: "text-red-800",
  water: "text-blue-800",
  bug: "text-green-800",
  normal: "text-stone-800",
  fighting: "text-violet-800",
  poison: "text-green-800",
  flying: "text-cyan-800",
  ground:"text-yellow-800",
  rock:"text-violet-800",
  ghost:"text-orange-800",
  electric:"text-red-800",
  steel:"text-yellow-800",
  psychic:"text-violet-800",
  ice:"text-blue-800",
  dragon:"text-indigo-800",
  dark:"text-green-800",
  fairy:"text-red-800"
  
}

const SkillColorByType = {
  grass: "text-green-700",
  fire: "text-red-800",
  water: "text-blue-800",
  bug: "text-green-800",
  normal: "text-stone-800",
  fighting: "text-violet-800",
  poison: "text-green-800",
  flying: "text-cyan-800",
  ground:"text-yellow-800",
  rock:"text-violet-800",
  ghost:"text-orange-800",
  electric:"text-red-800",
  steel:"text-yellow-800",
  psychic:"text-violet-800",
  ice:"text-blue-800",
  dragon:"text-sky-800",
  dark:"text-green-800",
  fairy:"text-red-800"
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
      className={`text-center drop-shadow-4xl  border-[10px] rounded-[16px] hover:border-yellow-500/60  ${
        bordersByType[pokemon?.types[0].type.name]
      }`}
    >
      {/* seccion superior */}
      <section
        className={` relative h-[200px] rounded-t-[5px] ${
          backgroundByType[pokemon?.types[0].type.name]
        }`}
      >
        <div
          className={`absolute -bottom-7  w-[170px] left-1/2 -translate-x-[35%] `}
        >
          <img
            className="flex animate-pulse drop-shadow-4xl w-[120px] object-contain"
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
