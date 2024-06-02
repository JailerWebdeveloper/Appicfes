import "../css/index.css";
import { useState, useEffect } from "react";

const CrearPracticas = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        // Aquí debes agregar la lógica para cargar las preguntas desde tu API o fuente de datos
        const fetchQuestions = async () => {
            // Simulación de carga de preguntas
            const fetchedQuestions = [
                { id: 1, text: "Pregunta 1" },
                { id: 2, text: "Pregunta 2" },
                { id: 3, text: "Pregunta 3" },
                { id: 4, text: "Pregunta 4" },
            ];
            setQuestions(fetchedQuestions);
        };

        fetchQuestions();
    }, []);

    const handleAddQuestion = (id) => {
        const question = questions.find((q) => q.id === id);
        setSelectedQuestions([...selectedQuestions, question]);
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const handleRemoveQuestion = (id) => {
        const question = selectedQuestions.find((q) => q.id === id);
        setQuestions([...questions, question]);
        setSelectedQuestions(selectedQuestions.filter((q) => q.id !== id));
    };

    const handleSubmit = () => {
        const selectedIds = selectedQuestions.map((q) => q.id);
        // Aquí debes enviar el array de IDs al servidor o API
        console.log("Selected Question IDs:", selectedIds);
    };

    return (
        <div className="w-full p-10 bg-white flex flex-col rounded-lg">
            <div className="flex items-center gap-4 justify-center">
                <div className="bg-slate-200 rounded-lg max-w-lg shadow-md p-2 w-full">
                    <h3 className="text-center mb-2">Lista A</h3>
                    {questions.length === 0 ? (
                        <p className="text-center">No hay preguntas disponibles</p>
                    ) : (
                        questions.map((question) => (
                            <div
                                key={question.id}
                                className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm mb-2"
                            >
                                <span>{question.text}</span>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => handleAddQuestion(question.id)}
                                >
                                    ➡
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="bg-slate-200 rounded-lg max-w-lg shadow-md p-2 w-full">
                    <h3 className="text-center mb-2">Lista B</h3>
                    {selectedQuestions.length === 0 ? (
                        <p className="text-center">No hay preguntas seleccionadas</p>
                    ) : (
                        selectedQuestions.map((question) => (
                            <div
                                key={question.id}
                                className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm mb-2"
                            >
                                <span>{question.text}</span>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleRemoveQuestion(question.id)}
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
                    Crear Practica
                </button>
            </div>
        </div>
    );
};

export default CrearPracticas;
