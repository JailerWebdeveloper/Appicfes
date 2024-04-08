import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registerpage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    contraseña: "",
    cedula: "",
    Institucion: 0,
  });
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const response = await axios.get(
          "http://srv435312.hstgr.cloud:4200/API/V2/Instituciones"
        );
        setInstituciones(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetchInstituciones();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        nombre: formData.nombre,  
        apellido: formData.apellido,
        usuario: formData.usuario,
        contrasena: formData.contraseña,
        cedula: parseInt(formData.cedula), // Convertir a entero
        Nit_institucion: parseInt(formData.Institucion), // Convertir a entero
      };
      const response = await axios.post("http://srv435312.hstgr.cloud:4200/API/V2/Usuario/Registro", formdata);
      alert(response.data.message);
      window.location.href = "/";
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      alert(error.response.data.message)
    }
  };

  return (
    <Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen" data-theme="dark">
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
            <form className="text-primary flex flex-col gap-5 w-4/5 mx-auto" onSubmit={handleSubmit}>
              <div className="flex gap-5 items-center w-full justify-center">
                <input
                  name="nombre"
                  type="text"
                  className="w-1/2 max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <input
                  name="apellido"
                  type="text"
                  className="w-1/2 max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-5 items-center w-full justify-center">
                <input
                  name="usuario"
                  type="text"
                  className="w-1/2 max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                />
                <input
                  name="contraseña"
                  type="password"
                  className="w-1/2 max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Contraseña"
                  value={formData.contraseña}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-5 items-center w-full justify-center">
                <input
                  name="cedula"
                  type="text"
                  className="w-1/2 max-w-md py-2 px-4 rounded-lg text-primary outline-none"
                  placeholder="Cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                />
                <select
                  name="Institucion"
                  className="select select-bordered bg-gray-800 text-gray-400 w-1/2 max-w-xs"
                  value={formData.Institucion}
                  onChange={handleChange}
                >
                  <option value="0">Selecciona Empresa perteneciente</option>
                  {loading ? (
                    <option>Cargando...</option>
                  ) : (
                    instituciones.map((institucion, index) => (
                      <option key={index} value={institucion.Nit_institucion}>{institucion.Nombre_Institucion}</option>
                    ))
                  )}
                </select>
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
              ¿Tienes cuenta?
              <Link to="/" className="text-primary hover:underline transition-all">
                Loguea
              </Link>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center  z-10  rounded-xl">
          <img src="bg.jpg" className="w-full object-cover h-full rounded-tl-xl rounded-bl-xl" />
        </div>
      </div>
    </Fragment>
  );
};

export default Registerpage;
