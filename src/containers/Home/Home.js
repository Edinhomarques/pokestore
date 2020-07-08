import React, { useState, useEffect } from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import axios from "axios";
import { NextButton, BackButton } from "../../components/Button/TypeButton";
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
const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 450px);
  justify-content: space-around;
  color: #444;
  margin-top: 15px;
`;
const Next = styled(NextButton)`
  height: 55px;
  width: 155px;
  margin-top: 25px;
  border-radius: 25px;
  font-size: 16px;
  color: var(--primary);
  font-weight: bold;
  border: 2px solid var(--borderButton);
  background-color: var(--secondary);
`;

const Prev = styled(BackButton)`
  height: 55px;
  width: 155px;
  margin-top: 25px;
  border-radius: 25px;
  font-size: 16px;
  color: var(--primary);
  font-weight: bold;
  border: 2px solid var(--borderButton);
  background-color: var(--secondary);
`;

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
        <Prev>Voltar Pagina</Prev>
        <Next>Proxima Página</Next>
      </Footer>
    </div>
  );
}
