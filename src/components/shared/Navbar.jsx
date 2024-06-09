import { AiFillSetting } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";

const Navbar = ({ usuario }) => {
    console.log(usuario)
  return (
    <div className="navbar px-10 bg-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl flex items-center"><img src="./Logoit.png" alt="Logo" className="w-5 h-5"/>IcfesTracer</Link>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold text-gray-600 capitalize">{usuario.nombre+" "+usuario.apellido}</p>
        <div className="form-control"></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 uppercase flex justify-center items-center bg-blue-500 h-10 text-2xl rounded-full">
              <p className="mt-1 text-white">{usuario.nombre[0]+""+usuario.apellido[0]}</p>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                className="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
                href="/"
              >
                <GoPersonFill className="w-auto h-6 " />

                <p className="text-sm font-medium break-all">Perfil</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
                href="/"
              >
                <AiFillSetting className="w-auto h-6  text-blue-500" />

                <p className="text-sm font-medium break-all">Ajustes</p>
              </Link>
            </li>
            <li>
              <a
                className="flex md:flex-row w-full p-2 transition-all flex-col items-center gap-4  md:rounded-lg hover:bg-accent"
                href="/"
                onClick={() => Cookies.remove("accessToken")}
              >
                <IoIosLogOut className="w-auto h-6  text-error" />

                <p className="text-sm font-medium break-all">Desconectar</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
