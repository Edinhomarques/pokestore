import React, { useState, useEffect } from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import Card from "../../components/Card/Card";
import { Cart } from "../../components/Cart/Cart";
import axios from "axios";
import { GridContent, GridList, Next, Prev, Footer } from "./styles.js";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [shoppingItems, setShoppingItems] = useState([]);
  useEffect(() => {
    async function fetchApi() {
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
  function addItem(item) {
    // console.log("item", item);
    setShoppingItems([...shoppingItems, item]);
  }

  return (
    <div>
      <Topbar />
      <GridContent>
        <GridList>
          {pokemons
            ? pokemons.map((pokemon, index) => (
                <Card key={index} pokemon={pokemon} addItem={addItem} />
              ))
            : ""}
        </GridList>
        <Cart shoppingItems={shoppingItems} />
      </GridContent>
      <Footer>
        <Prev onClick={handlePrevPage}>Voltar Pagina</Prev>
        <Next onClick={handleNextPage}>Proxima Página</Next>
      </Footer>
    </div>
  );
}
