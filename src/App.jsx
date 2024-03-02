import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Registro" element={<Registerpage />} />
        <Route path="/Menu/*" element={<Dashboard />}>
          <Route path="Gastos" element={<Gastos />} />
          <Route path="Estudiantes" element={<Estudiantes />} />
          <Route path="Ingresos" element={<Ingresos />} />
          <Route path="Docentes" element={<Docentes />} />
          <Route path="NuevoGasto" element={<IGastos />} />
          <Route path="NuevoPago" element={<IIngreso />} />
          <Route path="NuevoDocente" element={<IDocente/>} />
          <Route path="NuevoEstudiante" element={<IEstudiante/>} />
          <Route path="Metricas" element={<Metricas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
