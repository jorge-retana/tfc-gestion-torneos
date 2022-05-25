import React from 'react'
import './navegacion.css';

const Navegacion = ({ visualizacion }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Proyectos</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="/#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  visualizacion((elemento) => {
                    return {
                      ...elemento,
                      componenteTodos: !elemento.componenteTodos,
                    };
                  });
                }}
              >
                Ver todos
              </a>
            </li>

            <li className="nav-item">
              <a
                href="/#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  visualizacion((elemento) => {
                    return {
                      ...elemento,
                      componenteFiltro: !elemento.componenteFiltro,
                    };
                  });
                }}
              >
                Filtrar proyectos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navegacion