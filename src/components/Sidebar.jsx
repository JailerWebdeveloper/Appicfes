import { Fragment } from "react";
import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <aside class="md:flex hidden flex-col md:w-64 w-32 h-screen md:px-5 px-2 bg-base rounded-tr-2xl py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l">
        <a href="#" className="btn btn-ghost rounded-full">
          <img
            class="w-auto mx-auto h-7"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </a>

        <nav class="flex flex-col justify-start md:items-start items-center flex-wrap w-full gap-3 flex-1 mt-6">
          <div class="my-3 flex flex-col gap-3 md:items-start items-center justify-start w-full">
            <label class="px-3 text-xs  uppercase ">Administracion</label>

            <Link
              to="Menu"
              class="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
              href="#"
            >
              <AiTwotoneHome className="w-auto h-6 " />

              <p class="text-sm font-medium">Inicio</p>
            </Link>
            <Link
              to="Metricas"
              class="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
              href="#"
            >
              <FaChartBar className="w-auto h-6 " />

              <p class="text-sm font-medium break-all">Metricas</p>
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
                      <Link to="Gastos">Gastos</Link>
                    </li>
                    <li>
                      <a>Estudiantes</a>
                    </li>
                    <li>
                      <a>Docentes</a>
                    </li>
                    <li>
                      <a>Ingresos</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </details>
          </div>

          <div className="divider divider-primary w-2/5 mx-auto"></div>
          <a
            class="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
            href="#"
          >
            <AiFillSetting className="w-auto h-6 " />

            <p class="text-sm font-medium break-all">Configuracion</p>
          </a>
        </nav>
      </aside>

      <ul className="menu menu-horizontal md:hidden absolute -bottom-14 left-16 right-0 flex justify-center items-center w-3/5  bg-base-200 rounded-box mt-6">
        <li>
          <a className="tooltip" data-tip="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Stats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Sidebar;
