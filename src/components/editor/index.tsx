import Editor, { useMonaco, loader } from "@monaco-editor/react";
import { useState } from "react";
import ToolBar from "./components/toolBar";
import { useDispatch, useSelector } from "react-redux";
import { codeAction } from "../../redux/reducers/codeReducer";
import { RootState } from "../../redux/store";
import Console from "./components/console";
type Props = {};

const CodeEditor = (props: Props) => {
  const state = useSelector((state: RootState) => state.codeReducer);
  const { source } = state;
  const dispatch = useDispatch();

  return (
    <div
      id="code__editor"
      className="flex h-full w-1/2 resize-x flex-col rounded-md border border-font-secondary bg-editor-surface"
    >
      <ToolBar />
      <Editor
        defaultLanguage="typescript"
        value={source}
        className="w-full grow rounded-md pt-3"
        theme="vs-dark"
        onChange={(value) => dispatch(codeAction.setSource(value ?? ""))}
        options={{
          fontFamily: "Fira Code",
          fontLigatures: true,
          autoClosingBrackets: "always",
          formatOnType: true,
          formatOnPaste: true,
          minimap: { enabled: false },
        }}
      />
      <Console />
    </div>
  );
};

export default CodeEditor;
