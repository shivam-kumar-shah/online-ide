import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const SubTitle = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={`text-font-secondary ${className}`}>{children}</div>;
};

export default SubTitle;
