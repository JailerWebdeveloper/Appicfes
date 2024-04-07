import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const IIngreso = () => {
  const [formdata, setFormdata] = useState({
    file: null,
    fechaExpedicion: "",
    metodoPago: "",
    valorPago: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormdata(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleConfirm = async () => {

    if ( formdata) {
      try {
        const response = await axios.post(
          "http://srv435312.hstgr.cloud:4200/API/V2/ingresar",
          formdata
        );

      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
      }
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
              <span className="label-text text-sm">Crear mediante archivo</span>
              <span className="label-alt text-sm">Solo documentos de Excel </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              name="file"
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Fecha de expedicion del Ingreso</span>
            </div>
            <input
              type="date"
              className="p-2 focus:border-primary md:mt-3 bg-base text-base rounded-xl"
              name="fechaExpedicion"
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona el Metodo de pago</span>
            </div>
            <select
              className="select select-primary w-full max-w-xs"
              name="metodoPago"
              onChange={handleChange}
            >
              <option disabled selected>
                Seleccione el método de pago
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ingresar el valor del Pago</span>
            </div>
            <input
              type="number"
              placeholder="Gasto"
              className="input input-primary input-bordered w-full max-w-xs"
              name="valorPago"
              onChange={handleChange}
            />
          </label>

          <div className=" mt-10 flex items-center justify-center gap-2">
            <button type="button" onClick={handleConfirm} className="btn btn-primary btn-outline ">
              Confirmar
            </button>
            <button  className="btn btn-error btn-outline ">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IIngreso;
