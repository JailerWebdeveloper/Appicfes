import { Fragment } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MenuDefault = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <Fragment>
      <div className="h-full w-full p-10">
        <div className="w-full h-full grid grid-cols-3 gap-5 place-content-center place-items-center grid-rows-2 overflow-auto">
          <div className="md:col-span-2 w-full h-full shadow-lg bg-base border-4 rounded-xl p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="md:col-span-1 w-full h-full shadow-lg bg-primary border-4 rounded-xl p-2">

          </div>
          <div className="md:col-span-1 w-full h-full shadow-lg bg-primary border-4 rounded-xl p-2">

          </div>
          <div className="md:col-span-1 w-full h-full shadow-lg bg-primary border-4 rounded-xl p-2">

          </div>
          <div className="md:col-span-1 w-full h-full shadow-lg bg-primary border-4 rounded-xl p-2">

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuDefault;
