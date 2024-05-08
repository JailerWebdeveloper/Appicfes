import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from "axios";
import { useEffect, useState } from "react";

const MetricasDeuda = () => {
  const [Pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Gastos, setGastos] = useState([]);
  const [totalPagos, setTotalPagos] = useState({
    name:'Total Pagos',
    value:0
  });
  const [totalGastos, setTotalGastos] = useState({
    name:'Total Gastos',
    value:0
  });

  useEffect(() => {
    const fetchPagos = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Pagos/Todos"
        );
        setPagos(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los pagos:", error);
      }
    };
    fetchPagos();
  }, []);

  useEffect(() => {
    const fetchGastos = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4200/API/V2/Gastos/Todos"
        );
        setGastos(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los gastos:", error);
      }
    };
    fetchGastos();
  }, []);

  useEffect(() => {
    let totalPagosSum = 0;
    Pagos.forEach((ent) => {
      totalPagosSum += ent.Pago;
    });
    setTotalPagos({value:totalPagosSum});
  }, [Pagos]);
  useEffect(() => {
    let totalGastosSum = 0;
    Gastos.forEach((gasto) => {
      totalGastosSum+= gasto.Gasto;
    });
    setTotalGastos({value:totalGastosSum});
  }, [Gastos]);

  console.log(totalPagos);
  return (
    <div className="flex flex-col w-full items-center gap-10 h-full ">
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={totalGastos}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" scale="auto" />
          <YAxis scale="auto" dataKey="value"/>
          <Tooltip />
          <Legend />
          <Line type="value" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      )}
    </div>
  );
};

export default MetricasDeuda;
