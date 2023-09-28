import React from "react";
import Header from "../components/layout/header";

type Props = {};

const Problems = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <section className="flex h-full w-full flex-row gap-x-2 overflow-auto p-4"></section>
    </div>
  );
};

export default Problems;
