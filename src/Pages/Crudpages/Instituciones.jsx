import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Instituciones = () => {
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Instituciones"
        );
        setInstituciones(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetchInstituciones();
  }, []);

  const filteredInstituciones = instituciones.filter((institucion) =>
    institucion.Nombre_Institucion.toLowerCase().includes(searchTerm.toLowerCase())||
    institucion.Nit_institucion.toString().includes(searchTerm)
  );

  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-2xl font-bold uppercase text-center border-b-2">
          Administración de Instituciones
        </h1>

        <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
          <div className="w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10 justify-center items-center gap-5 rounded-lg">
            <div className="flex items-center justify-center md:order-1 order-2 gap-2">
              <Link to="/menu/NuevaInstitucion" className="btn btn-secondary btn-xl">
                Nueva entrada
              </Link>
            </div>
            <div className="join md:order-2 order-1">
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="indicator">
                <button className="btn join-item">Buscar</button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto h-[600px] overflow-y-auto bg-base w-11/12">
            <table className="table table-xs border h-80 overflow-y-auto w-full">
              <thead className="text-accent">
                <tr>
                  <th></th>
                  <th>Nombre Institución</th>
                  <th>NIT Institución</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">Cargando...</td>
                  </tr>
                ) : (
                  filteredInstituciones.map((institucion, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-black">{institucion.Nombre_Institucion}</td>
                      <td>{institucion.Nit_institucion}</td>
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
                  <th>Nombre Institución</th>
                  <th>NIT Institución</th>
                  <th>Opciones</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instituciones;
