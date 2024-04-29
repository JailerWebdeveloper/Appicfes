import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";

const Sidebar = ({ usuario }) => {
  return (
      <aside className="md:flex hidden flex-col md:w-64 w-32 h-screen md:px-5 px-2 bg-white rounded-tr-2xl py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l">
          <img
            className="w-auto mx-auto h-10"
            src="/unnamed.png"
            alt=""
          />

        <p className="text-center capitalize break-all font-bold text-gray-500 mt-5">
          {usuario.nombre + "   " + usuario.apellido}
        </p>

        <nav className="flex flex-col justify-start md:items-start items-center flex-wrap w-full gap-3 flex-1 mt-6">
          <div className="my-3 flex flex-col gap-3 md:items-start items-center justify-start w-full">
            <label className="px-3 text-xs  uppercase ">Administracion</label>

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

            <details className="flex md:flex-row w-full p-2  flex-col items-center gap-4  md:rounded-lg hover:bg-accent transition-all">
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
          </div>

          <div className="divider divider-primary w-2/5 mx-auto"></div>

          <a
            className="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
            href="/"
            onClick={() => Cookies.remove("accessToken")}
          >
            <IoIosLogOut className="w-auto h-6  text-error" />

            <p className="text-sm font-medium break-all">Desconectar</p>
          </a>
        </nav>
      </aside>

  );
};

export default Sidebar;
