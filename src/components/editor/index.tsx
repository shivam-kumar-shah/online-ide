import Editor, { useMonaco, loader } from "@monaco-editor/react";
import { useState } from "react";
import ToolBar from "./components/toolBar";
type Props = {};

const CodeEditor = (props: Props) => {
  const [state, setState] = useState("// some comment");

  return (
    <div
      id="code__editor"
      className="flex h-full w-1/2 resize-x flex-col rounded-md border border-font-secondary bg-editor-surface"
    >
      <ToolBar />
      <Editor
        defaultLanguage="typescript"
        value={state}
        className="h-full w-full rounded-md"
        theme="vs-dark"
        onChange={(value) => setState(value ?? "")}
        options={{
          fontFamily: "Fira Code",
          fontLigatures: true,
          autoClosingBrackets: "always",
          formatOnType: true,
          formatOnPaste: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
