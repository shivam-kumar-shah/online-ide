import { DragEventHandler, useEffect, useState } from "react";
import Editor from "../components/editor";
import Prompt from "../components/prompt";
import Header from "../components/layout/header";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex h-full max-h-screen w-full flex-col">
      <Header />
      <main className="flex h-full w-full flex-row gap-x-2 overflow-auto p-3">
        <Prompt />
        <Editor />
      </main>
    </div>
  );
};

export default Home;
