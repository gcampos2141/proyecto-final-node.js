const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const sql = require('../config/database');

//ruta login usuarios
userRouter.post("/login", async (req, res) => {
    try{
const {user_name, user_password} = req.body;

        // --- AGREGA ESTO PARA DEPURAR EN RENDER ---
        console.log("1. Datos recibidos del front:", user_name, user_password);
        
        const query = "SELECT * FROM usuarios WHERE username = ? AND password = ?";
        const rows = await sql.query(query, [user_name, user_password]);
        
        console.log("2. Resultado de la DB:", rows);
        console.log("3. Cantidad de filas:", rows.length);


        // Si las credenciales son válidas, entonces se generará un token JWT
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