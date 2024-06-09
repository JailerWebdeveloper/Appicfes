import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

const PerfilEstudiante = () => {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [usuariodecoded, setdecodeduser] = useState({});
    const [practices, setPractices] = useState([]);

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
        const fetchPractices = async () => {
            if (usuariodecoded.usuario) {
                try {
                    const response = await axios.get(
                        `https://upc-codex.tech:4258/API/V2/ContentPractice/GetLogPractices/student/${usuariodecoded.Documento}`
                    );
                    setPractices(response.data);
                } catch (error) {
                    console.error("Error al obtener las prácticas:", error);
                }   
            }
        };

        fetchPractices();
    }, [usuariodecoded]);

    return (
        <>
            <div className="w-full mx-auto py-8 px-4 md:px-6">
                <div className="flex items-center gap-4 mb-8">
                    <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-600">
                        {usuariodecoded.nombre && usuariodecoded.nombre[0] + usuariodecoded.apellido[0]}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{`${usuariodecoded.nombre} ${usuariodecoded.apellido}`}</h1>
                        <p className="text-gray-500 ">{`${usuariodecoded.usuario}`}</p>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 text-left font-medium">ID de Práctica</th>
                                <th className="px-4 py-3 text-left font-medium">Fecha</th>
                                <th className="px-4 py-3 text-left font-medium">Nota</th>
                                <th className="px-4 py-3 w-[100px] text-left font-medium">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {practices.length > 0 ? (
                                practices.map((practice) => (
                                    <tr key={practice._id} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3 font-medium">{practice.IdPractica}</td>
                                        <td className="px-4 py-3">{new Date(practice.Fecha).toLocaleDateString()}</td>
                                        <td className="px-4 py-3">{practice.Nota}</td>
                                        <td className="px-4 py-3 flex gap-2">
                                            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                                <span className="sr-only">Edit</span>
                                            </button>
                                            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-2 py-1 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-red-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                                <span className="sr-only">Delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-4 py-3 text-center text-gray-500">No se encontraron prácticas.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PerfilEstudiante;
