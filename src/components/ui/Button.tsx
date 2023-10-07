import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className={clsx(
        "rounded-md bg-accent p-2 text-font-primary transition-all ease-in-out hover:scale-y-110 active:scale-100",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
