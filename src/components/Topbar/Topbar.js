import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 17px;
  background-color: var(--primary);
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;
const LogoImg = styled.img`
  max-height: 65px;
  object-fit: contain;
`;

const Search = styled.input`
  max-width: 600px;
  width: 100%;
  height: 25px;
  margin-left: 15px;
`;

export const Topbar = () => (
  <Container>
    <LogoImg src={Logo} alt="" srcset="" />
    <Search type="text" placeholder="Filtrar Pokemon" />
  </Container>
);
