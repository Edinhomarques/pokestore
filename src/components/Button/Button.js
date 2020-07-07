import React from "react";

export const Button = ({ children, ...props }) => (
  <div>
    <button {...props}> {children}</button>
  </div>
);
