import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ISimulacros = () => {
  const [formdata, setFormdata] = useState({
    Id: "",
    Empresa: "",
    CuadernillosComprados: 0,
    Fecha_Simulacro: "",
    Grado: "",
  });
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
        const response = await axios.post(
          "http://srv435312.hstgr.cloud:4200/API/V2/Registro/Simulacro",
          data
        );
        alert(response.data.message);
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message);
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
            crear nuevo Simulacro
          </h1>
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">Fecha de expedicion del gasto</span>
            </div>
            <input
              name="Fecha_Simulacro"
              onChange={handleChange}
              type="date"
              className="p-2 focus:border-primary md:mt-3 bg-base text-base rounded-xl"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar Cantidad Cuadernillos</span>
            </div>
            <input
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
              type="text"
              name="Empresa"
              placeholder="Empresa"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Ingresar el ID
              </span>
            </div>
            <input
              onChange={handleChange}
              type="text"
              name="Id"
              placeholder="Id prueba"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona Grado</span>
            </div>
            <select
              onChange={handleChange}
              name="Grado"
              class="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Grado
              </option>
              <option value="10">Decimo 10°</option>
              <option value="11">Once 11°</option>
            </select>
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
              to="/menu/Gastos"
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

export default ISimulacros;
