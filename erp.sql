-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2024 a las 08:49:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `erp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacenes`
--

CREATE TABLE `almacenes` (
  `id` int(11) NOT NULL,
  `nombreAlmacen` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `almacenes`
--

INSERT INTO `almacenes` (`id`, `nombreAlmacen`, `direccion`, `telefono`) VALUES
(1, 'Almacén Central', 'Amazonas', '555-1234'),
(2, 'Almacén Sur', 'Diego de Almagro', '555-2345'),
(3, 'Almacén Norte', '6 de Diciembre', '555-3456'),
(4, 'Almacen Mutch', 'Av. Republica', '555-4567'),
(5, 'Almacen Dasani', 'Av. Portugal', '555-5678'),
(6, 'Almacén Notes', 'Los libertadores', '555-6789'),
(7, 'Almacen Airphones', 'Av. 24 de mayo', '555-7890'),
(8, 'Almacen Technology', 'La Biloxi', '555-8901'),
(9, 'Local Sistems', 'Av. Shyris', '555-9012'),
(10, 'Local Quitus', 'Teniente Hugo Ortiz', '555-0123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `correo`, `telefono`, `direccion`) VALUES
(1, 'Nicolhai', 'Casa', 'nicolahi.casa14@proconty.com', '0961572313', 'Calle Nueva 456'),
(2, 'Roberto', 'Fernandez', 'roberto.fernandez@example.com', '678901234', 'Avenida de los Pinos 789'),
(3, 'Isabel', 'Marin', 'isabel.marin@example.com', '789012345', 'Plaza Central 321'),
(4, 'Jorge', 'Garcia', 'jorge.garcia@example.com', '890123456', 'Ronda del Valle 213'),
(5, 'Nicolas', 'Teran', 'nicolhaic.2002@gmail.com', '0961572312', 'Pasaje de la Luna 101'),
(6, 'David', 'Martinez', 'david.martinez@example.com', '012345678', 'Bulevar del Río 404'),
(7, 'Carmen', 'López', 'carmen.lopez@example.com', '234567890', 'Avenida del Sol 606'),
(8, 'Francisco', 'Gomez', 'francisco.gomez@example.com', '345678901', 'Callejón de la Paz 505'),
(9, 'Lucia', 'Diaz', 'lucia.diaz@example.com', '456789012', 'Parque de las Flores 707'),
(10, 'Cesar', 'Casa', 'nicolahi.casa16@gmail.com', '0995554485', 'Avenida Gran Vía 808'),
(13, 'erick', 'taco', 'ericktaco68@gmail.com', '0997976641', 'fv');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contra` varchar(255) NOT NULL,
  `rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `correo`, `contra`, `rol`) VALUES
(3, 'nc.teran@itq.edu.ec', '1234', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcastecnologicas`
--

CREATE TABLE `marcastecnologicas` (
  `id` int(11) NOT NULL,
  `nombreMarca` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marcastecnologicas`
--

INSERT INTO `marcastecnologicas` (`id`, `nombreMarca`) VALUES
(1, 'Apple'),
(2, 'Samsung'),
(3, 'Google'),
(4, 'Sony'),
(5, 'LG'),
(6, 'Dell'),
(7, 'HP'),
(8, 'Microsoft'),
(9, 'Lenovo'),
(10, 'Asus'),
(11, 'Acer'),
(12, 'IBM'),
(13, 'Intel'),
(14, 'NVIDIA'),
(15, 'AMD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nomina`
--

CREATE TABLE `nomina` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `permiso` tinyint(1) DEFAULT 0,
  `status` varchar(50) DEFAULT 'Activo',
  `salario` decimal(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nomina`
--

INSERT INTO `nomina` (`id`, `nombre`, `apellido`, `permiso`, `status`, `salario`) VALUES
(1, 'Elena', 'Panchi', 1, 'Activo', 278.00),
(2, 'Hugo', 'Terán', 2, 'Inactivo', 500.00),
(3, 'Patricia', 'Panchi', 1, 'Activo', 2000.00),
(4, 'Mateo', 'Casa', 2, 'Activo', 150.00),
(5, 'Belen', 'Campos', 1, 'Inactivo', 234.00),
(6, 'Martin', 'Teran', 2, 'Activo', 432.00),
(7, 'Siomara', 'Sanguna', 1, 'Activo', 700.00),
(8, 'Dennis', 'Molina', 1, 'Inactivo', 1100.00),
(9, 'Emilia', 'Bonilla', 2, 'Activo', 100.00),
(10, 'Nicolhai', 'Casa', 1, 'Activo', 600.00),
(11, 'Sandra', 'Caza', 2, 'Activo', 467.00),
(12, 'Diego', 'Beltran', 1, 'Inactivo', 370.00),
(13, 'Diana', 'Yaguana', 2, 'Activo', 213.00),
(14, 'Angelica', 'Nicolalde', 1, 'Activo', 1016.00),
(15, 'Christian', 'Teran', 2, 'Inactivo', 1000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `descripcionProd` varchar(255) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `descripcionProd`, `marca`, `cantidad`, `precio`) VALUES
(1, 'Smartphone 128GB', 'Apple', 150, 799.99),
(2, 'Laptop 15\" Pro', 'Dell', 100, 1200.50),
(3, 'Auriculares Bluetooth', 'Sony', 200, 199.99),
(4, 'Tableta 8\" 32GB', 'Samsung', 300, 229.75),
(5, 'Smartwatch GPS', 'Garmin', 120, 249.99),
(6, 'Cámara de seguridad WiFi', 'Arlo', 90, 150.00),
(7, 'Dron con cámara 4K', 'DJI', 60, 850.25),
(8, 'Monitor LED 24\"', 'LG', 80, 149.00),
(9, 'Impresora multifuncional', 'HP', 70, 130.00),
(10, 'SSD externo 1TB', 'Western Digital', 150, 199.00),
(11, 'Router inalámbrico', 'Netgear', 85, 129.99),
(12, 'Teclado mecánico RGB', 'Corsair', 110, 99.99),
(13, 'Mouse ergonómico', 'Logitech', 200, 29.99),
(14, 'Altavoz portátil Bluetooth', 'JBL', 140, 99.00),
(15, 'Consola de videojuegos', 'Nintendo', 75, 299.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `riesgos`
--

CREATE TABLE `riesgos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `probabilidad` varchar(200) NOT NULL,
  `impacto` varchar(200) NOT NULL,
  `medidasMitigacion` varchar(200) NOT NULL,
  `estados` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `riesgos`
--

INSERT INTO `riesgos` (`id`, `descripcion`, `probabilidad`, `impacto`, `medidasMitigacion`, `estados`) VALUES
(1, 'df', 'fd', 'erde', 'fe', 'fe'),
(2, 'fbdf', 'fbgfj', 'cbfk ', 'dvefdv', 'fdvklmfm'),
(3, 'efgrio', 'dvemko', 'dvmoek', 'vdmovk', 'vdokmv ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `descripcion`) VALUES
(1, 'administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `almacenes`
--
ALTER TABLE `almacenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rol_id` (`rol`);

--
-- Indices de la tabla `marcastecnologicas`
--
ALTER TABLE `marcastecnologicas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nomina`
--
ALTER TABLE `nomina`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `riesgos`
--
ALTER TABLE `riesgos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `almacenes`
--
ALTER TABLE `almacenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `marcastecnologicas`
--
ALTER TABLE `marcastecnologicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `nomina`
--
ALTER TABLE `nomina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `riesgos`
--
ALTER TABLE `riesgos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_rol_id` FOREIGN KEY (`rol`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
