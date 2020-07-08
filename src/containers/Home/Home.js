import React, { useState, useEffect } from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import Card from "../../components/Card/Card";
import axios from "axios";
import { GridContent, GridList, Next, Prev, Footer } from "./styles.js";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  useEffect(() => {
    async function fetchApi() {
      console.log(limit, offset);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const result = response.data.results;
      setPokemons(result);
    }
    fetchApi();
  }, [limit, offset]);

  function handleNextPage() {
    setOffset(offset + 12);
  }

  function handlePrevPage() {
    //verifica se já está na primeira página
    if (offset > 0) {
      setOffset(offset - 12);
    }
  }

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
      <Footer>
        <Prev onClick={handlePrevPage}>Voltar Pagina</Prev>
        <Next onClick={handleNextPage}>Proxima Página</Next>
      </Footer>
    </div>
  );
}
