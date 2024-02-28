import { Fragment } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import LRform from "../components/LoginRegisterForm";
const Landing = () => {
  return (
    <Fragment>
      <main className="min-h-screen w-full flex md:flex-row flex-col  justify-center gap-5 p-10 items-center  herobg ">
        <Navbar/>
        <LRform/>
        <div className="md:w-2/5 w-full  md:flex flex-col md:order-2 justify-center items-center">
          <h1 className="uppercase antialiased font-bold  text-5xl text-white text-center">
            bienvenido a IcfesTracer
          </h1>
        </div>
      </main>
    </Fragment>
  );
};

export default Landing;
