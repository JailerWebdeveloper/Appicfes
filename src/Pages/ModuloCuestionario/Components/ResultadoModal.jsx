import React from 'react';

const ResultadoModal = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  const handleclose =()=>{
    onClose();
    window.location.href = "/Menu"; 
 }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">Resultados</h2>
        <p className="mb-4">Estudiante: {result.Estudiante.Nombre} {result.Estudiante.Apellido}</p>
        <p className="mb-4">Documento: {result.Estudiante.Tipo_documento} {result.Estudiante.Documento}</p>
        <p className="mb-4">Puntaje: {result.score}</p>
        <p className="mb-4">Respuestas correctas: {result.correctAnswers}</p>
        <p className="mb-4">Respuestas incorrectas: {result.wrongAnswers}</p>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Detalles:</h3>
          {result.results.map((res, index) => (
            <div key={index} className="my-2">
              <p className="font-semibold">Pregunta: {res.Pregunta}</p>
              <p>Respuesta Correcta: {res.RespuestaCorrecta}</p>
              <p>Respuesta Usuario: {res.RespuestaUsuario}</p>
              <p className={res.Correcta ? "text-green-600" : "text-red-600"}>
                {res.Correcta ? "Correcta" : "Incorrecta"}
              </p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={handleclose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ResultadoModal;
