const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const sql = require('../config/database');

// verificar conexion a la base de datos
if (sql) {
    console.log("Conexión a la base de datos exitosa");
}

//ruta login usuarios
userRouter.post("/login", async (req, res) => {
    try{
        const {user_name, user_password} = req.body;

        if(!user_name || !user_password) {
            return res.status(400).json({ code: 400, message: "Faltan datos para iniciar sesión" });
        }

        // Verificar las credenciales con la base de datos
        const query = "SELECT * FROM usuarios WHERE username = ? AND password = ?";   
        const rows = await sql.query(query, [user_name, user_password]); 

        // Si las credenciales son válidas, entonces se genera un token JWT
        if (rows.length == 1){
            const token = jwt.sign({
                user_id: rows[0].id,
                user_name: rows[0].username,
            }, "debugkey", {expiresIn: "1h"});

            res.status(200).json({code: 200, message: token});
        }else {
            res.status(401).json({code: 401, message:"Credenciales inválidas"});
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({code: 500, message:"Error del servidor"});
    }
});

module.exports = userRouter;