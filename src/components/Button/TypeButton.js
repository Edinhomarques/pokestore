import React from "react";
import { Button } from "./Button";
import { FiSearch, FiShoppingBag, FiArrowLeft } from "react-icons/fi";

export const SearchButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiSearch />
    {children}
  </Button>
);

export const ShoppingButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiShoppingBag />
    {children}
  </Button>
);

export const BackButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiArrowLeft />
    {children}
  </Button>
);
