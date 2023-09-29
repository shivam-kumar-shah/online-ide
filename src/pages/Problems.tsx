import React from "react";
import Header from "../components/layout/header";
import Title from "../components/ui/Title";
import { BiLinkExternal } from "react-icons/bi";
import Table from "../components/problems";

type Props = {};

const Problems = (props: Props) => {
  return (
    <div className="flex h-full max-h-screen w-screen flex-col">
      <Header />
      <section className="h-full w-full overflow-hidden p-4">
        <main className="mx-auto h-full w-full max-w-6xl overflow-y-auto scrollbar-thin scrollbar-thumb-font-secondary">
          <Title className="mb-4 text-2xl">Problems</Title>
          <Table />
        </main>
      </section>
    </div>
  );
};

export default Problems;
