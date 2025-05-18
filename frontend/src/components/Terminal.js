function Terminal({ output }) {
  return (
    <div style={{ background: "#000", color: "#0f0", padding: "1rem" }}>
      <pre>{output}</pre>
    </div>
  );
}

export default Terminal;
