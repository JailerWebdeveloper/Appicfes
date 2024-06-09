import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const BancoPracticas = () => {
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPractice, setSelectedPractice] = useState(null);

  useEffect(() => {
    const fetchPractices = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4258/API/V2/ContentPractice/GetAll"
        );
        setPractices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar las prácticas:", error);
      }
    };
    fetchPractices();
  }, []);

  const handlePracticeSelect = (event) => {
    setSelectedPractice(event.target.value);
  };

  const handleDeletePractice = async () => {
    try {
      await axios.delete(
        `https://upc-codex.tech:4258/API/V2/ContentPractice/${selectedPractice}`
      );
      alert("Práctica eliminada exitosamente");
      setPractices(practices.filter((practice) => practice.id !== selectedPractice));
      setSelectedPractice(null);
    } catch (error) {
      console.error("Error al eliminar la práctica:", error);520
  };
  }
  return (
    <div className="w-full p-10 bg-white flex flex-col gap-5 rounded-lg">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">Banco de Prácticas</h1>
      <div className="flex gap-5 justify-end items-center">
        <div className="join">
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Link to="/menu/CrearPractica" className="btn btn-secondary btn-xl">
          Nueva Práctica
        </Link>
      </div>
    
      <div className="overflow-x-auto h-[550px] overflow-y-auto bg-base w-full">
        <table className="table table-xs border overflow-y-auto w-full">
          <thead className="text-accent">
            <tr>
              <th></th>
              <th>Nombre Practica</th>
              <th>ID de practica</th>
              <th>#Preguntas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">Cargando...</td>
              </tr>
            ) : (
              practices.map((practice, index) => (
                <tr key={practice.id}>
                  <td>{index + 1}</td>
                  <td className="text-black pl-5">{practice.Nombre}</td>
                  <td className="text-black pl-5">{practice.IdPractica}</td>
                  <td className="text-black pl-10">{practice.Preguntas.length}</td>
                  <td>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => {
                        setSelectedPractice(practice.id);
                        handleDeletePractice();
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot className="text-accent">
            <tr>
              <th></th>
              <th>Nombre Practica</th>
              <th>ID de practica</th>
              <th>#Preguntas</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default BancoPracticas;
