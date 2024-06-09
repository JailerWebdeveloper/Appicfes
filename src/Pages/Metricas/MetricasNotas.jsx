import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

const MetricasNotas = () => {


  const [simulacros, setsimulacros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedbars, setSelectedBars] = useState("todos");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4258/API/V2/Notas/simulacro"
        );
        setsimulacros(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedBars(event.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center gap-10 h-full ">
      <div className="flex w-4/5 p-2 items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-gray-700 border-b border-gray-400">
            Selecciona una materia
          </h1>
          <h2 className="text-gray-400 capitalize text-md">
            Promedio de materias por simulacro
          </h2>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSelectChange}
          value={selectedbars}
        >
          <option disabled value="todos">
            Seleccionar materia
          </option>
          <option value="todos">Ver todo</option>
          <option value="Global">Global</option>
          <option value="Naturales">Naturales</option>
          <option value="Sociales">Sociales</option>
          <option value="Matematicas">Matematicas</option>
          <option value="Ingles">Ingles</option>
          <option value="LecturaCritica">Lectura Critica</option>
        </select>
      </div>
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <ResponsiveContainer width="70%" height="70%">
          <BarChart
            width={200}
            height={300}
            data={simulacros}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="simulacro" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedbars === "todos" ? (
              <>
                <Bar
                  dataKey="Nota_LecturaCritica"
                  fill="#007bff"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="Nota_Naturales"
                  fill="#a100ff"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
                <Bar
                  dataKey="Nota_Matematicas"
                  fill="#ff8600"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />

                <Bar
                  dataKey="Nota_Sociales"
                  fill="#c80026"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />

                <Bar
                  dataKey="Nota_Ingles"
                  fill="#00c100"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
                <Bar
                  dataKey="Global"
                  fill="gray"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
                
              </>
            ): selectedbars == 'Global' ? (<Bar
                dataKey={`Global`}
                fill="#007bff"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />) : selectedbars ? (
              <Bar
                dataKey={`Nota_${selectedbars}`}
                fill="#007bff"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            ) : null}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default MetricasNotas;
