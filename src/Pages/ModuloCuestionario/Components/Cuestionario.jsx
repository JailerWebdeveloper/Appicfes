import React from 'react';
import { RiQuestionAnswerLine } from "react-icons/ri";

const Cuestionario = ({ question, currentQuestionIndex, totalQuestions, selectedOption, handleOptionChange }) => {
  return (
    <main className="w-full h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex justify-start badge badge-secondary">
          <h1>Pregunta {currentQuestionIndex + 1}/{totalQuestions}</h1>
        </div>
        <div className="flex justify-end badge badge-secondary">
          <h1>MODULO: {question.Subject}</h1>
        </div>
      </div>
      {/* Card Section */}
      <div className="card w-full shadow-xl border-2 my-8">
        <div className="card-body flex flex-col gap-1">
          <p className='flex items-center justify-start gap-1 '><RiQuestionAnswerLine />Pregunta</p>
          <p>{question.Question}</p>
        </div>
      </div>

      <div className="hero my-8">
        <div className="hero-content flex-col lg:flex-row">
          {question.Photo && (<img
            src={`https://upc-codex.tech:4258/API/V2/Questions/Image/${question.Photo}`}
            className="max-w-lg rounded-lg shadow-2xl"
          />)}

        </div>
      </div>

      <div className="flex justify-center w-full my-8">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
          {['OptionA', 'OptionB', 'OptionC', 'OptionD'].map((option) => (
            <label
              key={option}
              className={`btn btn-lg w-auto h-full p-3 ${selectedOption === option ? 'btn-success' : 'btn-secondary'}`}
            >
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="hidden"
              />
              {question[option]}
            </label>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cuestionario;
