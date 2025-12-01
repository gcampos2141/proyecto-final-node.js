// 1. DEPENDENCIAS CLAVE
require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const cors = require("./src/middleware/cors");

// 2. CONFIGURACIÓN INICIAL
const app = express();
const PORT = process.env.PORT || 3000;

// 3. IMPORTACIÓN DE RUTAS Y MIDDLEWARES
const authJWT = require('./src/middleware/auth'); // Middleware de verificación de token
const notFound = require("./src/middleware/notFound"); // Manejo de errores 404

// Rutas sin seguridad (solo necesitan login)
const authRoutes = require("./src/routes/user"); // Ruta para /login

// Rutas con seguridad (requieren token)
const empleadoRoutes = require("./src/controllers/controlEmpleado"); // Ruta CRUD de Empleados

// 4. MIDDLEWARES GLOBALES
app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// 5. RUTAS DE LA APLICACIÓN

// RUTA PÚBLICA (No requiere token)
app.use("/node", authRoutes); 

// RUTA SEGURA (Requiere token)
app.use(authJWT);
app.use("/node/empleados", empleadoRoutes);

// 6. MANEJO DE ERRORES (Debe ir al final)
app.use(notFound);


// 7. INICIO DEL SERVIDOR
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});