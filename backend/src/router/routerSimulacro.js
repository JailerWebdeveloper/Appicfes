const router = require("express").Router();

const ModeloSimulacro=require("../app/models/modeloSimulacro");

router.post("/Registro/Simulacro",async (req,res)=>{
    const{Id,Empresa,CuadernillosComprados,Fecha_Simulacro,Grado}=req.body;

    try{
        const newSimulacro= await ModeloSimulacro.create({
            Id,
            Empresa,
            CuadernillosComprados,
            Fecha_Simulacro,
            Grado
        });
        res.status(201).json({
            message: 'Nuevo Simulacreo creado exitosamente',
            cartera: newSimulacro, // Cambiado 'curso' a 'cartera' para mayor claridad
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al crear Simulacro',
            error,
        });
    }
})