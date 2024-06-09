import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cuestionario from '../Components/Cuestionario';
import ResultadoModal from '../Components/ResultadoModal';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
const Formulario = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [usuariodecoded, setdecodeduser] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(null);
  const { id } = useParams();

  
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



  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://upc-codex.tech:4258/API/V2/ContentPractice/GetByPracticeId/${id}`);
        setQuestions(response.data.ContentPractice[0].Preguntas);
        setSelectedOptions(Array(response.data.ContentPractice[0].Preguntas.length).fill(''));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [id]);

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleOptionChange = (e) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = e.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = async () => {
    const unansweredIndex = selectedOptions.findIndex(option => option === '');
    if (unansweredIndex !== -1) {
      alert(`La pregunta ${unansweredIndex + 1} no ha sido respondida.`);
      return;
    }

    const responsePayload = {
      IdPractica: id,
      CedulaAlumno: usuariodecoded.Documento,  // Reemplaza esto con el valor adecuado
      Respuestas: selectedOptions,
    };

    try {
      const response = await axios.post('https://upc-codex.tech:4258/API/V2/ContentPractice/Evaluate', responsePayload);
      setResult(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting responses:', error);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {questions.length > 0 ? (
        <>
          <Cuestionario 
            question={questions[currentQuestionIndex]} 
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            selectedOption={selectedOptions[currentQuestionIndex]}
            handleOptionChange={handleOptionChange}
          />
          <div className="flex justify-center gap-1 my-8">
            {questions.map((_, index) => (
              <button 
                key={index}
                className={`badge ${index === currentQuestionIndex ? 'badge-primary' : 'badge-secondary'}`} 
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex justify-end items-center py-4 px-8">
            <button className="btn btn-warning mr-4" onClick={handlePrevious}>
              Pregunta Anterior
            </button>
            <button className="btn btn-success" onClick={handleNext}>
              Siguiente Pregunta
            </button>
            {currentQuestionIndex === questions.length - 1 && (
              <button className="btn btn-primary ml-4" onClick={handleSubmit}>
                Enviar Respuestas
              </button>
            )}
          </div>
        </>
      ) : (
        <p>Cargando preguntas...</p>
      )}
      <ResultadoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        result={result} 
      />
    </div>
  );
};

export default Formulario;
