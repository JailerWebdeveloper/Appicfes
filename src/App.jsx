import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Gastos from "./Pages/Crudpages/Gastos";
import Metricas from "./Pages/Metricas";
import IGastos from "./Pages/Inputspages/Inputgastos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Menu/*" element={<Dashboard />}>
          <Route path="Gastos" element={<Gastos />} />
          <Route path="NuevoGasto" element={<IGastos/>}/>
          <Route path="Metricas" element={<Metricas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
