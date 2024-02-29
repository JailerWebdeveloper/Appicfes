const IIngreso = () => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="md:w-4/5 w-full  md:mx-auto bg-base-400 border-2 h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3  place-items-center place-content-center rounded-lg p-2">
          <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
            crear nuevo Ingreso
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

          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">Fecha de expedicion del Ingreso</span>
            </div>
            <input
              type="date"
              className="p-2 focus:border-primary md:mt-3 bg-base text-base rounded-xl"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Selecciona el Metodo de pago</span>
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
              <span className="label-text">Ingresar el valor del Pago</span>
            </div>
            <input
              type="number"
              placeholder="Gasto"
              className="input input-primary input-bordered w-full max-w-xs"
            />
          </label>


          <div className=" mt-10 flex items-center justify-center gap-2">
            <button type="submit" className="btn btn-primary btn-outline ">
              Confirmar
            </button>
            <button type="submit" className="btn btn-error btn-outline ">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IIngreso;
