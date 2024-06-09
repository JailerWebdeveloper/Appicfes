import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const ModalEditPregunta = () => {

    useEffect(() => {
        const fetch = async () => {
          try {
            const response = await axios.get(
              "https://upc-codex.tech:4258/API/V2/Notas/Todas"
            );
            setNotas(response.data.data);
            setLoading(false);
          } catch (error) {
            console.error("Error al recuperar los datos:", error);
          }
        };
        fetch();
      }, []);
    return ( 
    <>
    
    
    
    </> );
}
 
export default ModalEditPregunta;