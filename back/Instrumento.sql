CREATE DATABASE  IF NOT EXISTS `tp_instrumentos` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tp_instrumentos`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: instrumentos
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `categoria_instrumento`
--

DROP TABLE IF EXISTS `categoria_instrumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_instrumento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_instrumento`
--

LOCK TABLES `categoria_instrumento` WRITE;
/*!40000 ALTER TABLE `categoria_instrumento` DISABLE KEYS */;
INSERT INTO `categoria_instrumento` VALUES (1,'Cuerda'),(2,'Viento'),(3,'Percusión'),(4,'Teclado'),(5,'Electrónico');
/*!40000 ALTER TABLE `categoria_instrumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrumento`
--

DROP TABLE IF EXISTS `instrumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instrumento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cantidad_vendida` int NOT NULL,
  `costo_envio` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `descripcion` varchar(1000) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `instrumento` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `marca` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `modelo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `precio` double NOT NULL,
  `id_categoria` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs3pkkr627t3dhooq3gn6ynyp7` (`id_categoria`),
  CONSTRAINT `FKs3pkkr627t3dhooq3gn6ynyp7` FOREIGN KEY (`id_categoria`) REFERENCES `categoria_instrumento` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrumento`
--

LOCK TABLES `instrumento` WRITE;
/*!40000 ALTER TABLE `instrumento` DISABLE KEYS */;
INSERT INTO `instrumento` VALUES (1,28,'G','Estas viendo una excelente mandolina de la marca Stagg, con un sonido muy dulce, tapa aros y fondo de tilo, y diapasón de palisandro. Es un instrumento acústico (no se enchufa) de cuerdas dobles (4 pares) con la caja ovalada y cóncava, y el mástil corto. Su utilización abarca variados ámbitos, desde rock, folk, country y ensambles experimentales.','nro10.jpg','Mandolina Instrumento Musical Stagg Sunburst','Stagg','M20',2450,1),(2,10,'150','1 Pandereta - 32 sonajas metálicas. Más de 8 años vendiendo con 100 % de calificaciones POSITIVAS y clientes satisfechos !!','nro9.jpg','Pandereta Pandero Instrumento Musical','DyM ventas','32 sonajas',325,3),(3,3,'250','Triangulo Musical de 24 Centímetros De Acero. ENVIOS POR CORREO O ENCOMIENDA: Se le deberán adicionar $40 en concepto de Despacho y el Costo del envío se abonará al recibir el producto en Terminal, Sucursal OCA o Domicilio','nro8.jpg','Triangulo Musical 24 Cm Percusion','LBP','24',260,3),(4,2,'G','BARCHIME CORTINA MUSICAL DE 25 BARRAS LATIN CUSTOM. Emitimos factura A y B','nro7.jpg','Bar Chimes Lp Cortina Musical 72 Barras','FM','LATIN',2250,3),(5,5,'300','Las calabazas utilizadas para nuestras artesanías son sembradas y cosechadas por nosotros, quienes seleccionamos el mejor fruto para garantizar la calidad del producto y ofrecerle algo creativo y original.','nro6.jpg','Shekeres. Instrumento. Música. Artesanía.','Azalea Artesanías','Cuentas de madera',850,3),(6,0,'2000','Buen dia! Sale a la venta este Piano Alemán Neumeyer con candelabros incluidos. Tiene una talla muy bonita en la madera. Una pieza de calidad.','nro3.jpg','Antiguo Piano Aleman Con Candelabros.','Neumeyer','Stratus',17000,4),(7,5,'G','Material: Plástico smil madera 4 Cuerdas longitud: 60cm, el mejor regalo para usted, su familia y amigos, adecuado para 3-18 años de edad','nro4.jpg','Guitarra Ukelele Infantil Grande 60cm','GUITARRA','UKELELE',500,1),(8,1375,'G','Organo Electrónico GADNIC T01. Display de Led. 54 Teclas. 100 Timbres / 100 Ritmos. 4 1/2 octavas. 8 Percusiones. 8 Canciones de muestra. Grabación y reproducción. Entrada para Micrófono. Salida de Audio (Auriculares / Amplificador). Vibrato. Sustain Incluye Atril Apoya partitura y Micrófono. Dimensiones: 84,5 x 32,5 x 11 cm','nro2.jpg','Teclado Organo Electronico Musical Instrumento 54 Teclas','GADNIC','T01',2250,5),(9,15,'300','Estas viendo un excelente y completísimo set de percusion para niños con estuche rígido, equipado con los instrumentos mas divertidos! De gran calidad y sonoridad. Ideal para jardines, escuelas primarias, musicoterapeutas o chicos que se quieran iniciar en la música de la mejor manera. Es un muy buen producto que garantiza entretenimiento en cualquier casa o reunión, ya que esta equipado para que varias personas al mismo tiempo estén tocando un instrumento.','nro1.jpg','Instrumentos De Percusión Niños Set Musical Con Estuche','KNIGHT','LB17',2700,3),(10,380,'250','DESCRIPCIÓN: DE 1 A 3 AÑOS. EL SET INCLUYE 5 TAMBORES, PALILLOS Y EL PLATILLO TAL CUAL LAS FOTOS. SONIDOS REALISTAS Y FÁCIL DE MONTAR. MEDIDAS: 40X20X46 CM','nro5.jpg','Batería Musical Infantil Juguete Niño 9 Piezas Palillos','Bateria','Infantil',850,3);
/*!40000 ALTER TABLE `instrumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrumento_pedidos_detalle`
--

DROP TABLE IF EXISTS `instrumento_pedidos_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instrumento_pedidos_detalle` (
  `instrumento_id` bigint NOT NULL,
  `pedidos_detalle_id` bigint NOT NULL,
  PRIMARY KEY (`instrumento_id`,`pedidos_detalle_id`),
  UNIQUE KEY `UK_ibn7we73cswhyw0rcnyut9hjg` (`pedidos_detalle_id`),
  CONSTRAINT `FK8xrml4p30531jg22qk074eumv` FOREIGN KEY (`pedidos_detalle_id`) REFERENCES `pedido_detalle` (`id`),
  CONSTRAINT `FKl342fgb6vwponltj3apsk9r3l` FOREIGN KEY (`instrumento_id`) REFERENCES `instrumento` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrumento_pedidos_detalle`
--

LOCK TABLES `instrumento_pedidos_detalle` WRITE;
/*!40000 ALTER TABLE `instrumento_pedidos_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `instrumento_pedidos_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date DEFAULT NULL,
  `total_pedido` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (16,'2024-05-21',2510),(18,'2024-05-21',585),(33,'2024-05-21',2250),(34,'2024-05-21',260),(35,'2024-05-21',325),(36,'2024-05-21',260),(37,'2024-05-21',260),(38,'2024-05-21',325),(39,'2024-05-21',22800),(40,'2024-05-21',2775),(41,'2024-05-21',3035),(42,'2024-05-21',585),(43,'2024-05-21',325),(44,'2024-05-21',260),(45,'2024-05-21',2450),(46,'2024-05-21',325),(47,'2024-05-21',5085),(48,'2024-05-21',260),(49,'2024-05-21',260),(50,'2024-05-21',260),(51,'2024-05-21',260),(52,'2024-05-22',2250),(53,'2024-05-22',2250),(54,'2024-05-22',585),(55,'2024-05-22',3035),(56,'2024-05-22',2250),(57,'2024-05-22',2250),(58,'2024-05-23',2250),(59,'2024-05-23',2250),(60,'2024-05-23',17500);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_detalle`
--

DROP TABLE IF EXISTS `pedido_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_detalle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `id_instrumento` bigint DEFAULT NULL,
  `id_pedido` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3jcko1p2wy63289i83wptb4f7` (`id_instrumento`),
  KEY `FKaxtxfsueb7pagpev7p4r4mbin` (`id_pedido`),
  CONSTRAINT `FK3jcko1p2wy63289i83wptb4f7` FOREIGN KEY (`id_instrumento`) REFERENCES `instrumento` (`id`),
  CONSTRAINT `FKaxtxfsueb7pagpev7p4r4mbin` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_detalle`
--

LOCK TABLES `pedido_detalle` WRITE;
/*!40000 ALTER TABLE `pedido_detalle` DISABLE KEYS */;
INSERT INTO `pedido_detalle` VALUES (23,1,4,16),(24,1,3,16),(26,1,3,18),(27,1,2,18),(50,1,4,33),(51,1,3,34),(52,1,2,35),(53,1,3,36),(54,1,3,37),(55,1,2,38),(56,1,4,39),(57,1,5,39),(58,1,6,39),(59,1,9,39),(60,1,2,40),(61,1,1,40),(62,1,3,41),(63,1,2,41),(64,1,1,41),(65,1,2,42),(66,1,3,42),(67,1,2,43),(68,1,3,44),(69,1,1,45),(70,1,2,46),(71,1,4,47),(72,1,3,47),(73,1,2,47),(74,1,8,47),(75,1,3,48),(76,1,3,49),(77,1,3,50),(78,1,3,51),(79,1,4,52),(80,1,4,53),(81,1,2,54),(82,1,3,54),(83,1,3,55),(84,1,2,55),(85,1,1,55),(86,1,4,56),(87,1,4,57),(88,1,4,58),(89,1,4,59),(90,1,6,60),(91,1,7,60);
/*!40000 ALTER TABLE `pedido_detalle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-27 21:24:39
