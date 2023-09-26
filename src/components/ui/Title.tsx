import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Title = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <h2 className={`font-bold text-font-primary ${className}`}>{children}</h2>
  );
};

export default Title;
