import styled from "styled-components";
import { NextButton, BackButton } from "../../components/Button/TypeButton";
export const GridContent = styled.section`
  display: grid;
  grid-template-columns: auto 450px;
`;

export const GridList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  color: #444;
  margin-top: 15px;
`;
export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 450px);
  justify-content: space-around;
  color: #444;
  margin-top: 15px;
`;
export const Next = styled(NextButton)`
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

export const Prev = styled(BackButton)`
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
