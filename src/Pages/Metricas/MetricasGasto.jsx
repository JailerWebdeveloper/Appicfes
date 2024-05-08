import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";
const MetricasGasto = () => {
  const [Gastos, setGastos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Gastos/Todos"
        );
        setGastos(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-col w-full items-center gap-10 h-full ">
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={Gastos}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="Fecha" scale="auto" />
            <YAxis dataKey="Gasto" scale="auto" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Gasto" stroke="#8884d8" activeDot={{ r: 8 }} />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default MetricasGasto;
