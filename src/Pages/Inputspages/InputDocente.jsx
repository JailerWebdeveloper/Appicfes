import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IDocente = () => {
  const [formdata, setFormdata] = useState({
    Documento: 0,
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Materia_Dicta: "",
    Cobro: 0,
    Nit_institucion: 0,
  });
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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

  const handleConfirm = async () => {
    if (formdata.Documento && formdata.Nit_institucion) {
      try {
        const data = {
          Documento: parseInt(formdata.Documento),
          Nombre: formdata.Nombre,
          Apellido:formdata.Apellido,
          Telefono: formdata.Telefono,
          Materia_Dicta: formdata.Materia_Dicta,
          Cobro: parseInt(formdata.Cobro),
          Nit_institucion: parseInt(formdata.Nit_institucion),
        };
        console.log(data)
        const response = await axios.post(
          "https://upc-codex.tech:4200/API/V2/Registro/Docente",
          data
        );
        console.log(response);
        console.log(response.data);
        alert(response.data.message);
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message);
        setmessage(error.response.data.message);
      }
    } else {
      alert("debes ingresar todos los datos");
    }
  };
  return (
    <>
      <div className="w-full h-full ">
        <div className="md:w-4/5 w-full  md:px-10 md:mx-auto bg-base-400  h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3  place-items-center place-content-start rounded-lg p-2">
          <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
            crear nuevo Docente
          </h1>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona Institucion</span>
            </div>
            <select
              onChange={handleChange}
              value={formdata.Materia_Dicta}
              name="Materia_Dicta"
              class="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Materia que dicta
              </option>
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
              <span className="label-text">Selecciona Emrpresa</span>
            </div>
            <select
              name="Nit_institucion"
              className="select select-primary w-full max-w-xs"
              onChange={handleChange}
            >
              <option value="0">Selecciona Empresa perteneciente</option>
              {loading ? (
                <option>Cargando...</option>
              ) : (
                instituciones.map((institucion, index) => (
                  <option key={index} value={institucion.Nit_institucion}>
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
              <span className="label-text">Ingresar el Apellido</span>
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
              <span className="label-text">Ingresar el Telefono</span>
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
              <span className="label-text">Ingresar el Documento</span>
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

          <div className=" mt-10 flex items-center md:w-full md:col-span-3 justify-center gap-2">
            <button
              type="submit"
              onClick={handleConfirm}
              className="btn md:w-2/5 btn-primary btn-outline "
            >
              Confirmar
            </button>
            <Link
              to="/menu/Docentes"
              type="button"
              className="btn btn-error btn-outline"
            >
              Cancelar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IDocente;
