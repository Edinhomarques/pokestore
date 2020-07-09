import React from "react";
import { Button } from "./Button";
import { FiSearch, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";
export const SearchButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiSearch />
    {children}
  </Button>
);

export const AddShoppingButton = ({ children, ...props }) => (
  <Button {...props}>
    <MdAddShoppingCart />
    {children}
  </Button>
);
export const NextButton = ({ children, ...props }) => (
  <Button {...props}>
    {children}
    <FiArrowRight />
  </Button>
);

export const BackButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiArrowLeft />
    {children}
  </Button>
);

export const CompleteShopButton = ({ children, ...props }) => (
  <Button {...props}>
    <MdShoppingCart />
    {children}
  </Button>
);
