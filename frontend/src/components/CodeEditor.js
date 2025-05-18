import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, theme }) {
  return (
    <Editor
      height="60vh"
      language="python"
      theme={theme}
      value={code}
      onChange={(value) => setCode(value)}
    />
  );
}

export default CodeEditor;
