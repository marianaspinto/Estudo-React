import React from "react";
import HelloWorld from "./Hello";
import LoremIpsum from "./components/lorem_ipsum";

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
      <LoremIpsum />
    </div>
  );
}

export default App;
