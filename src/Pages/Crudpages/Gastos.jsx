import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Gastos = () => {
  const [Gastos, setGastos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Gastos/Todos"
        );
        setGastos(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  const Filtered = Gastos.filter(
    (filtrado) =>
      filtrado.Tipo_gasto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filtrado.Id_Usuario.toString().includes(searchTerm)
  );
  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Gastos
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
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
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
                <th>ID_Gasto</th>
                <th>Descripcion</th>
                <th>Tipo Gasto</th>
                <th>Gasto</th>
                <th>Fecha</th>
                <th>Id_Usuario</th>
                <th>Grado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Cargando...</td>
                </tr>
              ) : (
                Filtered.map((Gasto, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-black">{Gasto.Id_gasto}</td>
                    <td>{Gasto.Descripcion}</td>
                    <td>{Gasto.Tipo_gasto}</td>
                    <td>{Gasto.Gasto}</td>
                    <td>{Gasto.Fecha}</td>
                    <td>{Gasto.Id_Usuario}</td>
                    <td>{Gasto.Grado}</td>

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
                <th>ID_Gasto</th>
                <th>Descripcion</th>
                <th>Tipo Gasto</th>
                <th>Gasto</th>
                <th>Fecha</th>
                <th>Id_Usuario</th>
                <th>Grado</th>
                <th>Opciones</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gastos;
