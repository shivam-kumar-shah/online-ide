import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-red-300 header">
      <div className="logo__pic">
        <img src="/logo.png" alt="logo" className="" />
      </div>
    </div>
  );
};

export default Header;
