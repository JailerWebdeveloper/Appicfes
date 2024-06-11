import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const PerfilEstudiante = () => {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [usuariodecoded, setdecodeduser] = useState({});
    const [practices, setPractices] = useState([]);
    const [Pagos, setPagos] = useState([]);
    const [activeTab, setActiveTab] = useState("notas")
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


    useEffect(() => {
        const fetchPagos = async () => {
            if (usuariodecoded.usuario) {
                try {
                    const response = await axios.get(
                        `https://upc-codex.tech:4258/API/V2/Pagos/${usuariodecoded.Documento}`
                    );
                    setPagos(response.data.cartera);
                } catch (error) {
                    console.error("Error al obtener las prácticas:", error);
                }
            }
        };

        fetchPagos();
    }, [usuariodecoded]);

    console.log(Pagos)

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
                <div role="tablist" className="tabs tabs-boxed">                    
                    <a className={`tab tab-success ${activeTab === 'notas' ? 'tab-active' : ''}`} onClick={() => setActiveTab('notas')}>Notas</a>
                    <a className={`tab ${activeTab === 'pagos' ? 'tab-active' : ''}`} onClick={() => setActiveTab('pagos')}>Pagos</a>
                </div>
                {activeTab === "notas" ? (<div className="border rounded-lg overflow-hidden">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 text-left font-medium">ID de Práctica</th>
                                <th className="px-4 py-3 text-left font-medium">Fecha</th>
                                <th className="px-4 py-3 text-left font-medium">Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {practices.length > 0 ? (
                                practices.map((practice) => (
                                    <tr key={practice._id} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3 font-medium">{practice.IdPractica}</td>
                                        <td className="px-4 py-3">{new Date(practice.Fecha).toLocaleDateString()}</td>
                                        <td className="px-4 py-3">{practice.Nota}</td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-4 py-3 text-center text-gray-500">No se encontraron prácticas.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>) : (<div className="border rounded-lg overflow-hidden">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 text-left font-medium">ID de pago</th>
                                <th className="px-4 py-3 text-left font-medium">Modalidad</th>
                                <th className="px-4 py-3 text-left font-medium">Cantidad</th>
                                <th className="px-4 py-3 text-left font-medium">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Pagos.length > 0 ? (
                                Pagos.map((pago) => (
                                    <tr key={pago.Id_Pago} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3 font-medium">{pago.Id_Pago}</td>
                                        <td className="px-4 py-3 font-medium">{pago.Metodo_pago}</td>
                                        <td className="px-4 py-3 font-medium">{pago.Pago}</td>
                                        <td className="px-4 py-3">{new Date(pago.Fecha).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-4 py-3 text-center text-gray-500">No se encontraron prácticas.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>)}

            </div>
        </>
    );
}

export default PerfilEstudiante;
