import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrTest } from "react-icons/gr";

const Sidebar = ({ usuario }) => {
  return (
    <aside className="md:flex hidden flex-col md:w-64 w-32 min-h-full md:px-5 px-2 bg-white  py-2 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l">
      <nav className="flex flex-col justify-start md:items-start items-center flex-wrap w-full gap-3 flex-1 ">
        <div className="my-3 flex flex-col gap-3 md:items-start items-center justify-start w-full">
          <label className="px-3 text-xs  uppercase ">Menu</label>

          <Link
            to="/Menu"
            className="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
            href="#"
          >
            <AiTwotoneHome className="w-auto h-6 " />

            <p className="text-sm font-medium">Inicio</p>
          </Link>
          <Link
            to="Metricas"
            className="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
            href="#"
          >
            <FaChartBar className="w-auto h-6 " />

            <p className="text-sm font-medium break-all">Metricas</p>
          </Link>

          <details
            className={`flex md:flex-row w-full p-2  flex-col items-center gap-4   md:rounded-lg hover:bg-accent transition-all ${
              usuario?.Rol != "SuperAdmin" ? "hidden" : ""
            } `}
          >
            <summary className="flex items-center gap-2">
              <AiFillSetting />
              Administracion
            </summary>
            <ul className="menu">
              <li>
                <ul>
                  <li>
                    <Link to="Instituciones">Instituciones</Link>
                  </li>
                  <li>
                    <Link to="Gastos">Gastos</Link>
                  </li>
                  <li>
                    <Link to="Estudiantes">Estudiantes</Link>
                  </li>
                  <li>
                    <Link to="Docentes">Docentes</Link>
                  </li>
                  <li>
                    <Link to="Ingresos">Ingresos</Link>
                  </li>
                  <li>
                    <Link to="Notas">Notas</Link>
                  </li>
                  <li>
                    <Link to="Simulacros">Simulacros</Link>
                  </li>
                  <li>
                    <Link to="Usuarios">Usuarios</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </details>

          <details
            className={`flex md:flex-row w-full p-2  flex-col items-center gap-4   md:rounded-lg hover:bg-accent transition-all ${
              usuario?.Rol != "SuperAdmin" ? "hidden" : ""
            } `}
          >
            <summary className="flex items-center gap-2">
              <GrTest />
              Pruebas
            </summary>
            <ul className="menu">
              <li>
                <ul>
                  <li>
                    <Link to="CrearPreguntas">Generar Preguntas</Link>
                  </li>
                  <li>
                    <Link to="BancoPreguntas">Banco de Preguntas</Link>
                  </li>
                  <li>
                    <Link to="CrearPractica">Crear Formulario</Link>
                  </li>
                  <li>
                    <Link to="BancoPracticas">Banco de Formularios</Link>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </details>
          <details
            className={`flex md:flex-row w-full p-2  flex-col items-center gap-4   md:rounded-lg hover:bg-accent transition-all ${
              usuario?.Rol != "SuperAdmin" ? "" : ""
            } `}
          >
            <summary className="flex items-center gap-2">
              <GrTest />
              Test de alumno
            </summary>
            <ul className="menu">
              <li>
                <ul>
                  <li>
                    <Link to="PreguntaI">Pregunta individual</Link>
                  </li>
                  <li>
                    <Link to="BancoPreguntas">Banco de Preguntas</Link>
                  </li>
                  <li>
                    <Link to="CrearPractica">Crear Formulario</Link>
                  </li>
                  <li>
                    <Link to="BancoPracticas">Banco de Formularios</Link>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
