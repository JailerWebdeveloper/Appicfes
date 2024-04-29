import { Fragment, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const Landing = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    contrasena: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      usuario: formData.usuario,
      contrasena: formData.contrasena,
    };

    console.log(data)
    try {
      const response = await axios.post(
        "https://upc-codex.tech:4200/API/V2/login",
        data
      );

      if (response.status === 200) {
        const token = response.data.token;
        // Almacenar el token en las cookies de manera segura
        Cookies.set("accessToken", String(token), {
          sameSite: "strict",
          path: "/",
        });
        

        // Decodificar y mostrar información del token
        const accessToken = Cookies.get("accessToken");
        const decoded = jwtDecode(accessToken);
        const newUserData = decoded;


        // Redireccionar solo si el usuario está activo
          alert("Bienvenido, " + newUserData.nombre);
          window.location.href = "/Menu";
      } else {
        // Manejo específico de errores
        if (response.status === 401) {
          alert("Credenciales incorrectas");
        } else {
          alert("Ocurrió un error en la respuesta.");
        }
      }
    } catch (error) {
      console.error("Error durante la autenticación:", error);
      alert("Ocurrió un error durante la autenticación.");
    }
  };
  return (
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen"
        data-theme="dark"
      >
        <div className="flex flex-col items-center justify-center bg-base rounded-tl-lg rounded-bl-lg p-4">
          <div className="my-4">
            <Link to="menu">
              <img src="/unnamed.png" alt="logo" width="100" height="100" />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold text-primary">ICFES TRACER</h1>
          </div>
          <div className="my-2">
            <p className="text-center relative text-primary before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
              Ingresa con tu Usuario
            </p>
          </div>
          <div className="w-full mb-8">
            <form  onSubmit={handleSubmit} className="text-primary">
              <div className="flex justify-center mb-4">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="usuario"
                  className="w-full max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Usuario"
                />
              </div>
              <div className="flex justify-center mb-6">
                <input
                  onChange={handleInputChange}
                  name="contrasena"
                  type="password"
                  className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="w-full max-w-md mx-auto flex items-center justify-between text-primary mb-8">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recordarme</label>
                </div>
                <div>
                  <Link
                    to="menu"
                    className="hover:underline hover:text-secondary transition-all"
                  >
                    ¿Olvidaste tu password?
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <button
                  type="submit"
                  className="w-full btn bg-neutral py-2 px-4 rounded-lg text-primary hover:bg-base-200 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div>
            <span className="text-neutral-200">
              ¿No tienes cuenta?{" "}
              <Link
                to="Registro"
                className="text-primary hover:underline transition-all"
              >
                Registrate
              </Link>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center  z-10  rounded-xl">
          <img
          alt="background"
            src="bg.jpg"
            className="w-full object-cover h-full rounded-tl-xl rounded-bl-xl"
          />
        </div>
      </div>
  );
};

export default Landing;
