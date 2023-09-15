import { DragEventHandler, useEffect, useState } from "react";
import Editor from "../components/editor";
import Prompt from "../components/prompt";
import Header from "../components/layout/header";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <main className="flex flex-row p-3 w-full h-full gap-x-2 overflow-auto">
        <Prompt />
        <Editor />
      </main>
    </div>
  );
};

export default Home;
