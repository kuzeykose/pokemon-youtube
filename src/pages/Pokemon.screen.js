import React, { useEffect, useState } from "react";
import axios from "axios";

import { capitilizer } from "../utils/util.functions";
import {
  useParams
} from "react-router-dom";

import ProcessBar from '../components/ProcessBar'

const PokemonScreen = () => {
  const [pokemonData, setPokemonData] = useState(null)
  const [pokemonSpecies, setPokemonSpecies] = useState(null)
  let { pokemonName } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => {
      setPokemonData(res.data)
    })
  }, [])

  useEffect(() => {
    if (pokemonData) {
      let url = pokemonData.species.url
      axios.get(url).then(res => {
        console.log(res.data);
        setPokemonSpecies(res.data)
      })
    }

  }, [pokemonData])

  return (
    <div>
      <div style={{
        display: "grid",
        justifyContent: "center"
      }}>
        <img src={pokemonData && pokemonData.sprites.other['dream_world']['front_default']} />
        <h1 style={{ color: "#eb347d", textAlign: 'center' }}>{capitilizer(pokemonName)}</h1>
      </div>
      {/* <ProcessBar width={'250px'} value={80} /> */}

      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div>
          <div style={{ marginLeft: 20 }}>
            <h2 style={{ color: "#eb347d" }}>Stats</h2>
            {pokemonData && pokemonData.stats.map(item => {
              return (
                <div>
                  <span>{item.stat.name}</span>
                  <ProcessBar width={'250px'} value={item.base_stat} />
                </div>
              )
            })}
          </div>
          <div style={{ marginLeft: 20, width: 150 }}>
            <h2 style={{ color: "#eb347d" }}>Abilities</h2>
            {pokemonData && pokemonData.abilities.map(item => {
              return (<p key={item.url} style={{ padding: 3, border: '0.1px solid #4af0e5', borderRadius: 3 }}>{item.ability.name}</p>)
            })}
          </div>
        </div>

        <div >
          <h2 style={{ color: "#eb347d" }}>Moves</h2>
          <div style={{ display: "grid", gridTemplateColumns: 'auto auto auto auto auto auto auto' }}>
            {pokemonData && pokemonData.moves.map(item => {
              return (<p key={item.url} style={{ padding: 3, border: '0.1px solid #4af0e5', borderRadius: 3, marginLeft: 10 }}>{item.move.name}</p>)
            })}
          </div>
        </div>
        <div>
          <div style={{ marginRight: 20 }}>
            <h2 style={{ color: "#eb347d" }}>Species</h2>
            <div>
              <span>Base Happiness</span>
              <ProcessBar width={'250px'} value={pokemonSpecies && pokemonSpecies.base_happiness} />
            </div>
            <div>
              <span>Capture Rate</span>
              <ProcessBar width={'250px'} value={pokemonSpecies && pokemonSpecies.capture_rate} />
            </div>
            <div>
              <p>Color: {pokemonSpecies && pokemonSpecies.color.name}</p>
            </div>
            <div>
              <p>Growth Rate: {pokemonSpecies && pokemonSpecies.growth_rate.name}</p>

            </div>
            <div>
              <p>Habitat: {pokemonSpecies && pokemonSpecies.habitat.name}</p>

            </div>
            <div>
              <p>Is Baby: {pokemonSpecies && pokemonSpecies.is_baby ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p>Is Legendary: {pokemonSpecies && pokemonSpecies.is_legendary ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p>
                Is Mythical: {pokemonSpecies && pokemonSpecies.is_mythical ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p>
                Shape: {pokemonSpecies && pokemonSpecies.shape.name}
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default PokemonScreen