import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";

const Docentes = () => {
  const [instituciones, setInstituciones] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDocenteId, setSelectedDocenteId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editmodalopen, seteditmodalopen] = useState(false);
  const [formdata, setFormdata] = useState({
    Documento: 0,
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Materia_Dicta: "Español",
    Cobro: 0,
    Nit_institucion: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirm = async () => {
    if (formdata.Documento && formdata.Nit_institucion) {
      try {
        const data = {
          Documento: parseInt(formdata.Documento),
          Nombre: formdata.Nombre,
          Apellido: formdata.Apellido,
          Telefono: formdata.Telefono,
          Materia_Dicta: formdata.Materia_Dicta,
          Cobro: parseInt(formdata.Cobro),
          Nit_institucion: parseInt(formdata.Nit_institucion),
        };
        const response = await axios.put(
          `https://upc-codex.tech:4258/API/V2/Docente/${formdata.Documento}`,
          data
        );
        console.log(response);
        console.log(response.data);
        alert(response.data.message);
        window.location.href = "/Menu/Docentes";
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message + " " + error.response.data.error);
      }
    } else {
      alert("debes ingresar todos los datos");
    }
  };

  const handlecanceledit = () => {
    seteditmodalopen(false);
    setFormdata({
      Documento: 0,
      Nombre: "",
      Apellido: "",
      Telefono: "",
      Materia_Dicta: "Español",
      Cobro: 0,
      Nit_institucion: 0,
    });
  }; 

  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4258/API/V2/Instituciones"
        );
        setInstituciones(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetchInstituciones();
  }, []);

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4258/API/V2/Docentes/Todos"
        );
        setDocentes(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetchDocentes();
  }, []);

  const Filtered = docentes.filter(
    (docente) =>
      docente.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      docente.Nit_institucion.toString().includes(searchTerm)
  );

  const handleDeleteDocente = async () => {
    try {
      await axios.delete(
        `https://upc-codex.tech:4258/API/V2/Docente/${selectedDocenteId}`
      );
      alert("Docente eliminado exitosamente");
      setIsModalOpen(false); // Cierra el modal después de eliminar el docente
      setSelectedDocenteId(null); // Deselecciona el ID del docente
      location.reload();
    } catch (error) {
      alert(error.response.data.message + " " + error.response.data.error);

      location.reload();
    }
  };
  console.log(docentes);
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Administración de Docentes
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        <div className="w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10 justify-center items-center gap-5 rounded-lg">
          <div className="flex items-center justify-center md:order-1 order-2 gap-2">
            <Link to="/menu/NuevoDocente" className="btn btn-secondary btn-xl">
              Nueva entrada
            </Link>
          </div>
          <div className="join md:order-2 order-1">
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
              <button className="btn join-item">Buscar</button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto h-[600px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border overflow-y-auto w-full">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Materia Dicta</th>
                <th>Cobro</th>
                <th>Institución</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="9">Cargando...</td>
                </tr>
              ) : (
                Filtered.map((docente, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-black">{docente.Nombre}</td>
                    <td>{docente.Apellido}</td>
                    <td>{docente.Telefono}</td>
                    <td>{docente.Materia_Dicta}</td>
                    <td>{docente.Cobro}</td>
                    <td>{docente.Nit_institucion}</td>
                    <td>
                      <AiFillSetting
                        onClick={() => {
                          setFormdata({
                            Documento: docente.Documento,
                            Nombre: docente.Nombre,
                            Apellido: docente.Apellido,
                            Telefono: docente.Telefono,
                            Materia_Dicta: docente.Materia_Dicta,
                            Cobro: docente.Cobro,
                            Nit_institucion: docente.Nit_institucion,
                          });
                          seteditmodalopen(true);
                        }}
                        className="btn-xs btn btn-ghost w-auto h-2 mx-auto"
                      />
                    </td>
                    <td>
                      <MdDeleteForever
                        className="btn-xs btn btn-ghost w-auto text-red-600 h-2 mx-auto"
                        onClick={() => {
                          setSelectedDocenteId(docente.Documento); // Establece el ID del docente seleccionado
                          setIsModalOpen(true); // Abre el modal al hacer clic en el icono de eliminar
                        }}
                      />
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
                <th>Materia Dicta</th>
                <th>Cobro</th>
                <th>Institución</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </tfoot>
          </table>

          {isModalOpen && (
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
                    <h3 className="text-lg font-bold mb-4">¡ATENCIÓN!</h3>
                    <p className="text-gray-700 mb-6">
                      ¿Estás seguro de eliminar este docente? 
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="btn mr-2"
                        onClick={() => {
                          setIsModalOpen(false); // Cierra el modal al cancelar
                          setSelectedDocenteId(null); // Deselecciona el ID del docente
                        }}
                      >
                        Cancelar
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={handleDeleteDocente}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                    <h3 className="text-lg font-bold mb-4">Editar Docente</h3>
                    <p className="text-gray-700 mb-6">
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">
                            Selecciona Institucion
                          </span>
                        </div>
                        <select
                          onChange={handleChange}
                          value={formdata.Materia_Dicta}
                          name="Materia_Dicta"
                          className="select select-primary w-full max-w-xs"
                        >
                          <option value="Español">Español</option>
                          <option value="Inglés">Inglés</option>
                          <option value="Sociales">Sociales</option>
                          <option value="Biologia">Biologia</option>
                          <option value="Química">Química</option>
                          <option value="Fisica">Fisica</option>
                          <option value="Matematica">Matematica</option>
                        </select>
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">
                            Selecciona Materia que dicta
                          </span>
                        </div>
                        <select
                          name="Nit_institucion"
                          className="select select-primary w-full max-w-xs"
                          onChange={handleChange}
                        >
                          <option value="0">
                            Selecciona Empresa perteneciente
                          </option>
                          {loading ? (
                            <option>Cargando...</option>
                          ) : (
                            instituciones.map((institucion, index) => (
                              <option
                                key={index + 1}
                                value={institucion.Nit_institucion}
                              >
                                {institucion.Nombre_Institucion}
                              </option>
                            ))
                          )}
                        </select>
                      </label>

                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Ingresar el Nombre</span>
                        </div>
                        <input
                          type="text"
                          name="Nombre"
                          value={formdata.Nombre}
                          onChange={handleChange}
                          placeholder="Nombre"
                          className="input input-primary input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">
                            Ingresar el Apellido
                          </span>
                        </div>
                        <input
                          name="Apellido"
                          value={formdata.Apellido}
                          onChange={handleChange}
                          type="text"
                          placeholder="Apellido"
                          className="input input-primary input-bordered w-full max-w-xs"
                        />
                      </label>

                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">
                            Ingresar el Telefono
                          </span>
                        </div>
                        <input
                          name="Telefono"
                          value={formdata.Telefono}
                          onChange={handleChange}
                          type="number"
                          placeholder="Telefono"
                          className="input input-primary input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">
                            Ingresar el Documento
                          </span>
                        </div>
                        <input
                          name="Documento"
                          value={formdata.Documento}
                          onChange={handleChange}
                          type="number"
                          placeholder="Documento"
                          className="input input-primary input-bordered w-full max-w-xs"
                        />
                      </label>

                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Ingresar el Cobro</span>
                        </div>
                        <input
                          onChange={handleChange}
                          value={formdata.Cobro}
                          name="Cobro"
                          type="number"
                          placeholder="Cobro"
                          className="input input-primary input-bordered w-full max-w-xs"
                        />
                      </label>
                    </p>
                    <div className="flex justify-end">
                      <button onClick={handlecanceledit} className="btn mr-4">
                        Cancelar
                      </button>
                      <button
                        onClick={handleConfirm}
                        className="btn btn-accent"
                      >
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
    </div>
  );
};

export default Docentes;
