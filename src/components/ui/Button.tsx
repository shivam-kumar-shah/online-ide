import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Button = ({ children }: PropsWithChildren<Props>) => {
  return (
    <button className="rounded-lg bg-accent text-font-primary">
      {children}
    </button>
  );
};

export default Button;
