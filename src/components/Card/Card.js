import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ShoppingButton } from "../Button/TypeButton";
import PokeBall from "../../assets/pokeball.svg";
import axios from "axios";

const CardBody = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 5px;
  padding: 10px;
  display: flex;
  align-content: center;
  flex-direction: column;
  box-shadow: 0 0 5px 0px #e2e2e2;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
  }
  &::before {
    border-left: 1px solid var(--secondary);
    border-right: 1px solid var(--secondary);
    transform: scaleY(0);
  }

  &::after {
    border-top: 1px solid var(--secondary);
    border-bottom: 1px solid var(--secondary);
    transform: scaleX(0);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const CardTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

const CardImage = styled.img`
  object-fit: contain;
`;

const CardLoading = styled.img`
  object-fit: contain;
  max-height: 60px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
const FooterCard = styled.div`
  display: flex;
  height: 100%;
  padding-top: 5px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const CardPrice = styled.span`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

const ShopButton = styled(ShoppingButton)`
  background-color: transparent;
  border: 1px solid var(--gray);
  padding: 8px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
`;

export default function Card({ pokemon }) {
  const [pokemonDetail, setPokemonDetail] = useState({});
  useEffect(() => {
    async function getDetailPokemon() {
      const response = await axios.get(`${pokemon.url}`);
      console.log(response.data);
      setPokemonDetail(response.data);
    }
    getDetailPokemon();
  }, [pokemon.url]);
  return (
    <CardBody>
      <CardTitle>{pokemonDetail.name}</CardTitle>
      {pokemonDetail.sprites !== undefined ? (
        <CardImage
          src={pokemonDetail.sprites.front_default}
          alt={pokemonDetail.name}
        />
      ) : (
        <CardLoading src={PokeBall} alt={pokemon.name} />
      )}
      <FooterCard>
        <ShopButton>Adicionar</ShopButton>
        <CardPrice>R${pokemonDetail.base_experience}</CardPrice>
      </FooterCard>
    </CardBody>
  );
}
