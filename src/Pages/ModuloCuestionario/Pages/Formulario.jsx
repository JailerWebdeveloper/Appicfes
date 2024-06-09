import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cuestionario from '../Components/Cuestionario';
import ResultadoModal from '../Components/ResultadoModal';

const Formulario = ({  }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(null);
  const practiceId = 14;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://upc-codex.tech:4258/API/V2/ContentPractice/GetByPracticeId/${practiceId}`);
        setQuestions(response.data.ContentPractice[0].Preguntas);
        console.log(response);
        setSelectedOptions(Array(response.data.ContentPractice[0].Preguntas.length).fill(''));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [practiceId]);

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
    // Validar que todas las preguntas estén respondidas
    const unansweredIndex = selectedOptions.findIndex(option => option === '');
    if (unansweredIndex !== -1) {
      alert(`La pregunta ${unansweredIndex + 1} no ha sido respondida.`);
      return;
    }

    const responsePayload = {
      IdPractica: practiceId,
      CedulaAlumno: 1001234747,  // Reemplaza esto con el valor adecuado
      Respuestas: selectedOptions,
    };

    try {
      const response = await axios.post('https://upc-codex.tech:4258/API/V2/ContentPractice/Evaluate', responsePayload);
      console.log('Response:', response.data);
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
          <div className="flex justify-center my-8">
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
