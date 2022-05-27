import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Navegacion from './Navegacion';
import ComponenteAddMatch from './ComponenteAddMatch';
import ComponenteListPartidos from './ComponenteListPartidos';
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'


const MainApp = props => {



  const [partidos, setPartidos] = useState([]);
  console.log(partidos);
  const partidosCollectionRef = collection(db, 'partidos');



  useEffect(() => {
    const getPartidos = async () => {
      const data = await getDocs(partidosCollectionRef);
      setPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPartidos();
  }, [])
  const [visualizacion, setVisualizacion] = useState({
    componenteAddMatch: true,
    // componenteTodos: true,
    // componenteFiltro: false,
  });
  return (
    <div className="App container">
      {partidos.map((partido) => {
        return (<div>
          {" "}
          <h1>Dia: {partido.dia}</h1>
          <h1>Hora: {partido.hora}</h1>
          <h1>Organizador: {partido.organizador}</h1>
        </div>)
      })}
      <Navegacion visualizacion={setVisualizacion} />
      <div className="container mt-4">
        <h1>Aplicación de gestión de Partidos y torneos de Volleyball</h1>
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