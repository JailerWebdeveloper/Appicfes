import { Link } from "react-router-dom";

const MenuDefault = () => {
  return (
    <div className="h-full w-full p-10">
      <div className="w-full h-full rounded-xl bg-base-200 grid grid-cols-2 p-8 gap-5 grid-rows-2 place-items-center">
        <Link className="rounded-xl bg-red-500 w-full hover:bg-opacity-20  font-bold text-5xl text-white transition-all text-center flex items-center justify-center hover:scale-105 h-full">
          PRUEBAS
        </Link>
        <Link className="rounded-xl bg-yellow-500 w-full hover:bg-opacity-20  font-bold text-5xl text-white transition-all text-center flex items-center justify-center hover:scale-105 h-full">
          Metricas
        </Link>
        <Link className="rounded-xl bg-blue-500 w-full hover:bg-opacity-20  font-bold text-5xl text-white transition-all text-center flex items-center justify-center hover:scale-105 h-full">
          Estudiantes
        </Link>
        <Link className="rounded-xl bg-gray-500 w-full hover:bg-opacity-20  font-bold text-5xl text-white transition-all text-center flex items-center justify-center hover:scale-105 h-full">
            proximamente
        </Link>
      </div>
    </div>
  );
};

export default MenuDefault;
