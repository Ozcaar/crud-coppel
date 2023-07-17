-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-07-2023 a las 13:59:53
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `abcc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

DROP TABLE IF EXISTS `articulo`;
CREATE TABLE IF NOT EXISTS `articulo` (
  `id_articulo` int NOT NULL AUTO_INCREMENT,
  `sku` int NOT NULL,
  `nombre` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `marca` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `modelo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `departamento` int NOT NULL,
  `clase` int NOT NULL,
  `familia` int NOT NULL,
  `fecha_alta` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `stock` int NOT NULL,
  `cantidad` int NOT NULL,
  `descontinuado` tinyint(1) NOT NULL,
  `fecha_baja` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_articulo`)
) ENGINE=MyISAM AUTO_INCREMENT=1344 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `articulo`
--

INSERT INTO `articulo` (`id_articulo`, `sku`, `nombre`, `marca`, `modelo`, `departamento`, `clase`, `familia`, `fecha_alta`, `stock`, `cantidad`, `descontinuado`, `fecha_baja`) VALUES
(1305, 123456, '324', '23', 'Bi', 3, 1, 2, '2023-07-15', 123, 21, 1, '1900-10-10'),
(2, 654321, 'Colchon', 'Spring Air', 'Super Confortable', 2, 1, 1, '2023-07-12', 7, 11, 0, '1900-01-01'),
(1291, 123, '23', '21', '2', 2, 1, 3, '2023-07-14', 12, 2, 0, '1900-10-10'),
(1292, 1235, 'Wasabi', 'HP', '1', 2, 1, 2, '2023-07-14', 112, 2, 0, '1900-10-10'),
(1293, 312, 'das', 'ads', 'dsa', 2, 2, 3, '2023-07-14', 12, 2, 0, '1900-10-10'),
(1295, 44444, 'Laptop', 'HP', 'Air 1', 2, 1, 3, '2023-07-14', 21, 2, 1, '1900-10-10'),
(1296, 777, 'Wasabi', 'HP', 'asd', 2, 1, 2, '2023-07-15', 122, 2, 1, '1900-10-10'),
(1297, 321, 'Wasabi', 'HP21', '12', 2, 1, 3, '2023-07-15', 21, 2, 1, '1900-10-10'),
(1298, 3432, 'Manzana', 'Wasa', 'asd', 1, 3, 4, '2023-07-15', 235, 233, 1, '1900-10-10'),
(1299, 41242, 'Wasabi', 'HEB', 'F&F', 3, 1, 2, '2023-07-15', 234, 32, 1, '1900-10-10'),
(1300, 23, '32', 'rew', 'adsa', 2, 1, 3, '2023-07-15', 1324324, 22324, 1, '1900-10-10'),
(1338, 12, 'Manzana', 'HEBADASDQWDADa', 'F&F', 1, 2, 2, '2023-07-14', 10, 5, 0, '1900-01-01'),
(1302, 999, 'Audífonos', 'Sony', 'W500', 2, 1, 3, '2023-07-15', 23, 3, 1, '1900-10-10'),
(1303, 987, 'Libro', 'Marca De Libros', 'Pinochio', 1, 1, 1, '2023-07-15', 2, 2, 0, '1900-10-10'),
(1304, 125, 'Wasabi', 'HP', 'Air 1', 1, 1, 1, '2023-07-15', 24, 4, 1, '1900-10-10'),
(1306, 4124, 'Caiman', 'Lacoste', '01', 1, 1, 1, '2023-07-15', 10, 2, 1, '1900-10-10'),
(1307, 4324, 'Langosta', 'Langoste', '02', 1, 1, 1, '2023-07-15', 123, 22, 1, '1900-01-01'),
(1308, 124, 'Articulo', 'Marca', 'Modelo', 1, 1, 1, '2023-07-15', 10, 1, 1, '1900-01-01'),
(1309, 114, 'ASD', 'DMA', 'ASFL', 1, 1, 1, '2023-07-15', 21, 12, 0, '1900-01-01'),
(1310, 3125, 'lñ', 'm', 'lm', 1, 1, 1, '2023-07-15', 132, 32, 1, '0'),
(1311, 1252, 'lk', 'mñl', 'lmlñ', 1, 1, 1, '2023-07-15', 213, 23, 1, '0'),
(1312, 123123, 'wqeqwe', 'wqe', 'nknk', 1, 1, 1, '2023-07-15', 112, 21, 1, '0'),
(1313, 129, 'mn', 'kn', 'knl', 1, 1, 1, '2023-07-15', 21, 2, 1, '1900-01-01'),
(1314, 1255, 'i', 'kkl', 'jk', 1, 1, 1, '2023-07-15', 4, 2, 1, '1900-01-01'),
(1315, 3213, 'lñm', 'mñlm', 'ñlm', 1, 1, 1, '2023-07-15', 1123, 312, 1, '2023-07-15'),
(1316, 125235, 'mklm', 'kl', 'mklm', 1, 1, 1, '2023-07-15', 12, 3, 1, '2023-07-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

DROP TABLE IF EXISTS `clases`;
CREATE TABLE IF NOT EXISTS `clases` (
  `id_clase` int NOT NULL AUTO_INCREMENT,
  `num_clase` int DEFAULT NULL,
  `nombre_clase` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `id_dep` int DEFAULT NULL,
  PRIMARY KEY (`id_clase`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id_clase`, `num_clase`, `nombre_clase`, `id_dep`) VALUES
