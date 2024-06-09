import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IEstudiante = () => {
  const [formdata, setFormdata] = useState({
    Tipo_documento: "",
    Documento: 0,
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Direccion: "",
    Colegio: "",
    Municipio: "",
    NombreApeAcu: "",
    TelefonoAcu: "",
    Estado: "",
    Nit_institucion: 0,
    Grado: "",
    Usuario: "",
    Contrasena: "",
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

  const handleConfirm = async () => {
    if (formdata.Documento && formdata.Nit_institucion) {
      try {
        const data = {
          Tipo_documento: formdata.Tipo_documento,
          Documento: parseInt(formdata.Documento),
          Nombre: formdata.Nombre,
          Apellido: formdata.Apellido,
          Telefono: formdata.Telefono,
          Direccion: formdata.Direccion,
          Colegio: formdata.Colegio,
          Municipio: formdata.Municipio,
          NombreApeAcu: formdata.NombreApeAcu,
          TelefonoAcu: formdata.TelefonoAcu,
          Estado: formdata.Estado,
          Nit_institucion: parseInt(formdata.Nit_institucion),
          Grado: formdata.Grado,
          Usuario: formdata.Usuario,
          Contrasena:formdata.Contrasena,
        };
        const response = await axios.post(
          "https://upc-codex.tech:4258/API/V2/Registro/Estudiante",
          data
        );
        alert(response.data.message);
        window.location.href = "/Menu/Estudiantes";
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message + " " + error.response.data.error);
      }
    } else {
      alert("debes ingresar todos los datos");
    }
  };
  return (
    <div className="w-full h-full ">
      <div className="md:w-4/5 w-full  md:px-10 md:mx-auto bg-base-400  h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3  place-items-center place-content-start rounded-lg p-2">
        <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
          crear nuevo Estudiante
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Selecciona Tipo de documento</span>
          </div>
          <select
            onChange={handleChange}
            name="Tipo_documento"
            className="select select-primary w-full max-w-xs"
          >
            <option disabled selected>
              Tipo de documento
            </option>
            <option value="Cédula">C.C</option>
            <option value="Tarjeta de identidad">T.I</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar el Documento</span>
          </div>
          <input
            onChange={handleChange}
            type="number"
            name="Documento"
            placeholder="Documento"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Selecciona Municipio</span>
          </div>
          <select
            onChange={handleChange}
            name="Municipio"
            className="select select-primary w-full max-w-xs"
          >
            <option disabled selected>
              Selecciona el Municipio
            </option>
            <option value="Valledupar">Valledupar</option>
            <option value="Aguachica">Aguachica</option>
            <option value="Codazzi">Codazzi</option>
            <option value="Bosconia">Bosconia</option>
            <option value="Chimichagua">Chimichagua</option>
            <option value="Curumaní">Curumaní</option>
            <option value="El copey">El copey</option>
            <option value="Chiriguana">Chiriguana</option>
            <option value="La jagua del ibirico">La jagua del ibirico</option>
            <option value="La paz">La paz</option>
            <option value="El paso">El paso</option>
            <option value="San alberto">San alberto</option>
            <option value="Astrea">Astrea</option>
            <option value="Pueblo bello">Pueblo bello</option>
            <option value="San martín">San martín</option>
            <option value="Pailitas">Pailitas</option>
            <option value="Pelaya">Pelaya</option>
            <option value="Gamarra">Gamarra</option>
            <option value="La gloria">La gloria</option>
            <option value="Río de oro">Río de oro</option>
            <option value="Tamalameque">Tamalameque</option>
            <option value="Becerril">Becerril</option>
            <option value="San diego">San diego</option>
            <option value="Gonzalez">Gonzalez</option>
            <option value="Manaure">Manaure</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Selecciona Grado</span>
          </div>
          <select
            onChange={handleChange}
            name="Grado"
            className="select select-primary w-full max-w-xs"
          >
            <option disabled selected>
              Grado del estudiante
            </option>
            <option value="10">Decimo 10°</option>
            <option value="11">Once 11°</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Selecciona Estado</span>
          </div>
          <select
            onChange={handleChange}
            name="Estado"
            className="select select-primary w-full max-w-xs"
          >
            <option disabled selected>
              Estado del estudiante
            </option>
            <option value="Paz y salvo">Paz y salvo</option>
            <option value="Deudor">Deudor</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Nombre de Institucion</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="Colegio"
            placeholder="Institucion"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar el Nombre</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="Nombre"
            placeholder="Nombre"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar el Apellido</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="Apellido"
            placeholder="Apellido"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar el Telefono</span>
          </div>
          <input
            onChange={handleChange}
            type="number"
            name="Telefono"
            placeholder="Telefono"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar la Direccion</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="Direccion"
            placeholder="Direccion"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar el Nombre Acudiente</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="NombreApeAcu"
            placeholder="Nombre Acudiente"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar el Telefono Acudiente</span>
          </div>
          <input
            onChange={handleChange}
            type="number"
            name="TelefonoAcu"
            placeholder="Telefono Acudiente"
            className="input input-primary input-bordered w-full max-w-xs"
          />
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
                <option key={index + 1} value={institucion.Nit_institucion}>
                  {institucion.Nombre_Institucion}
                </option>
              ))
            )}
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar Usuario</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="Usuario"
            placeholder="Usuario"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar la Contraseña</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="Contrasena"
            placeholder="Contraseña"
            className="input input-primary input-bordered w-full max-w-xs"
          />
        </label>

        <div className=" mt-10 flex items-center md:w-full md:col-span-3 justify-center gap-2">
          <button
            onClick={handleConfirm}
            type="submit"
            className="btn md:w-2/5 btn-primary btn-outline "
          >
            Confirmar
          </button>
          <Link
            to="/menu/Estudiantes"
            type="button"
            className="btn btn-error btn-outline"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IEstudiante;
