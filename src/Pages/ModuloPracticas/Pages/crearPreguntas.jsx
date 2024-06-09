import axios from "axios";
import "../css/index.css";
import { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";

const CrearPreguntas = () => {
  const [formdata, setFormdata] = useState({
    Question: "",
    Answer: "",
    OptionA: "",
    OptionB: "",
    OptionC: "",
    OptionD: "",
    Photo: null, // Cambiado para manejar el archivo de foto
    Subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      Photo: files[0], // Solo el primer archivo
    }));
  };

  const handleRadioChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      Answer: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formdata.Subject !== "" && formdata.Answer !== "") {
        const data = new FormData();
        data.append("Question", formdata.Question);
        data.append("Answer", formdata.Answer);
        data.append("OptionA", formdata.OptionA);
        data.append("OptionB", formdata.OptionB);
        data.append("OptionC", formdata.OptionC);
        data.append("OptionD", formdata.OptionD);
        data.append("Subject", formdata.Subject);

        if (formdata.Photo) {
          data.append("Photo", formdata.Photo);
        }

        const response = await axios.post(
          "https://upc-codex.tech:4258/API/V2/Question/Register",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        alert("Pregunta creada con éxito");
        setFormdata({
          Question: "",
          Answer: "",
          OptionA: "",
          OptionB: "",
          OptionC: "",
          OptionD: "",
          Photo: null, // Cambiado para manejar el archivo de foto
          Subject: "",
        })
      } else {
        alert("Debe seleccionar una respuesta y una materia");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
      alert(
        error.response.data.message + " " + error.response.data.error
      );
    }
  };

  return (
    <div className="w-full flex flex-col p-10">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="flex items-center bg-white p-4 rounded-xl justify-start gap-5">
          <input
            onChange={handleChange}
            type="text"
            name="Question"
            placeholder="Pregunta"
            value={formdata.Question}
            className="input input-primary text-black bg-slate-50 input-bordered w-full max-w-lg"
            required
          />
          <select
            onChange={handleChange}
            name="Subject"
            className="select select-primary bg-slate-50 w-full max-w-xs"
            required
          >
            <option disabled selected>
              Materia
            </option>
            <option value="Ingles">Ingles</option>
            <option value="Matematicas">Matematicas</option>
          </select>

          <div className="file-upload-wrapper group">
            <label className="file-upload-button group-hover:bg-blue-200 transition-all duration-250 cursor-pointer">
              <BiSolidImageAdd size={24} />
              <input
                type="file"
                name="Photo"
                value={formdata.Photo}
                className="file-upload-input"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col bg-white p-4 rounded-xl mt-3 gap-5">
          <div className="flex items-center justify-start gap-3">
            <input
              type="radio"
              name="Answer"
              value="OptionA"
              className="radio radio-success"
              onChange={handleRadioChange}
              required
            />
            <div className="form__group field">
              <input
                name="OptionA"
                onChange={handleChange}
                type="text"
                value={formdata.OptionA}
                className="form__field"
                placeholder="Opción A"
                required
              />
              <label htmlFor="OptionA" className="form__label">
                Opción A
              </label>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <input
              type="radio"
              name="Answer"
              value="OptionB"
              className="radio radio-success"
              onChange={handleRadioChange}
              required
            />
            <div className="form__group field">
              <input
                name="OptionB"
                onChange={handleChange}
                type="text"
                value={formdata.OptionB}
                className="form__field"
                placeholder="Opción B"
                required
              />
              <label htmlFor="OptionB" className="form__label">
                Opción B
              </label>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <input
              type="radio"
              name="Answer"
              value="OptionC"
              className="radio radio-success"
              onChange={handleRadioChange}
              required
            />
            <div className="form__group field">
              <input
                name="OptionC"
                onChange={handleChange}
                type="text"
                value={formdata.OptionC}
                className="form__field"
                placeholder="Opción C"
                required
              />
              <label htmlFor="OptionC" className="form__label">
                Opción C
              </label>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <input
              type="radio"
              name="Answer"
              value="OptionD"
              className="radio radio-success"
              onChange={handleRadioChange}
              required
            />
            <div className="form__group field">
              <input
                name="OptionD"
                onChange={handleChange}
                type="text"
                value={formdata.OptionD}
                className="form__field"
                placeholder="Opción D"
                required
              />
              <label htmlFor="OptionD" className="form__label">
                Opción D
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn bg-blue-200 self-start mt-3"
        >
          Crear Pregunta
        </button>
      </form>
    </div>
  );
};

export default CrearPreguntas;
