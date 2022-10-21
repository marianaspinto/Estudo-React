import React, { Fragment } from "react";
import "./style.css";

const Planet = () => {
  return (
    <div>
      <h4>Mercúrio</h4>

      <p>
        Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o
        Sol a cada 87,969 dias terrestres. A sua órbita tem a maior
        excentricidade e o seu eixo apresenta a menor inclinação em relação ao
        plano da órbita dentre todos os planetas do Sistema Solar.
      </p>
      <img
        class="gray-img"
        src="https://static.onecms.io/wp-content/uploads/sites/21/2019/10/mercurio.jpg"
      ></img>
    </div>
  );
};

export default Planet;
