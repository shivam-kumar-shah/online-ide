import Editor from "@monaco-editor/react";
import { useState } from "react";
import ToolBar from "./components/toolBar";
import { useDispatch, useSelector } from "react-redux";
import { codeAction } from "../../redux/reducers/codeReducer";
import Console from "./components/console";
import { codeSelector } from "../../redux/store";
interface CodeEditorProps {
  initialValue?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue }) => {
  const state = useSelector(codeSelector);
  const { source, lang } = state;
  const dispatch = useDispatch();

  // To get ref of the editor
  // const editorRef = useRef<any>(null);
  // onMount={handleEditorDidMount} (property in component);
  // const handleEditorDidMount: OnMount = (editor, monaco) => {
  //   editorRef.current = editor;
  // };

  return (
    <div
      id="code__editor"
      className="flex h-full w-1/2 resize-x flex-col rounded-md border border-font-secondary bg-editor-surface"
    >
      <ToolBar />
      <Editor
        defaultValue={initialValue}
        value={source}
        language={lang.toString()}
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
          wordWrap: "on",
          showUnused: false,
          fontSize: 16,
          // scrollBeyondLastLine:false,
          automaticLayout: true,
        }}
      />
      <Console />
    </div>
  );
};

export default CodeEditor;
