import React from "react";

// Criando um component
function HelloWorld() {
  return <h1>Hello World</h1>;
}

// Injetando no DOM
function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
