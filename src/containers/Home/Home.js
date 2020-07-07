import React, { useState, useEffect } from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import axios from "axios";
const GridContent = styled.section`
  display: grid;
  grid-template-columns: auto 450px;
`;

const GridList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  color: #444;
  margin-top: 15px;
`;

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      );
      const result = response.data.results;
      console.log(result);
      setPokemons(result);
    }
    fetchApi();
  }, []);

  return (
    <div>
      <Topbar />
      <GridContent>
        <GridList>
          {pokemons
            ? pokemons.map((pokemon, index) => (
                <Card key={index} pokemon={pokemon} />
              ))
            : ""}
        </GridList>
        <div>ok2</div>
      </GridContent>
    </div>
  );
}
