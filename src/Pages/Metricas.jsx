import { NavLink, Outlet } from "react-router-dom";


const Metricas = () => {

  return (
    <main className="w-full h-full">
      <div className="w-full h-full overflow-auto flex flex-col p-4 ">
        <div className=" w-full h-full flex flex-col gap-5 items-center col-span-2 rounded-xl ">
          <h1 className="text-4xl capitalize text-gray-700 border-b">Metricas</h1>
          <div role="tablist" className="tabs tabs-bordered w-4/5 ">
          <NavLink to="MetricaGastos"   role="tab"className={({ isActive }) => (isActive ? 'tab-active tab  ' : 'tab')}>
              Simulacros
            </NavLink>
            <NavLink to="MetricaNotas"   role="tab"  className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}>
              Materias
            </NavLink>
            <NavLink to="MetricaDeuda"   role="tab" className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}>
              Deudas
            </NavLink>
            <NavLink to="MetricaGastos"   role="tab"className={({ isActive }) => (isActive ? 'tab-active tab  ' : 'tab')}>
              Gastos
            </NavLink>
            
          </div>
          <Outlet/>
        </div>
      </div>
    </main>
  );
};

export default Metricas;
