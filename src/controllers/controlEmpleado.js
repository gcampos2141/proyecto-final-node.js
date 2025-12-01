const express = require("express");
const userRouter = express.Router();
const sql = require('../config/database');

//ruta para obtener todos los empleados
userRouter.get("/obtenerEmpleados", async (req, res) => {
    try {
        const query = "SELECT* FROM empleados";
        const rows = await sql.query(query);
        res.status(200).json({ code: 200, message: rows });
    }catch (error) {
        console.error(error);
        res.status(500).json({code:500, message: "Error en el servidor"});
    }
});

//ruta agregar empleados
userRouter.post("/agregarEmpledo", async (req, res) => {
    try{
        if (!req.body.nombre || !req.body.apellidos || !req.body.telefono || !req.body.email || !req.body.direccion) {
            return res.status(400).json({code:400, message: "Faltan datos del empleado"});
        }

        const {nombre, apellidos, telefono, email, direccion} = req.body;
        const query = "INSERT INTO empleados (nombre, apellidos, telefono, email, direccion) VALUES (?,?,?,?,?)";

        const result = await sql.query(query, [nombre, apellidos, telefono, email, direccion]);
        res.status(201).json({code:201, message: "Empleado agregado correctamente", id: result.insertId});


    }catch (error) {
        console.error(error);
        res.status(500).json({code:500, message: "Error en el servidor"});
    }
});

//ruta actualizar empleado
userRouter.put("/actualizarEmpleado", async (req, res) => {
    try{
        if (!req.body.id || !req.body.nombre || !req.body.apellidos || !req.body.telefono || !req.body.email || !req.body.direccion) {
            return res.status(400).json({code:400, message: "Faltan datos del empleado"});
        }

        const {id, nombre, apellidos, telefono, email, direccion} = req.body;
        const query = "UPDATE empleados SET nombre = ?, apellidos = ?, telefono = ?, email = ?, direccion = ? WHERE id = ?";

        await sql.query(query, [nombre, apellidos, telefono, email, direccion, id]);

        res.status(200).json({code:200, message: "Empleado actualizado correctamente"});
    }catch (error) {
        console.error(error);
        res.status(500).json({code:500, message: "Error en el servidor"});
    }
 
});

//ruta eliminar empleado
userRouter.delete("/eliminarEmpleado", async (req, res) => {
    try{
        if (!req.body.id) {
            return res.status(400).json({code:400, message: "Falta el ID del empleado"});
        }

        const {id} = req.body;
        const query = "DELETE FROM empleados WHERE id = ?";
        
        await sql.query(query, id);

        res.status(200).json({code:200, message: "Empleado eliminado correctamente"});
    }catch (error) {
        console.error(error);
        res.status(500).json({code:500, message: "Error en el servidor"});
    }
 
});


module.exports = userRouter;