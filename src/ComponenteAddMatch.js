import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const ComponenteAddMatch = (datos) => {
  const [tipo, setTipo] = useState(["Voley pista", "Voley playa", "Fut-Voley"]);
  const [partido, setPartido] = useState({
    dia: "",
    hora: "",
    organizador: "",
    presupuesto: 0,
    tipo: "",
    equipo: [],
    privado: false,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [integrante, setIntegrante] = useState("");

  const [equipo, setEquipo] = useState([]);

  const handleIntegrante = () => {
    setPartido({ ...partido, equipo: [...partido.equipo, integrante] });
    setIntegrante("");
  };
  const handleInputs = ({ target }) => {
    if (target.name === "privado") {
      setPartido({ ...partido, [target.name]: target.checked });
    } else {
      setPartido({ ...partido, [target.name]: target.value });
    }
  };
  return (
    <>
      <h2>Agregar partido</h2>
      <form class="row g-3">
        <div className="col-6">
          <label className="form-label">Día del partido</label>
          <input
            type="date"
            className="form-control"
            onChange={handleInputs}
            name="dia"
            value={partido.dia}
          ></input>
        </div>
        <div className="col-6">
          <label className="form-label ">Hora del partido</label>
          <input
            type="time"
            className="form-control"
            onChange={handleInputs}
            name="hora"
            value={partido.hora}
          ></input>
        </div>
        <div className="col-6">
          <input
            type="email"
            placeholder="Correo organizador"
            className="form-control"
            onChange={handleInputs}
            name="organizador"
            value={partido.organizador}
          ></input>
        </div>
        <div className="col-md-6">
          <select
            className="form-control"
            name="tipo"
            onChange={handleInputs}
            value={partido.tipo}
          >
            {tipo.map((tipo, index) => (
              <option key={index}>{tipo}</option>
            ))}
          </select>
        </div>
        <div className="col-6">
          <label className="form-label">Presupuesto</label>
          <input
            type="number"
            className="form-control"
            onChange={handleInputs}
            name="presupuesto"
            value={partido.presupuesto}
          ></input>
        </div>
        

        <div className="col-12">
          <label className="form-label">Integrantes</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setIntegrante(e.target.value);
            }}
            name="integrantes"
            value={integrante}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              integrante.length > 0
                ? handleIntegrante()
                : alert("Por favor mete algo en el integrante");
            }}
          >
            Agregar integrante
          </button>
          {/* <button
                                onClick={(e) => {
                                e.preventDefault();
                                setPartido({ ...partido, equipo: equipo });
                                }}
                            >
                                Validar equipo
                            </button> */}
          {/* <button
                                onClick={(e) => {
                                e.preventDefault();

                                setPartido({
                                    ...partido,
                                    equipo: partido.equipo.filter((data) => {
                                    return data === "Borja";
                                    }),
                                });
                                }}
                            >
                                Eliminar equipo
                            </button> */}
        </div>

        <ul>
          {partido.equipo.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
        <div className="mb-3 form-check">
          <input
            id="privado"
            type="checkbox"
            className="form-check-input"
            onChange={handleInputs}
            name="privado"
            checked={partido.privado}
          ></input>
          <label className="form-check-label" htmlFor="core">
            partido privado
          </label>
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            datos.setMatch((valor_anterior) => {
              return [...valor_anterior, partido];
            });

            setPartido({
              dia: "",
              hora: "",
              organizador: "",
              presupuesto: 0,
              tipo: "",
              equipo: [],
              privado: false,
            });
          }}
        >
          Agregar partido
        </button>
      </form>
    </>
  );
};

export default ComponenteAddMatch;
