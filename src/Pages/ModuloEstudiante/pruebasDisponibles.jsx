import React, { useState, useEffect } from 'react';

const PruebasDisponibles = () => {
  const [pruebas, setPruebas] = useState([]);

  useEffect(() => {
    const fetchPruebas = async () => {
      try {
        const response = await fetch('https://upc-codex.tech:4258/API/V2/ContentPractice/GetAll');
        const data = await response.json();
        setPruebas(data);
      } catch (error) {
        console.error('Error al cargar las pruebas:', error);
      }
    };

    fetchPruebas();
  }, []);

  const handleStartPrueba = (id) => {
    window.location.href=`/Menu/formulario/${id}`;
  };

  return (
    <div className="w-full mx-auto py-8 px-4 md:px-6">
      <h1 className="text-2xl font-bold mb-4">Pruebas Disponibles</h1>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left font-medium">ID</th>
              <th className="px-4 py-3 text-left font-medium">Nombre</th>
              <th className="px-4 py-3 text-left font-medium">Descripción</th>
              <th className="px-4 py-3 w-[100px] text-left font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pruebas.map((prueba) => (
              <tr key={prueba.IdPractica} className="border-b dark:border-gray-700">
                <td className="px-4 py-3">{prueba.IdPractica}</td>
                <td className="px-4 py-3">{prueba.Nombre}</td>
                <td className="px-4 py-3">{prueba.Descripcion}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleStartPrueba(prueba.IdPractica)}
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  >
                    Iniciar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PruebasDisponibles;
