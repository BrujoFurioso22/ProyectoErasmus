-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: baseerasmus
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `idadministrador` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `tipodeusuario` varchar(3) NOT NULL DEFAULT 'ADM',
  PRIMARY KEY (`idadministrador`),
  KEY `FK_idadm_idusu_idx` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'admin@gmail.com','123','admin','ADM');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignados`
--

DROP TABLE IF EXISTS `asignados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignados` (
  `idasignados` int NOT NULL AUTO_INCREMENT,
  `iddeestudiante` int NOT NULL,
  `iddeprofesor` int NOT NULL,
  PRIMARY KEY (`idasignados`),
  KEY `fk_ide_idu_idx` (`iddeestudiante`),
  KEY `fk_idp_idu_idx` (`iddeprofesor`),
  CONSTRAINT `fk_ide_idu` FOREIGN KEY (`iddeestudiante`) REFERENCES `estudiantes` (`idestudiantes`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_idp_idu` FOREIGN KEY (`iddeprofesor`) REFERENCES `profesores` (`idprofesores`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignados`
--

LOCK TABLES `asignados` WRITE;
/*!40000 ALTER TABLE `asignados` DISABLE KEYS */;
INSERT INTO `asignados` VALUES (12,1,1),(15,3,1);
/*!40000 ALTER TABLE `asignados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiantes` (
  `idestudiantes` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `institucion` varchar(45) NOT NULL,
  `sexo` varchar(1) NOT NULL DEFAULT 'M',
  `tipodeusuario` varchar(3) NOT NULL DEFAULT 'EST',
  PRIMARY KEY (`idestudiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` VALUES (1,'Pedro Figueroa','pedro@gmail.com','1234','UDA','M','EST'),(2,'Sthefany Peñafiel','tefy@gmail.com','1234','UDA','M','EST'),(3,'Diego Barbecho','diego@gmail.com','1234','UDA','M','EST');
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `idimagenes` int NOT NULL AUTO_INCREMENT,
  `nombreimagen` varchar(100) NOT NULL,
  `rutaimagen` varchar(200) NOT NULL,
  `grupoimagen` int NOT NULL DEFAULT '1',
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`idimagenes`),
  UNIQUE KEY `nombreimagen_UNIQUE` (`nombreimagen`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'LEON','CLEON',2,1),(2,'OSO','COSO',2,1),(3,'VACA','CMUUU',2,1),(4,'MONO','CMONO',2,1),(5,'LOBO','CLOBO',2,1),(6,'TIGRE','CTIGRE',2,1),(7,'ARRIBA','ARRIBA',1,1),(8,'DERECHA','DERECHA',1,1),(9,'ABAJO','ABAJO',1,1),(10,'IZQUIERDA','IZQUIERDA',1,1),(11,'TAREA1','TAREA1',3,1),(12,'GLOBOVERDE','GLOBOVERDE',4,1),(13,'GLOBOROJO','GLOBOROJO',4,1),(14,'GLOBOAZUL','GLOBOAZUL',4,1),(19,'prueba','../imagenesJuegos/arrow-derecha.svg',1,0),(22,'IZQUIERDA1','../imagenesJuegos/arrow-izquierda.svg',3,1),(23,'porueba','../imagenesJuegos/arrow-izquierda.svg',1,0),(25,'Nose','../imagenesJuegos/arrow-down.svg',1,1),(26,'Nose1','../imagenesJuegos/arrow-derecha.svg',1,1);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego1`
--

DROP TABLE IF EXISTS `juego1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juego1` (
  `idjuego1` int NOT NULL AUTO_INCREMENT,
  `img1` int DEFAULT NULL,
  `img2` int DEFAULT NULL,
  `img3` int DEFAULT NULL,
  `img4` int DEFAULT NULL,
  `numRondas` int NOT NULL DEFAULT '5',
  `idprofesor` int NOT NULL,
  PRIMARY KEY (`idjuego1`),
  KEY `FK_j1i1_img_idx` (`img1`),
  KEY `FK_j1i2_img_idx` (`img2`),
  KEY `FK_j1i3_img_idx` (`img3`),
  KEY `FK_j1i4_img_idx` (`img4`),
  KEY `fk_profesor_config_idx` (`idprofesor`),
  CONSTRAINT `fk_1` FOREIGN KEY (`img1`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_2` FOREIGN KEY (`img2`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_3` FOREIGN KEY (`img3`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_4` FOREIGN KEY (`img4`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_profesor_config` FOREIGN KEY (`idprofesor`) REFERENCES `profesores` (`idprofesores`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego1`
--

LOCK TABLES `juego1` WRITE;
/*!40000 ALTER TABLE `juego1` DISABLE KEYS */;
INSERT INTO `juego1` VALUES (1,7,8,8,7,15,1);
/*!40000 ALTER TABLE `juego1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego2`
--

DROP TABLE IF EXISTS `juego2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juego2` (
  `idjuego2` int NOT NULL AUTO_INCREMENT,
  `img1` int DEFAULT NULL,
  `img2` int DEFAULT NULL,
  `img3` int DEFAULT NULL,
  `img4` int DEFAULT NULL,
  `img5` int DEFAULT NULL,
  `img6` int DEFAULT NULL,
  `img7` int DEFAULT NULL,
  `img8` int DEFAULT NULL,
  `img9` int DEFAULT NULL,
  `idprofesor` int NOT NULL,
  `numCartas` int DEFAULT '3',
  PRIMARY KEY (`idjuego2`),
  KEY `FK_j2i1_img_idx` (`img1`),
  KEY `FK_j2i2_img_idx` (`img2`),
  KEY `FK_j2i4_img_idx` (`img4`),
  KEY `FK_j2i3_img_idx` (`img3`),
  KEY `FK_j2i5_img_idx` (`img5`),
  KEY `FK_j2i6_img_idx` (`img6`),
  KEY `FK_j2i7_img_idx` (`img7`),
  KEY `FK_j2i8_img_idx` (`img8`),
  KEY `FK_j2i9_img_idx` (`img9`),
  KEY `FK_profesor_config2_idx` (`idprofesor`),
  CONSTRAINT `FK_j2i1_img` FOREIGN KEY (`img1`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i2_img` FOREIGN KEY (`img2`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i3_img` FOREIGN KEY (`img3`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i4_img` FOREIGN KEY (`img4`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i5_img` FOREIGN KEY (`img5`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i6_img` FOREIGN KEY (`img6`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i7_img` FOREIGN KEY (`img7`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i8_img` FOREIGN KEY (`img8`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j2i9_img` FOREIGN KEY (`img9`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_profesor_p` FOREIGN KEY (`idprofesor`) REFERENCES `profesores` (`idprofesores`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego2`
--

LOCK TABLES `juego2` WRITE;
/*!40000 ALTER TABLE `juego2` DISABLE KEYS */;
INSERT INTO `juego2` VALUES (1,1,2,3,4,5,6,1,2,3,1,3);
/*!40000 ALTER TABLE `juego2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego3`
--

DROP TABLE IF EXISTS `juego3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juego3` (
  `idjuego3` int NOT NULL AUTO_INCREMENT,
  `img1` int DEFAULT NULL,
  `idprofesor` int NOT NULL,
  PRIMARY KEY (`idjuego3`),
  KEY `FK_j3i1_img_idx` (`img1`),
  KEY `FK_profesor_config3_idx` (`idprofesor`),
  CONSTRAINT `FK_j3i1_img` FOREIGN KEY (`img1`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_profesor_config3` FOREIGN KEY (`idprofesor`) REFERENCES `profesores` (`idprofesores`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego3`
--

LOCK TABLES `juego3` WRITE;
/*!40000 ALTER TABLE `juego3` DISABLE KEYS */;
INSERT INTO `juego3` VALUES (1,1,1);
/*!40000 ALTER TABLE `juego3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego4`
--

DROP TABLE IF EXISTS `juego4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juego4` (
  `idjuego4` int NOT NULL AUTO_INCREMENT,
  `img1` int DEFAULT NULL,
  `img2` int DEFAULT NULL,
  `img3` int DEFAULT NULL,
  `velocidad` int NOT NULL DEFAULT '1',
  `idcorrecto` int DEFAULT NULL,
  `idprofesor` int NOT NULL,
  PRIMARY KEY (`idjuego4`),
  KEY `FK_j4i1_img_idx` (`img1`),
  KEY `FK_j4i2_img_idx` (`img2`),
  KEY `FK_j4i3_img_idx` (`img3`),
  KEY `FK_profesor_config_idx` (`idprofesor`),
  KEY `FK_img_correcto_idx` (`idcorrecto`),
  CONSTRAINT `FK_img_correcto` FOREIGN KEY (`idcorrecto`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j4i1_img` FOREIGN KEY (`img1`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j4i2_img` FOREIGN KEY (`img2`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_j4i3_img` FOREIGN KEY (`img3`) REFERENCES `imagenes` (`idimagenes`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_profesor_config4` FOREIGN KEY (`idprofesor`) REFERENCES `profesores` (`idprofesores`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego4`
--

LOCK TABLES `juego4` WRITE;
/*!40000 ALTER TABLE `juego4` DISABLE KEYS */;
INSERT INTO `juego4` VALUES (1,1,2,3,1,5,1);
/*!40000 ALTER TABLE `juego4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugada`
--

DROP TABLE IF EXISTS `jugada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugada` (
  `idjugada` int NOT NULL AUTO_INCREMENT,
  `idestudiante` int NOT NULL,
  `juego` varchar(6) NOT NULL,
  `fecha_jugada` varchar(10) NOT NULL,
  `calificacion` int NOT NULL,
  PRIMARY KEY (`idjugada`),
  KEY `FK_est_est_idx` (`idestudiante`),
  CONSTRAINT `FK_est_est` FOREIGN KEY (`idestudiante`) REFERENCES `estudiantes` (`idestudiantes`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugada`
--

LOCK TABLES `jugada` WRITE;
/*!40000 ALTER TABLE `jugada` DISABLE KEYS */;
INSERT INTO `jugada` VALUES (1,1,'juego1','10-01-2024',3),(2,1,'juego1','11-01-2024',1),(107,1,'juego2','13-01-2024',1),(136,1,'juego2','13-01-2024',1),(137,1,'juego2','13-01-2024',0),(138,3,'juego2','13-01-2024',1),(164,3,'juego1','14-01-2024',2),(165,3,'juego1','14-01-2024',0),(166,3,'juego1','14-01-2024',3);
/*!40000 ALTER TABLE `jugada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesores` (
  `idprofesores` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `institucion` varchar(45) NOT NULL,
  `sexo` varchar(1) NOT NULL DEFAULT 'M',
  `tipodeusuario` varchar(2) NOT NULL DEFAULT 'PR',
  PRIMARY KEY (`idprofesores`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
INSERT INTO `profesores` VALUES (1,'Elisa Ampuero','eli@gmail.com','1234','UDA','F','PR');
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-14 22:21:46
