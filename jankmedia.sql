CREATE SCHEMA IF NOT EXISTS `jankmedia`;
USE `jankmedia`;

CREATE TABLE IF NOT EXISTS jankmedia.`usuarios`(
	
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `datebirth` VARCHAR(100) NOT NULL,
    `user` VARCHAR(100) NOT NULL,    
    `password` VARCHAR(100) NOT NULL,
    `sex` VARCHAR(100) NOT NULL,
    
    PRIMARY KEY(`id`)
);
CREATE TABLE IF NOT EXISTS jankmedia.`amistades`(
	
    `idAmigo1` VARCHAR(100) NOT NULL,
    `idAmigo2` VARCHAR(100) NOT NULL,
    
    PRIMARY KEY(`idAmigo1`,`idAmigo2`)
);
CREATE TABLE IF NOT EXISTS jankmedia.`solicitudes`(
	
    `idSolicitud` VARCHAR(100) NOT NULL,
    `idEmisor` INTEGER NOT NULL,    
    `idReceptor` INTEGER NOT NULL,
    `estado` BOOLEAN NOT NULL,
    
    PRIMARY KEY(`idSolicitud`)
);
