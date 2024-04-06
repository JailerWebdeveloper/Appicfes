import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Registerpage = () => {
  return (
    <Fragment>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen"
        data-theme="dark"
      >
        <div className="flex flex-col items-center justify-center bg-base rounded-tl-lg rounded-bl-lg p-4">
          <div className="my-4">
            <img src="/unnamed.png" alt="logo" width="100" height="100" />
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold text-primary">REGISTRO</h1>
          </div>
          <div className="my-2">
            <p className="text-center relative text-primary before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
              Registrate con tu email
            </p>
          </div>
          <div className="w-full mb-8">
            <form className="text-primary">
              <div className="flex justify-center mb-4">
                <input
                  type="email"
                  className="w-full max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="flex flex-col items-center gap-4 justify-center mb-6">
                <input
                  type="password"
                  className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                  placeholder="Contraseña"
                />
                <input
                  type="password"
                  className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                  placeholder="Confirmar contraseña"
                />
              </div>
             
              <div className="w-full max-w-md mx-auto">
                <button
                  type="submit"
                  className="w-full btn bg-neutral py-2 px-4 rounded-lg text-primary hover:bg-base-200 transition-colors"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
          <div>
            <span className="text-neutral-200">
              ¿tienes cuenta?{" "}
              <Link
                to="/"
                className="text-primary hover:underline transition-all"
              >
                Loguea
              </Link>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center  z-10  rounded-xl">
          <img
            src="bg.jpg"
            className="w-full object-cover h-full rounded-tl-xl rounded-bl-xl"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Registerpage;
