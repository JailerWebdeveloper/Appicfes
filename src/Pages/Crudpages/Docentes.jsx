import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";

const Docentes = () => {
  const [Docentes, setDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://srv435312.hstgr.cloud:4200/API/V2/Docentes/Todos"
        );
        setDocentes(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  const Filtered = Docentes.filter((filtrado) =>
  filtrado.Nombre.toLowerCase().includes(searchTerm.toLowerCase())||
  filtrado.Nit_institucion.toString().includes(searchTerm)
);


  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Administracion Docentes
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link to="/menu/NuevoDocente" className="btn btn-secondary btn-xl">
              Nueva entrada
            </Link>
          </div>
          <div className="join md:order-2  order-1">
            <div>
              <div>
              <input
                  className="input input-bordered join-item"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
           
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        {/*Tabla */}

        <div className="overflow-x-auto h-[600px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Materia_Dicta</th>
                <th>Cobro</th>
                <th>Institucion</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
            {loading ? (
                  <tr>
                    <td colSpan="4">Cargando...</td>
                  </tr>
                ) : (
                  Filtered.map((Docente, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-black">{Docente.Nombre}</td>
                      <td>{Docente.Apellido}</td>
                      <td>{Docente.Telefono}</td>
                      <td>{Docente.Materia_Dicta}</td>
                      <td>{Docente.Cobro}</td>
                      <td>{Docente.Nit_institucion}</td>
                      <td>
                        <AiFillSetting className="btn-xs btn btn-ghost w-auto h-2 mx-auto" />
                      </td>
                    </tr>
                  ))
                )}
            </tbody>
            <tfoot className="text-accent">
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Materia_Dicta</th>
                <th>Cobro</th>
                <th>Institucion</th>
                <th>Opciones</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Docentes;
