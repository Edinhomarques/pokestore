import React from "react";
import styled from "styled-components";
import Poke from "../../assets/pokeball.svg";
import { CompleteShopButton } from "../Button/TypeButton";

const CartContent = styled.div`
  border: 1px solid #ff0000;
  border-radius: 15px;
  margin-top: 25px;
  margin: 25px 7.5px 0 7.5px;
  position: relative;
`;
const CartHeader = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 55px;
  background: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
const CartWrap = styled.div`
  height: 450px;
  padding: 10px;
  overflow-y: scroll;
`;
const CartItem = styled.div`
  height: 75px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
const CartImg = styled.img`
  height: 75px;
  overflow: hidden;
  margin-right: 25px;
`;
const CartName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const CartFooter = styled.footer`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 95px;
  background: #ff0000;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartButtomFooter = styled(CompleteShopButton)`
  height: 55px;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--primary);
  font-weight: bold;
  border: 2px solid #ffff;
  color: white;
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;
`;
const TotalPrice = styled.div`
  font-size: 16px;
  border: 2px solid #ffff;
  height: 55px;
  width: 190px;
  border-radius: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  font-weight: bold;
`;

export const Cart = ({ shoppingItems }) => (
  <CartContent>
    {console.log(shoppingItems)}
    <CartHeader>
      <h1>Carrinho</h1>
    </CartHeader>
    <CartWrap>
      {shoppingItems.map((poke, index) => (
        <CartItem key={index}>
          <CartImg src={poke.pokeImage} />
          <CartName> {poke.name}</CartName>
          <CartName> R$ {poke.price}</CartName>
        </CartItem>
      ))}
    </CartWrap>
    <CartFooter>
      <CartButtomFooter height="20px">Finalizar Comprar</CartButtomFooter>
      <TotalPrice>
        R$
        {shoppingItems
          ? shoppingItems.reduce((acc, curr) => (acc += curr.price), 0)
          : 0}
      </TotalPrice>
    </CartFooter>
  </CartContent>
);
