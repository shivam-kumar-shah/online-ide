import React, {
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SubTitle = ({
  className,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`text-font-secondary ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default SubTitle;
