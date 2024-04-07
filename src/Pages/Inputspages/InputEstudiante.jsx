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
    Grado:""

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
          "http://srv435312.hstgr.cloud:4200/API/V2/Instituciones"
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
          Apellido:formdata.Apellido,
          Telefono: formdata.Telefono,
          Direccion: formdata.Direccion,
          Colegio:formdata.Colegio,
          Municipio:formdata.Municipio,
          NombreApeAcu:formdata.NombreApeAcu,
          TelefonoAcu:formdata.TelefonoAcu,
          Estado:formdata.Estado,
          Nit_institucion: parseInt(formdata.Nit_institucion),
          Grado:formdata.Grado,

        };
        console.log(data)
        const response = await axios.post(
          "http://srv435312.hstgr.cloud:4200/API/V2/Registro/Estudiante",
          data
        );
        console.log(response);
        console.log(response.data);
        alert(response.data.message);
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert("Al parecer hubo un error", error);
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
            crear nuevo Estudiante
          </h1>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona Municipio</span>
            </div>
            <select onChange={handleChange} name="Municipio" class="select select-primary w-full max-w-xs">
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
            <select  name="Grado" class="select select-primary w-full max-w-xs">
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
            <select name="Estado" class="select select-primary w-full max-w-xs">
              <option disabled selected>
                Estado del estudiante
              </option>
              <option value="Paz y salvo">Paz y salvo</option>
              <option value="Deudor">Deudor</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona Institucion</span>
            </div>
            <select class="select select-primary w-full max-w-xs">
              <option disabled selected>
                What is the best TV show?
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el Nombre</span>
            </div>
            <input
              type="text"
              placeholder="Nombre"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el Apellido</span>
            </div>
            <input
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
              type="number"
              placeholder="Telefono"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar la Direccion</span>
            </div>
            <input
              type="text"
              placeholder="Direccion"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el Nombre Acudiente</span>
            </div>
            <input
              type="text"
              placeholder="Nombre Acudiente"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el Apellido Acudiente</span>
            </div>
            <input
              type="text"
              placeholder="Apellido Acudiente"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el Telefono Acudiente</span>
            </div>
            <input
              type="number"
              placeholder="Telefono Acudiente"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>

          <div className=" mt-10 flex items-center md:w-full md:col-span-3 justify-center gap-2">
            <button
              type="submit"
              className="btn md:w-2/5 btn-primary btn-outline "
            >
              Confirmar
            </button>
            <button
              type="submit"
              className="btn md:w-2/5   btn-error btn-outline "
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IEstudiante;