(1, 1, 'COMESTIBLES', 1),
(2, 2, 'LICUADORAS', 1),
(3, 3, 'BATIDORAS', 1),
(4, 4, 'CAFETERAS', 1),
(5, 1, 'AMPLIFICADORES CAR AUDIO', 2),
(6, 2, 'AUTO STEREOS', 2),
(7, 1, 'COLCHON', 3),
(8, 2, 'JUEGO BOX', 3),
(9, 1, 'SALAS', 4),
(10, 2, 'COMPLEMENTOS PARA SALA', 4),
(11, 3, 'SOFAS CAMA', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
CREATE TABLE IF NOT EXISTS `departamentos` (
  `id_dep` int NOT NULL,
  `nombre_departamento` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_dep`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id_dep`, `nombre_departamento`) VALUES
(1, 'DOMESTICOS'),
(2, 'ELECTRONICA'),
(3, 'MUEBLE SUELTO'),
(4, 'SALAS, RECAMARAS, COMEDORES');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familias`
--

DROP TABLE IF EXISTS `familias`;
CREATE TABLE IF NOT EXISTS `familias` (
  `id_familia` int NOT NULL,
  `num_familia` int NOT NULL,
  `nombre_familia` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `num_clase` int DEFAULT NULL,
  `id_dep` int NOT NULL,
  PRIMARY KEY (`id_familia`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `familias`
--

INSERT INTO `familias` (`id_familia`, `num_familia`, `nombre_familia`, `num_clase`, `id_dep`) VALUES
(24, 9, 'PAQUETE CON CD', 2, 2),
(23, 8, 'PAQUETE SIN MECANISMO', 2, 2),
(22, 7, 'MULTIMEDIA', 2, 2),
(21, 6, 'CON CD', 2, 2),
(20, 5, 'SIN MECANISMO', 2, 2),
(19, 4, 'ALARMA AUTO/CASA/OFICINA', 2, 2),
(18, 3, 'AMPLIFICADOR', 2, 2),
(17, 2, 'ACCESORIOS CAR AUDIO', 2, 2),
(16, 1, 'AUTOESTEREO CD/BO', 2, 2),
(15, 3, 'AMPLIFICADORES COPPEL', 1, 2),
(14, 2, 'KIT DE INSTALACION', 1, 2),
(13, 1, 'AMPLIFICADOR/RECEPTOR', 1, 2),
(12, 2, 'PERCOLADORAS', 4, 1),
(11, 1, 'CAFETERAS', 4, 1),
(10, 7, 'EXCLUSIVOS COPPEL CO', 3, 1),
(9, 6, 'MULTIPRACTICOS', 3, 1),
(8, 5, 'BATIDORA FUENTE DE SO', 3, 1),
(7, 4, 'BATIDORA PEDESTAL', 3, 1),
(6, 3, 'PICADORA', 3, 1),
(5, 2, 'PROCESADOR', 3, 1),
(4, 1, 'BATIDORA MANUAL', 3, 1),
(3, 2, 'EXCLUSIVO COPPEL COM', 2, 1),
(2, 1, 'LICUADORAS', 2, 1),
(1, 1, 'SIN NOMBRE', 1, 1),
(25, 1, 'PILLOW TOP KS', 1, 3),
(26, 2, 'PILLOW TOP DOBLE KS', 1, 3),
(27, 3, 'HULE ESPUMA KS', 1, 3),
(28, 1, 'ESTANDAR INDIVIDUAL', 2, 3),
(29, 2, 'PILLOW TOP INDIVIDUAL', 2, 3),
(30, 3, 'PILLOW TOP DOBLE INDIVIDUAL', 2, 3),
(31, 1, 'ESQUINERAS SUPERIORES', 1, 4),
(32, 2, 'TIPO L SECCIONAL', 1, 4),
(33, 1, 'SILLON OCASIONAL', 2, 4),
(34, 2, 'PUFF', 2, 4),
(35, 3, 'BAUL', 2, 4),
(36, 4, 'TABURETE', 2, 4),
(37, 1, 'SOFA CAMA TAPIZADO', 3, 4),
(38, 2, 'SOFA CAMA CLASICO', 3, 4),
(39, 3, 'ESTUDIO', 3, 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
