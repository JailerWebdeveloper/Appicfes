import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="bg-base overflow-y-auto w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
        <div className="flex flex-row relative w-screen">
          <Sidebar/>
          <div className="flex-1 md:p-4 p-1 overflow-y-auto w-full ">
            <div className="w-full h-full rounded-lg ">
            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
