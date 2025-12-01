# Sistema de Gestión – Taller de Node.js

Este proyecto es una aplicación web completa para la administración de empleados (altas, bajas, modificaciones y consultas), desarrollada como proyecto final para el **Taller Especializado de Node.js**.

Cuenta con un **backend robusto en Node.js/Express** protegido mediante **JWT**, y un **frontend moderno y responsivo** con HTML, Tailwind CSS y JavaScript Vanilla.

---

## Despliegue en Producción

El proyecto está desplegado y funcionando en el siguiente enlace:

**[Ver Aplicación en Render](https://proyecto-final-node-js-v480.onrender.com)**  


**Registro desde Render**
- **Usuario** - admin
- **Contraseña** - 12345

> **Nota:**  
> El backend está alojado en **Render** y la base de datos en **Clever Cloud**.  
> El primer inicio puede tardar unos segundos mientras el servidor “despierta”.

---

## Tecnologías Utilizadas

### **Backend**
- Node.js
- Express.js
- MySQL (mysql2)
- JWT (JSON Web Tokens)
- Bcrypt (opcional si implementaste hash)
- Dotenv
- Morgan
- CORS

### **Frontend**
- HTML5
- Tailwind CSS
- JavaScript Vanilla

### **Infraestructura**
- Render (Backend)
- Clever Cloud (Base de Datos)

---

## Endpoints de la API

A continuación se presentan los endpoints principales del sistema:

| Método | Endpoint                             | Descripción                       | Auth Requerida |
|--------|----------------------------------------|-----------------------------------|-----------------|
| POST   | `/node/login`                          | Iniciar sesión y obtener Token    | ❌ No           |
| GET    | `/node/empleados/obtenerEmpleados`     | Listar todos los empleados        | ✅ Sí           |
| POST   | `/node/empleados/agregarEmpleado`      | Registrar nuevo empleado          | ✅ Sí           |
| PUT    | `/node/empleados/actualizarEmpleado`   | Modificar datos de empleado       | ✅ Sí           |
| DELETE | `/node/empleados/eliminarEmpleado`     | Eliminar un empleado              | ✅ Sí           |

---

## Instalación y Ejecución Local

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
