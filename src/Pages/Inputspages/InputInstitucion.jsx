import { useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";
const IInstitucion = () => {
  const [formdata, setFormdata] = useState({
    Nombre_Institucion: "",
    Nit_institucion: "",
  });

  const [message,setmessage] = useState("Ingresar el NIT")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleConfirm = async () => {
    if (  formdata.Nombre_Institucion && formdata.Nit_institucion) {
      try {
        const response = await axios.post(
          "https://upc-codex.tech:4200/API/V2/Instituciones",
          formdata
        );
        console.log(response)
        console.log(response.data);
        setmessage("Ingresar el NIT")
        alert(response.data.message) 
        window.location.href = "/Menu/Instituciones";
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message + " "+ error.response.data.error);
        setmessage(error.response.data.message);
      }
    }else{
      alert("debes ingresar todos los datos")
    }
  };

  return (
  
      <div className="w-full h-full ">
        <h1 className="text-primary uppercase antialised text-5xl mt-10 border-b-2 text-center font-bold">
          Crear nueva Institución
        </h1>
        <div className="w-full md:mx-auto bg-base-400 flex flex-col gap-5 grid-cols-1 md:grid-cols-2 items-center justify-center rounded-lg p-2">
            <label className="form-control ">
              <div className="label">
                <span className="label-text capitalize">Ingresar Nombre de institución</span>
              </div>
              <input
                type="text"
                placeholder="Nombre institución"
                className="input input-primary input-bordered w-full max-w-xs"
                name="Nombre_Institucion"
                required
                value={formdata.Nombre_Institucion}
                onChange={handleChange}
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">{message}</span>
              </div>
              <input
                type="number"
                placeholder="NIT"
                className="input input-primary input-bordered w-full max-w-xs"
                name="Nit_institucion"
                required
                value={formdata.Nit_institucion}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <button type="button" onClick={handleConfirm} className="btn btn-primary btn-outline">
              Confirmar
            </button>
            <Link to="/menu/Instituciones" type="button" className="btn btn-error btn-outline">
              Cancelar
            </Link>
          </div>
        </div>
  );
};

export default IInstitucion;
