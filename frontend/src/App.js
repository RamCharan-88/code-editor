import { useState } from "react";
import axios from "axios";
import CodeEditor from "./components/CodeEditor";
import Terminal from "./components/Terminal";

const snippets = {
  Print: `print("Hello, World!")`,
  Loop: `for i in range(5):\n    print(i)`,
};

function App() {
  const [code, setCode] = useState(snippets.Print);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState("vs-dark");

  const runCode = async () => {
    const res = await axios.post("http://localhost:8000/api/run/", { code, input });
    setOutput(res.data.output || res.data.error);
  };

  return (
    <div>
      <button onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}>
        Toggle {theme === "vs-dark" ? "Light" : "Dark"}
      </button>
      <select onChange={(e) => setCode(snippets[e.target.value])}>
        <option value="">Snippets</option>
        {Object.keys(snippets).map((k) => (
          <option key={k} value={k}>{k}</option>
        ))}
      </select>
      <textarea
        placeholder="Enter input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={runCode}>Run</button>
      <CodeEditor code={code} setCode={setCode} theme={theme} />
      <Terminal output={output} />
    </div>
  );
}

export default App;
