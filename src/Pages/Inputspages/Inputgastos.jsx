import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const IGastos = () => {
  const [infoUsuario,setinfousuario] = useState({})
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const decoded = jwtDecode(accessToken);
    setinfousuario(decoded)
  }, []);
  const [formdata, setFormdata] = useState({
    Fecha: "",
    Tipo_gasto: "",
    Gasto: 0,
    Descripcion: "",
    Id_Usuario:infoUsuario.cedula,
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
    if (formdata.Fecha && formdata.Gasto) {
      try {
        const data = {
          Fecha: formdata.Fecha,
          Tipo_gasto: formdata.Tipo_gasto,
          Gasto: parseInt(formdata.Gasto),
          Descripcion: formdata.Descripcion,
          Id_Usuario: infoUsuario.cedula,
          Grado: formdata.Grado,
        };
        const response = await axios.post(
          "https://upc-codex.tech:4200/API/V2/Registro/Gasto",
          data
        );
        alert(response.data.message);
        window.location.href = "/Menu/Gastos";
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        alert(error.response.data.message + " "+ error.response.data.error);
      }
    } else {
      alert("debes ingresar todos los datos");
    }
  };
  return (

      <div className="w-full h-full ">
        <div className="md:w-4/5 w-full  md:px-10 md:mx-auto bg-base-400  h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3  place-items-center place-content-start rounded-lg p-2">
          <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
            crear nuevo gasto
          </h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Fecha de expedicion del gasto</span>
            </div>
            <input
              name="Fecha"
              onChange={handleChange}
              type="date"
              className="p-2 focus:border-primary md:mt-3 bg-base text-base rounded-xl"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona el tipo de gasto</span>
            </div>
            <select
              name="Tipo_gasto"
              onChange={handleChange}
              className="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Tipo de gasto
              </option>
              <option value="Gasto administrativo">Gasto administrativo</option>
              <option value="Sueldos">Sueldos</option>
              <option value="Materiales">Materiales</option>
              <option value="Pago simulacros">Pago simulacros</option>
              <option value="Otros">Otros</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el valor del gasto</span>
            </div>
            <input
              onChange={handleChange}
              name="Gasto"
              type="number"
              placeholder="Gasto"
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
              className="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Grado
              </option>
              <option value="10">Decimo 10°</option>
              <option value="11">Once 11°</option>
            </select>
          </label>

          <label className="form-control  w-full max-w-xs">
            <div className="label">
              <span className="label-text">Descripcion del gasto </span>
            </div>
            <textarea
              name="Descripcion"
              onChange={handleChange}
              className="textarea textarea-primary resize-none"
              placeholder="Bio"
            ></textarea>
          </label>

          <div className=" mt-10 flex items-center md:w-full md:col-span-2 justify-center gap-2">
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
  );
};

export default IGastos;
