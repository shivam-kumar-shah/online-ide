import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Button = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <button
      className={`rounded-md bg-accent p-2 text-font-primary transition-all ease-in-out hover:scale-y-110 active:scale-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
