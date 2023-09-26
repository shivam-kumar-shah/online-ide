import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Title = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={`font-bold text-font-primary ${className}`}>{children}</div>
  );
};

export default Title;
