import React, { useState } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navegacion from './Navegacion';
import ComponenteAddMatch from './ComponenteAddMatch';
import ComponenteListPartidos from './ComponenteListPartidos';


const MainApp = props => {

  const [partidos, setPartidos] = useState([]);
  console.log(partidos);
  // props.partidos.map((item, index) => {
  //   return (
  //     console.log('map', item.fecha)

  //   );
  // });
  const [visualizacion, setVisualizacion] = useState({
    componenteAddMatch: true,
    // componenteTodos: true,
    // componenteFiltro: false,
  });
  return (
    <div className="App container">
      <Navegacion visualizacion={setVisualizacion} />
      <div className="container mt-4">
        <h1 className=" ">Aplicación de gestión de Partidos y torneos de Volleyball</h1>
        <h2>El número de partidos actuales es de: {partidos.length}</h2>

        <div className="row mt-4">
          <div className="col-8">
            <ComponenteAddMatch setMatch={setPartidos} />
          </div>
          <div className="col-8">
            <ComponenteListPartidos list={partidos} />
          </div>

        </div>
      </div>
    </div>
  )
}

MainApp.propTypes = {}

export default MainApp