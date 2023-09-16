import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Button = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <button
      className={`rounded-md bg-accent text-font-primary p-2 hover:scale-y-110 active:scale-100 transition-all ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
