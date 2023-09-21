import Editor, { useMonaco, loader } from "@monaco-editor/react";
import { useState } from "react";

type Props = {};

const CodeEditor = (props: Props) => {
  const [state, setState] = useState("// some comment");
  return (
    <div
      id="code__editor"
      className="border border-font-secondary bg-editor-surface rounded-md py-6 w-1/2 h-full resize-x"
    >
      <Editor
        defaultLanguage="typescript"
        value={state}
        className="w-full h-full rounded-md"
        theme="vs-dark"
        onChange={(value) => setState(value ?? "")}
        options={{
          fontFamily: "Fira Code",
          fontLigatures: true,
          autoClosingBrackets: "always",
          formatOnType: true,
          formatOnPaste: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
