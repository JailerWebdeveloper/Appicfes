import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Estudiantes = () => {
  const [Estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Estudiantes/Todos"
        );
        setEstudiantes(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  console.log(Estudiantes);
  const Filtered = Estudiantes.filter(
    (filtrado) =>
      filtrado.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filtrado.Nit_institucion.toString().includes(searchTerm)
  );

  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Administracion Estudiantes
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link
              to="/menu/NuevoEstudiante"
              className="btn btn-secondary btn-xl"
            >
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
          <table className="table table-xs border  overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Municipio</th>
                <th>Institucion</th>
                <th>NombreAcu</th>
                <th>TelefonoAcu</th>
                <th>Estado</th>
                <th>Nit_institucion</th>
                <th>N.Documento</th>
                <th>Grado</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Cargando...</td>
                </tr>
              ) : (
                Filtered.map((Estudiante, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-black">{Estudiante.Nombre}</td>
                    <td>{Estudiante.Apellido}</td>
                    <td>{Estudiante.Telefono}</td>
                    <td>{Estudiante.Direccion}</td>
                    <td>{Estudiante.Municipio}</td>
                    <td>{Estudiante.Colegio}</td>
                    <td>{Estudiante.NombreApeAcu}</td>
                    <td>{Estudiante.TelefonoAcu}</td>
                    <td>{Estudiante.Estado}</td>
                    <td>{Estudiante.Nit_institucion}</td>
                    <td>{Estudiante.Documento}</td>
                    <td>{Estudiante.Grado}</td>
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
                <th>Direccion</th>
                <th>Municipio</th>
                <th>Institucion</th>
                <th>NombreAcu</th>
                <th>TelefonoAcu</th>
                <th>Estado</th>
                <th>Nit_institucion</th>

                <th>N.Documento</th>

                <th>Grado</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Estudiantes;
