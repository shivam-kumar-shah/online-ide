import { DragEventHandler, useEffect, useState } from "react";
import Editor from "../components/editor";
import Prompt from "../components/prompt";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="flex p-3 w-full h-full gap-x-2">
      <Prompt />
      <Editor />
    </main>
  );
};

export default Home;
