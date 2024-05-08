import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Gastos from "./Pages/Crudpages/Gastos";
import Metricas from "./Pages/Metricas";
import IGastos from "./Pages/Inputspages/Inputgastos";
import Estudiantes from "./Pages/Crudpages/Estudiantes";
import Ingresos from "./Pages/Crudpages/Ingresos";
import Docentes from "./Pages/Crudpages/Docentes";
import IIngreso from "./Pages/Inputspages/Inputingreso";
import IDocente from "./Pages/Inputspages/InputDocente";
import IEstudiante from "./Pages/Inputspages/InputEstudiante";
import Registerpage from "./Pages/Register";
import MenuDefault from "./Pages/MenuDefault";
import Instituciones from "./Pages/Crudpages/Instituciones";
import IInstitucion from "./Pages/Inputspages/InputInstitucion";
import Simulacros from "./Pages/Crudpages/Simulacros";
import ISimulacros from "./Pages/Inputspages/InputSimulacros";
import Usuarios from "./Pages/Crudpages/Usuarios";
import Notas from "./Pages/Crudpages/Notas";
import INotas from "./Pages/Inputspages/InputNotas";
import MetricasNotas from "./Pages/Metricas/MetricasNotas";
import MetricasDeuda from "./Pages/Metricas/MetricasDeuda";
import MetricasGasto from "./Pages/Metricas/MetricasGasto";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Registro" element={<Registerpage />} />
        <Route path="/Menu/*" element={<Dashboard />}>
        <Route path="" element={<MenuDefault />} />
          <Route path="Gastos" element={<Gastos />} />
          <Route path="Instituciones" element={<Instituciones />} />
          <Route path="Simulacros" element={<Simulacros />} />
          <Route path="Estudiantes" element={<Estudiantes />} />
          <Route path="Ingresos" element={<Ingresos />} />
          <Route path="Usuarios" element={<Usuarios />} />
          <Route path="Docentes" element={<Docentes />} />
          <Route path="NuevoGasto" element={<IGastos />} />
          <Route path="Notas" element={<Notas />} />
          <Route path="NuevaNota" element={<INotas />} />
          <Route path="NuevoPago" element={<IIngreso />} />
          <Route path="NuevoSimulacro" element={<ISimulacros />} />
          <Route path="NuevaInstitucion" element={<IInstitucion />} />
          <Route path="NuevoDocente" element={<IDocente/>} />
          <Route path="NuevoEstudiante" element={<IEstudiante/>} />
          <Route path="Metricas/*" element={<Metricas />} >
          <Route path="" element={<MetricasNotas/>} />
          <Route path="MetricaDeuda" element={<MetricasDeuda/>} />
          <Route path="MetricaGastos" element={<MetricasGasto/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
