import React from "react";
import PropTypes from "prop-types";

const ComponenteListPartidos = (props) => {
  return (
    <div>
      <div>
        <h2>Listado de proyectos</h2>
        <ul className="list-group">
          {props.list.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">ORGANIZADOR</th>
                  <th scope="col">FECHA</th>
                </tr>
              </thead>

              <tbody>
                {props.list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.organizador}</td>
                      <td>
                        {item.dia}-{item.hora}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="alert">No hay partidos añadidos</div>
          )}
        </ul>
      </div>
    </div>
  );
};

ComponenteListPartidos.propTypes = {};

export default ComponenteListPartidos;
