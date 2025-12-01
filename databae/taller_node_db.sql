-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2025 a las 01:53:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taller_node_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellidos`, `telefono`, `email`, `direccion`) VALUES
(1, 'Ana', 'García López', '5512345678', 'ana.garcia@nodetaller.com', 'Calle Mayor 123, Ciudad de México'),
(2, 'Luis', 'Martínez Pérez', '5523456789', 'luis.martinez@nodetaller.com', 'Avenida Central 45, Guadalajara'),
(3, 'Sofía', 'Rodríguez Sánchez', '5534567890', 'sofia.rodriguez@nodetaller.com', 'Paseo de la Reforma 78, Monterrey'),
(4, 'Javier', 'Hernández Torres', '5545678901', 'javier.hernandez@nodetaller.com', 'Bosques de la Luna 1, Puebla'),
(5, 'Valeria', 'Díaz Castro', '5556789012', 'valeria.diaz@nodetaller.com', 'Vía Láctea 9, Cancún'),
(6, 'Ricardo', 'Jiménez Ruiz', '5567890123', 'ricardo.jimenez@nodetaller.com', 'Alameda 10, Querétaro'),
(7, 'Mariana', 'Vargas Silva', '5578901234', 'mariana.vargas@nodetaller.com', 'Río Bravo 22, Tijuana'),
(8, 'Pablo', 'Mendoza Soto', '5589012345', 'pablo.mendoza@nodetaller.com', 'Sierra Nevada 33, León'),
(9, 'Elena', 'Nuñez Morales', '5590123456', 'elena.nunez@nodetaller.com', 'Océano Pacífico 44, Mérida'),
(10, 'Fernando', 'Ramos Cruz', '5501234567', 'fernando.ramos@nodetaller.com', 'Montaña Alta 55, Aguascalientes'),
(11, 'Gabriela', 'Flores Herrera', '5511223344', 'gabriela.flores@nodetaller.com', 'Flor del Campo 66, Zacatecas'),
(12, 'Héctor', 'Guerrero Ortiz', '5522334455', 'hector.guerrero@nodetaller.com', 'Sol Naciente 77, San Luis Potosí'),
(13, 'Isabel', 'Peña Vázquez', '5533445566', 'isabel.pena@nodetaller.com', 'Estrella Polar 88, Hermosillo'),
(14, 'Carlos', 'Salgado Luna', '5544556677', 'carlos.salgado@nodetaller.com', 'Camino Real 99, Morelia'),
(15, 'Laura Bailey', 'Reyes Bravo', '5555667788', 'laura.reyes@nodetaller.com', 'Prado Verde 101, Chihuahua'),
(16, 'Miguel', 'Aguilar Soto', '5566778899', 'miguel.aguilar@nodetaller.com', 'Puente Viejo 110, Veracruz'),
(17, 'Andrea', 'Chávez Vidal', '5577889900', 'andrea.chavez@nodetaller.com', 'Tierra Nueva 121, Toluca'),
(18, 'Daniel', 'Herrera Montes', '5588990011', 'daniel.herrera@nodetaller.com', 'Vuelo del Águila 132, Pachuca'),
(19, 'Fabiola', 'Lozano Vega', '5599001122', 'fabiola.lozano@nodetaller.com', 'Calle del Oro 143, Cuernavaca'),
(20, 'Jorge', 'Santos Lima', '5500112233', 'jorge.santos@nodetaller.com', 'Avenida Sur 154, Oaxaca'),
(22, 'Gabriel Martín ', 'Campos Aguilar', '4181599377', 'gcampos30@ubcai.com', 'Ibicdsvbyidsbionv\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`) VALUES
(1, 'admin', '12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
