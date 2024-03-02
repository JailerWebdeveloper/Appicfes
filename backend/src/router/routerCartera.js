const router = require("express").Router();
const ModeloCartera = require("../app/models/modeloCartera");

router.post("/Registro/Cartera", async (req, res) => {
    const { Documento_alumno, Numero_recibo, Pago, Metodo_pago, Fecha,Grado } = req.body;
    try {
        const newCartera = await ModeloCartera.create({
            Documento_alumno,
            Numero_recibo,
            Pago,
            Metodo_pago,
            Fecha,
            Grado
        });
        res.status(201).json({
            message: 'Nuevo Pago creado exitosamente',
            cartera: newCartera, // Cambiado 'curso' a 'cartera' para mayor claridad
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al crear Pago',
            error,
        });
    }
});

module.exports = router;
