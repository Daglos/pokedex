// hooks: son funciones que se apagen a los emtodos del cliclo de vida de un compemente que nos permiten manejar estados mejorando la experiencia 

import { useState } from "react";
import usePokemonFetch from "./usePokemonFetch";
import Card from "../cards/Card";

import { useNavigate } from "react-router";

import "./Pokelist.css";

function getPokemonIdFromUrl(url) {
    const parts = url.split('/');
    return parts[parts.length - 2]; // The second last part is the ID
}

const PokeList = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(15);
    const navigateTo = useNavigate();
    const {
        pokemonJsonObject,
        isLoading,
        hasError,
        error
    } = usePokemonFetch(
        offset,
        limit
    );

    return (
        <div className="poke-list">
            <h2>Lista Pokémon:</h2>
                {!isLoading && !hasError && pokemonJsonObject?.results && (
                    <>
                        <section className="card-holder">
                            {pokemonJsonObject.results.map( (p)=>{
                                    const id = getPokemonIdFromUrl(p.url)
                                    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                                    return (
                                        <Card
                                            key={id}
                                            imgUrl={imgUrl}
                                            title={p.name}
                                            description=""
                                            actionLabel="Ver Sprite"
                                            action={()=>{navigateTo(`/pokelist/${id}`)}}
                                        />
                                    )
                                }
                            )}
                        </section>
                        <button
                            className="btn-siguiente"
                            onClick={(e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                setOffset(offset + 15)
                            }}
                        >
                            Siguiente
                        </button>
                    </>
                )}
                {hasError && (
                    <strong>Algo sucedió mal y no se puede cargar</strong>
                )}
        </div>
    )
}

export default PokeList;