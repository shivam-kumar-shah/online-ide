import React from "react";
import "./styles.scss";

type Props = {
  className?: string;
  loaderColor?: string;
};

const Loading = ({ className, loaderColor }: Props) => {
  return (
    <div className={`loading__background ${className}`}>
      <div className={`loading__action ${loaderColor}`}></div>
      <div className={`loading__placeholder `}></div>
      <div className={`loading__placeholder `}></div>
      <div className={`loading__placeholder `}></div>
    </div>
  );
};

export default Loading;
