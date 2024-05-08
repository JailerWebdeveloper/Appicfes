import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Usuarios = () => {
  const [Usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Usuario/Todosusuarios"
        );
        setUsuarios(response.data.usuarios);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  const Filtered = Usuarios.filter(
    (filtrado) =>
      filtrado.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filtrado.cedula.toString().includes(searchTerm)
  );

  console.log(Usuarios)
  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Usuarios
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link to="/menu/NuevoGasto" className="btn btn-secondary btn-xl">
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

        <div className="overflow-x-auto h-[450px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border  overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Cedula</th>
                <th>nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Institucion</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Cargando...</td>
                </tr>
              ) : (
                Filtered.map((Usuario, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-black">{Usuario.cedula}</td>
                    <td>{Usuario.nombre}</td>
                    <td>{Usuario.apellido}</td>
                    <td>{Usuario.usuario}</td>
                    <td>{Usuario.Nit_institucion}</td>

                  </tr>
                ))
              )}
            </tbody>
            <tfoot className="text-accent">
              <tr>
              <th></th>
                <th>Cedula</th>
                <th>nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Institucion</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
