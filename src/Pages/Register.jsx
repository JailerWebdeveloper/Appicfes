import { Fragment } from "react";

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
            <button className="flex items-center gap-2 bg-neutral btn text-primary py-2 px-4 rounded-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"></path>
                </g>
              </svg>
              Registrate con Google
            </button>
          </div>
          <div className="my-14">
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
