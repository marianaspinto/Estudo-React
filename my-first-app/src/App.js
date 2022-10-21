import React from "react";

// Criando um component
function HelloWorld() {
  return <h1>Hello World</h1>;
}

//  Arrow Funcion
// function HelloWorld = () => {
//   return <h1>Heelo World</h1>
// }

// Componente de Classe
// Class HelloWorld extends React.Component {
//   render () {
//     return <h1>Heelo World</h1>
//   }
// }

// Injetando no DOM
function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
