import { useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";

const INotas = () => {

  const [File, setFile] = useState(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const archivo = {
      archivo: File,
    };

    try {

      const fileResponse = await axios.post(
        "https://upc-codex.tech:4200/API/V2/Notas/cargar-excel",
        archivo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(fileResponse);
      alert(fileResponse.data.message)
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert(error.response.data.message);
    }
  };
    return (
      <>
        <div className="w-full h-full ">
          <div className="md:w-4/5 w-full  md:px-10 md:mx-auto bg-base-400  h-full grid grid-rows-auto gap-5 grid-cols-1   place-items-center place-content-start rounded-lg p-2">
            <h1 className="text-primary uppercase antialised text-5xl col-span-3 my-10 mx-auto text-center font-bold">
              Cargar Nuevas notas
            </h1>
            <label class="form-control  mx-auto">
            <div class="label">
              <span class="label-text text-sm">Crear mediante archivo</span>
              <span class="label-alt text-sm">Solo documentos de Excel </span>
            </div>
            <input
              type="file"
              onChange={handleFileUpload}
              className=" col-span-3 file-input  file-input-bordered file-input-primary "
            />
          </label>
  
  
  
            <div className=" mt-10 flex items-center md:w-full md:col-span-3 justify-center gap-2">
              <button  onClick={handleSubmit} type="submit" className="btn md:w-2/5 btn-primary btn-outline ">
                Confirmar
              </button>
              <Link to="/menu/Notas" type="button" className="btn btn-error btn-outline">
              Cancelar
            </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default INotas;
  