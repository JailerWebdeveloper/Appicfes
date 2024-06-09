import "../css/index.css";
import axios from "axios";
import { useState, useEffect } from "react";

const CrearPracticas = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [nombrePractica, setNombrePractica] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("https://upc-codex.tech:4258/API/V2/Questions");
        setQuestions(response.data);
        setFilteredQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const response = await axios.get("https://upc-codex.tech:4258/API/V2/Instituciones");
        setInstituciones(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching institutions:", error);
      }
    };
    fetchInstituciones();
  }, []);

  useEffect(() => {
    filterQuestions();
  }, [searchTerm, selectedSubject, questions]);

  const filterQuestions = () => {
    let filtered = questions;
    if (searchTerm) {
      filtered = filtered.filter((question) =>
        question.Question.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedSubject) {
      filtered = filtered.filter(
        (question) => question.Subject.toLowerCase() === selectedSubject.toLowerCase()
      );
    }
    setFilteredQuestions(filtered);
  };

  const handleAddQuestion = (_id) => {
    const question = questions.find((q) => q._id === _id);
    setSelectedQuestions([...selectedQuestions, question]);
    setQuestions(questions.filter((q) => q._id !== _id));
  };

  const handleRemoveQuestion = (_id) => {
    const question = selectedQuestions.find((q) => q._id === _id);
    setQuestions([...questions, question]);
    setSelectedQuestions(selectedQuestions.filter((q) => q._id !== _id));
  };

  const handleSubmit = async () => {
    const selectedIds = selectedQuestions.map((q) => q._id);
    try {
      const practicaResponse = await axios.post("https://upc-codex.tech:4258/API/V2/Registro/Practica", {
        nombre: nombrePractica,
        Id_institucion: selectedInstitution,
      });

      const IdPractica = practicaResponse.data.Practica.Id;

      const questionsResponse = await axios.post(
        "https://upc-codex.tech:4258/API/V2/ContentPractice/Register",
        { IdPractica, Preguntas: selectedIds }
      );
      alert("Práctica creada con éxito");
    } catch (error) {
      console.error("Error creating practice:", error);
      alert("Error al crear la práctica");
    }
  };

  return (
    <div className="w-full p-10 bg-white flex flex-col gap-5 rounded-lg">
      <h1 className="text-center my-5 text-2xl font-bold capitalize">Crear Formulario</h1>
      <div className="flex gap-5 justify-center items-center">

          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Nombre Formulario"
            value={nombrePractica}
            onChange={(e) => setNombrePractica(e.target.value)}
          />
        <select
          name="Nit_institucion"
          className="select select-primary w-full max-w-xs"
          onChange={(e) => setSelectedInstitution(e.target.value)}
        >
          <option value="0">Selecciona Empresa perteneciente</option>
          {loading ? (
            <option>Cargando...</option>
          ) : (
            instituciones.map((institucion, index) => (
              <option key={index + 1} value={institucion.Nit_institucion}>
                {institucion.Nombre_Institucion}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="flex w-full gap-5 justify-end items-center">
        <label className="input input-bordered flex items-center w-full gap-2">
          <input
            type="text"
            className="w-full"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          name="Subject"
          className="select select-primary bg-slate-50 w-full max-w-xs"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option disabled selected>
            Materia
          </option>
          <option value="Ingles">Inglés</option>
          <option value="Matematicas">Matemáticas</option>
        </select>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="bg-slate-200 rounded-lg max-w-lg shadow-md p-2 w-full">
          <h3 className="text-center mb-2">Preguntas Disponibles</h3>
          {filteredQuestions.length === 0 ? (
            <p className="text-center">No hay preguntas disponibles</p>
          ) : (
            filteredQuestions.map((question) => (
              <div
                key={question._id}
                className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm mb-2"
              >
                <span>{question.Question}</span>
                <button
                  className="btn btn-sm"
                  onClick={() => handleAddQuestion(question._id)}
                >
                  ➡
                </button>
              </div>
            ))
          )}
        </div>

        <div className="bg-slate-200 rounded-lg max-w-lg shadow-md p-2 w-full">
          <h3 className="text-center mb-2">Preguntas Seleccionadas</h3>
          {selectedQuestions.length === 0 ? (
            <p className="text-center">No hay preguntas seleccionadas</p>
          ) : (
            selectedQuestions.map((question) => (
              <div
                key={question._id}
                className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm mb-2"
              >
                <span>{question.Question}</span>
                <button
                  className="btn btn-sm"
                  onClick={() => handleRemoveQuestion(question._id)}
                >
                  ⬅
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="btn btn-success" onClick={handleSubmit}>
          Crear Práctica
        </button>
      </div>
    </div>
  );
};

export default CrearPracticas;
