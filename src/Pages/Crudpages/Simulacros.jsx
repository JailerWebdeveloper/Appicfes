import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Simulacros = () => {
  const [simulacros, setsimulacros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editmodalopen, seteditmodalopen] = useState(false); // Nuevo estado para controlar la apertura/cierre del modal
  const [formdata, setFormdata] = useState({
    Id: "",
    Empresa: "",
    CuadernillosComprados: 0,
    Fecha_Simulacro: "",
    Grado: "",
  });

  const handlecanceledit = () => {
    seteditmodalopen(false);
    setFormdata({
      Id: "",
      Empresa: "",
      CuadernillosComprados: 0,
      Fecha_Simulacro: "",
      Grado: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirm = async () => {
    if (formdata.Fecha_Simulacro && formdata.Empresa) {
      try {
        const data = {
          Id: formdata.Id,
          Empresa: formdata.Empresa,
          CuadernillosComprados: parseInt(formdata.CuadernillosComprados),
          Fecha_Simulacro: formdata.Fecha_Simulacro,
          Grado: formdata.Grado,
        };
        console.log(data);
        const response = await axios.put(
          `https://upc-codex.tech:4200/API/V2/Simulacro/${formdata.Id}`,
          data
        );
        alert(response.data.message);
        location.reload();
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message + " " + error.response.data.error);
      }
    } else {
      alert("debes ingresar todos los datos");
    }
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Simulacros/TodosSimulacros"
        );
        setsimulacros(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  const Filtered = simulacros.filter(
    (filtrado) =>
      filtrado.Id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filtrado.Empresa.toString().includes(searchTerm)
  );
  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        simulacros
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link
              to="/menu/NuevoSimulacro"
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

        <div className="overflow-x-auto h-[450px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border  overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>ID_Simulacro</th>
                <th>Empresa</th>
                <th>CuadernillosComprados</th>
                <th>Fecha_Simulacro</th>
                <th>Grado</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Cargando...</td>
                </tr>
              ) : (
                Filtered.map((sim, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-black">{sim.Id}</td>
                    <td>{sim.Empresa}</td>
                    <td>{sim.CuadernillosComprados}</td>
                    <td>{sim.Fecha_Simulacro}</td>
                    <td>{sim.Grado}</td>
                    <td>
                      <AiFillSetting
                        onClick={() => {
                          setFormdata({
                            Id: sim.Id,
                            Empresa: sim.Empresa,
                            CuadernillosComprados: sim.CuadernillosComprados,
                            Fecha_Simulacro: sim.Fecha_Simulacro,
                            Grado: sim.Grado,
                          });
                          seteditmodalopen(true);
                        }}
                        className="btn-xs btn btn-ghost w-auto h-2 mx-auto"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot className="text-accent">
              <tr>
                <th></th>
                <th>ID_Simulacro</th>
                <th>Empresa</th>
                <th>CuadernillosComprados</th>
                <th>Fecha_Simulacro</th>
                <th>Grado</th>
              </tr>
            </tfoot>
          </table>
        </div>
        {editmodalopen && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg font-bold mb-4">Editar Simalucro</h3>
                  <p className="text-gray-700 mb-6">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">
                          Fecha de expedicion del gasto
                        </span>
                      </div>
                      <input
                        name="Fecha_Simulacro"
                        value={formdata.Fecha_Simulacro}
                        onChange={handleChange}
                        type="date"
                        className="p-2 focus:border-primary md:mt-3 bg-base text-base rounded-xl"
                      />
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">
                          Ingresar Cantidad Cuadernillos
                        </span>
                      </div>
                      <input
                        value={formdata.CuadernillosComprados}
                        onChange={handleChange}
                        name="CuadernillosComprados"
                        type="number"
                        placeholder="Cuadernillos Comprados"
                        className="input input-primary input-bordered w-full max-w-xs"
                      />
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">
                          Ingresar el Nombre de la Empresa
                        </span>
                      </div>
                      <input
                        onChange={handleChange}
                        value={formdata.Empresa}
                        type="text"
                        name="Empresa"
                        placeholder="Empresa"
                        className="input input-primary input-bordered w-full max-w-xs"
                      />
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Selecciona Grado</span>
                      </div>
                      <select
                        value={formdata.Grado}
                        onChange={handleChange}
                        name="Grado"
                        className="select select-primary w-full max-w-xs"
                      >
                        <option disabled selected>
                          Grado
                        </option>
                        <option value="10">Decimo 10°</option>
                        <option value="11">Once 11°</option>
                      </select>
                    </label>
                  </p>
                  <div className="flex justify-end">
                    <button onClick={handlecanceledit} className="btn mr-4">
                      Cancelar
                    </button>
                    <button onClick={handleConfirm} className="btn btn-accent">
                      Confirmar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulacros;
