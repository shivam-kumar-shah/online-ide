import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Title = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={`text-font-primary font-bold ${className}`}>{children}</div>
  );
};

export default Title;
