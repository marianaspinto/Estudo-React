import React from "react";
import Planets from "./components/planets";

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
      <Planets />
    </div>
  );
}

export default App;
