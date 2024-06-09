import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Navbar from "../components/shared/Navbar";

const Dashboard = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [usuariodecoded, setdecodeduser] = useState({});
  useEffect(() => {
    const checkUserAuthentication = async () => {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          setdecodeduser(decoded);
          setUserAuthenticated(true);
        } catch (error) {
          console.error("Error al decodificar el token:", error);
          Cookies.remove("accessToken");
        }
      }
    };

    checkUserAuthentication();
  }, []);
  return (
    <Fragment>
      {userAuthenticated ? (
        <div className="bg-base overflow-y-auto w-full min-h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
          <div className="flex flex-col relative w-full h-full">
            <Navbar usuario={usuariodecoded} />
            <div className="flex flex-row relative w-full h-full ">
              <Sidebar usuario={usuariodecoded} />
              <div className="flex-1 md:p-4 p-1 overflow-y-auto w-full ">
                <div className="w-full h-full rounded-lg ">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-6xl font-bold uppercase"> SIN LOGUEAR NO PASA</h1>
          <img
            alt="quitar esto"
            src="https://e7.pngegg.com/pngimages/70/835/png-clipart-club-penguin-island-gif-disney-canada-inc-penguin-animals-club-penguin-thumbnail.png"
            className="w-full h-screen"
          ></img>
        </>
      )}
    </Fragment>
  );
};

export default Dashboard;
//esto es una prueba