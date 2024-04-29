import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Notas = () => {
  const [Notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSimulacro, setSelectedSimulacro] = useState(null); // Nuevo estado para almacenar el ID del simulacro seleccionado

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Notas/Todas"
        );
        setNotas(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  const Filtered = Notas.filter(
    (filtrado) =>
      filtrado.Id_Simulacro.toString().includes(searchTerm) ||
      filtrado.Id_Alumno.toString().includes(searchTerm)
  );

  const uniqueSimulacroIds = [
    ...new Set(Notas.map((simulacro) => simulacro.Id_Simulacro)),
  ];

  const handleSimulacroSelect = (event) => {
    setSelectedSimulacro(event.target.value); // Actualiza el ID del simulacro seleccionado
  };

  const handleDeleteSimulacro = async () => {
    try {
      await axios.delete(
        `https://upc-codex.tech:4200/API/V2/Notas/BorrarPorSimulacro/${selectedSimulacro}`
      );
      // Realiza la acción de eliminación
      alert("Simulacro eliminado exitosamente");
      window.location.href = "/Menu/Notas";
    } catch (error) {
      console.error("Error al eliminar el simulacro:", error);
      alert("No se pudo realizar la accion")
    }
  };

  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Notas
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link to="/menu/NuevaNota" className="btn btn-secondary btn-xl">
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
              <button className="btn btn-ghost  w-auto">
                <FaSearch className="h-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="self-end mr-16 join">
          <select onChange={handleSimulacroSelect} className="select join-item select-bordered w-full max-w-xs">
            <option disabled selected>
              Selecciona un simulacro a eliminar
            </option>
            {uniqueSimulacroIds.map((simulacroId) => (
              <option key={simulacroId} value={simulacroId}>
                {simulacroId}
              </option>
            ))}
          </select>
          <button
            className={`join-item btn ${
              selectedSimulacro ? "btn-error" : "btn-disabled"
            }`} // Aplica la clase btn-disabled si no se ha seleccionado un simulacro
            onClick={handleDeleteSimulacro}
            disabled={!selectedSimulacro}
          >
            Eliminar
          </button>
        </div>

        {/*Tabla */}

        <div className="overflow-x-auto h-[450px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border  overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Id_Simulacro</th>
                <th>Id_Alumno</th>
                <th>Nota_LecturaCritica</th>
                <th>Nota_Matematicas</th>
                <th>Nota_Sociales</th>
                <th>Nota_Naturales</th>
                <th>Nota_Ingles</th>
                <th>Nota_Ingles</th>
                <th>Global</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Cargando...</td>
                </tr>
              ) : (
                Filtered.map((Nota, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-black">{Nota.Id_Simulacro}</td>
                    <td>{Nota.Id_Alumno}</td>
                    <td>{Nota.Nota_LecturaCritica}</td>
                    <td>{Nota.Nota_LecturaCritica}</td>
                    <td>{Nota.Nota_Matematicas}</td>
                    <td>{Nota.Nota_Sociales}</td>
                    <td>{Nota.Nota_Naturales}</td>
                    <td>{Nota.Nota_Ingles}</td>
                    <td>{Nota.Global}</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot className="text-accent">
              <tr>
                <th></th>
                <th>Id_Simulacro</th>
                <th>Id_Alumno</th>
                <th>Nota_LecturaCritica</th>
                <th>Nota_Matematicas</th>
                <th>Nota_Sociales</th>
                <th>Nota_Naturales</th>
                <th>Nota_Ingles</th>
                <th>Nota_Ingles</th>
                <th>Global</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notas;
