import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const BancoPreguntas = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://upc-codex.tech:4258/API/V2/Questions"
        );
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar las preguntas:", error);
      }
    };
    fetchQuestions();
  }, []);

  const filteredQuestions = questions.filter(
    (question) =>
      question.Question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.Subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuestionSelect = (event) => {
    setSelectedQuestion(event.target.value);
  };

  const handleDeleteQuestion = async () => {
    try {
      await axios.delete(
        `https://upc-codex.tech:4258/API/V2/Question/${selectedQuestion}`
      );
      alert("Pregunta eliminada exitosamente");
      setQuestions(questions.filter((question) => question._id !== selectedQuestion));
      setSelectedQuestion(null);
    } catch (error) {
      console.error("Error al eliminar la pregunta:", error);
      alert("No se pudo realizar la acción");
    }
  };

  return (
    <div className="w-full p-10 bg-white flex flex-col gap-5 rounded-lg">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">Banco de Preguntas</h1>
      <div className="flex gap-5 justify-end items-center">
        <div className="join">
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Link to="/menu/CrearPreguntas" className="btn btn-secondary btn-xl">
          Nueva Pregunta
        </Link>
      </div>
    
      <div className="overflow-x-auto h-[550px] overflow-y-auto bg-base w-full">
        <table className="table table-xs border overflow-y-auto w-full">
          <thead className="text-accent">
            <tr>
              <th></th>
              <th>Pregunta</th>
              <th>Materia</th>
              <th>Respuesta</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">Cargando...</td>
              </tr>
            ) : (
              filteredQuestions.map((question, index) => (
                <tr key={question._id}>
                  <td>{index + 1}</td>
                  <td className="text-black">{question.Question}</td>
                  <td>{question.Subject}</td>
                  <td>{question.Answer}</td>
                  <td>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => {
                        setSelectedQuestion(question._id);
                        handleDeleteQuestion();
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot className="text-accent">
            <tr>
              <th></th>
              <th>Pregunta</th>
              <th>Materia</th>
              <th>Acción</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default BancoPreguntas;
