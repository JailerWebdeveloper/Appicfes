const router = require("express").Router();

const ModeloGasto=require("../app/models/modeloGasto");

router.post("/Registro/Gasto",async (req,res)=>{
    const{Fecha,Tipo_gasto,Gasto,Descripcion,Id_Usuario,Grado}=req.body;

    try{
        const NewGasto=await ModeloGasto.create({
            Fecha,
            Tipo_gasto,
            Gasto,
            Descripcion,
            Id_Usuario,
            Grado
        });
        res.status(201).json({
            message: 'Nuevo Gasto creado exitosamente',
            Gasto: NewGasto, // Cambiado 'curso' a 'cartera' para mayor claridad
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al crear gasto',
            error,
        });
    
    }
});
module.exports = router;
