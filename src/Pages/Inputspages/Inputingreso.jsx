import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IIngreso = () => {
  const [formdata, setFormdata] = useState({
    Documento_alumno: 0, // ID del estudiante
    Numero_recibo: "",
    Pago: 0, // Monto del pago
    Metodo_pago: "",
    Fecha: "", // Fecha del pago en formato YYYY-MM-DD
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
    if (formdata.Fecha && formdata.Pago) {
      try {
        const data = {
          Fecha: formdata.Fecha,
          Metodo_pago: formdata.Metodo_pago,
          Numero_recibo: formdata.Numero_recibo,
          Pago: parseInt(formdata.Pago),
          Documento_alumno: parseInt(formdata.Documento_alumno),
          Grado: formdata.Grado,
        };
        const response = await axios.post(
          "http://srv435312.hstgr.cloud:4200/API/V2/Registro/Cartera",
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
        <div className="md:w-4/5 w-full  md:mx-auto bg-base-400 border-2 h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3  place-items-center place-content-center rounded-lg p-2">
          <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
            crear nuevo Ingreso
          </h1>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Fecha de expedicion del Ingreso
              </span>
            </div>
            <input
              type="date"
              className="p-2 focus:border-primary md:mt-3 bg-base text-base rounded-xl"
              name="Fecha"
              onChange={handleChange}
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

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona el Metodo de pago</span>
            </div>
            <select
              className="select select-primary w-full max-w-xs"
              name="Metodo_pago"
              onChange={handleChange}
            >
              <option disabled selected>
                Seleccione el método de pago
              </option>
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia Nequi">Transferencia Nequi</option>
              <option value="Transferencia Bancolombia">
                Transferencia Bancolombia
              </option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Ingresar el Documento del estudiante
              </span>
            </div>
            <input
              type="number"
              placeholder="Documento alumno"
              className="input input-primary input-bordered w-full max-w-xs"
              name="Documento_alumno"
              onChange={handleChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el valor del Pago</span>
            </div>
            <input
              type="number"
              placeholder="Pago"
              className="input input-primary input-bordered w-full max-w-xs"
              name="Pago"
              onChange={handleChange}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar Numero del recibo</span>
            </div>
            <input
              type="number"
              placeholder="Numero recibo"
              className="input input-primary input-bordered w-full max-w-xs"
              name="Numero_recibo"
              onChange={handleChange}
            />
          </label>

          <div className=" mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handleConfirm}
              className="btn btn-primary btn-outline "
            >
              Confirmar
            </button>
            <Link
              to="/menu/Ingresos"
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

export default IIngreso;
