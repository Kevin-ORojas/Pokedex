import React, { useEffect, useState } from "react";
import Header from "../components/pokedex/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonId = () => {
    const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios.get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getPercentStatBar = (stat_base) => {
    const percentBarProgres = (stat_base *100)/255
    return `${percentBarProgres}%`
  }

  return (
    <section>
      <Header />

      <section className=" text-black px-2 py-5">
        <article>
          {/* Todo lo demas */}

          {/* seccion de Stats*/}
            <section>
                <h3>Stats</h3>

                <section >
                {
                      pokemon?.stats.map(stat => ( 
                           <article key={stat.stat.name}>
                               <section className="flex  justify-between">
                                    <h5 className="capitalize">{stat.stat.name}</h5>

                                    <span>{stat.base_stat}/255</span>
                             </section>

                             <div className="bg-gray-100 h-6 rounded-sm">
                                <div style={{"width":getPercentStatBar(stat.base_stat)}} className={"h-full bg-gradient-to-r from-yellow-500 to-yellow-300"}></div>
                             </div>
                          </article>
                     ))
                 }
                </section>
             </section>
         </article>
      </section>
    </section>
  );
};

export default PokemonId;
