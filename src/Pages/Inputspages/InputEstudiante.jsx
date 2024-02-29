const IEstudiante = () => {
    return (
      <>
        <div className="w-full h-full ">
          <div className="md:w-4/5 w-full  md:px-10 md:mx-auto bg-base-400  h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3  place-items-center place-content-start rounded-lg p-2">
            <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
              crear nuevo Docente
            </h1>
            <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text text-sm">Crear mediante archivo</span>
              <span class="label-alt text-sm">Solo documentos de Excel </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </label>
  
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Selecciona Municipio</span>
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
              <button type="submit" className="btn md:w-2/5 btn-primary btn-outline ">
                Confirmar
              </button>
              <button type="submit" className="btn md:w-2/5   btn-error btn-outline ">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default IEstudiante;
  