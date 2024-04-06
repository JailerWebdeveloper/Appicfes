import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Estudiantes = () => {
  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">
        Administracion Estudiantes
      </h1>

      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link
              to="/menu/NuevoEstudiante"
              className="btn btn-secondary btn-xl"
            >
              Nueva entrada
            </Link>
          </div>
          <div className="join md:order-2  order-1">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        {/*Tabla */}

        <div className="overflow-x-auto h-[600px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border h-80 overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Municipio</th>
                <th>Institucion</th>
                <th>NombreAcu</th>
                <th>TelefonoAcu</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Orlando seoanes</td>
                <td>oviedo</td>
                <td>33223321232</td>
                <td>Cll 13 b #3-24</td>
                <td>Valledupar</td>
                <td>Loperena</td>
                <td>Patiño</td>
                <td>33212343123</td>
                <td>Deudor</td>
                <td className="">
                  <AiFillSetting className="btn-xs  btn btn-ghost w-auto h-2  mx-auto" />
                </td>
              </tr>
            </tbody>
            <tfoot className="text-accent">
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Municipio</th>
                <th>Institucion</th>
                <th>NombreAcu</th>
                <th>TelefonoAcu</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Estudiantes;
