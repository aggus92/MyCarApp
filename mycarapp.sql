CREATE DATABASE IF NOT EXISTS mycarapp;

USE mycarapp;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(200) NOT NULL,
  `lastName` VARCHAR(200) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `car` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `is_default` TINYINT(1),
  `model` VARCHAR(200) NOT NULL,
  `year` VARCHAR(10) NOT NULL,
  `color` VARCHAR(20),
  PRIMARY KEY (`id`),
  FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS `fuel_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `petrol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `car_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `total_cost` DOUBLE NOT NULL,
  `quantity` DOUBLE NOT NULL,
  `odometer` INT NOT NULL,
  `fuel_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY(car_id) REFERENCES car(id),
  FOREIGN KEY (fuel_type_id) REFERENCES fuel_type(id)
);

CREATE TABLE IF NOT EXISTS `registration` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `car_id` INT NOT NULL,
  `registration_date` DATE NOT NULL,
  `registration_odometer` INT NOT NULL,
  `plate_no` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY(car_id) REFERENCES car(id)
);

CREATE TABLE IF NOT EXISTS `costs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `car_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `type` VARCHAR(200) NOT NULL,
  `total_cost` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY(car_id) REFERENCES car(id)
);

CREATE TABLE IF NOT EXISTS `cost_type` (
  `type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`type`)
);

CREATE TABLE IF NOT EXISTS `operating_costs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `car_id` INT NOT NULL,
  `cost_type` VARCHAR(50) NOT NULL,
  `date` DATE NOT NULL,
  `odometer` INT NOT NULL,
  `description` VARCHAR(200),
  PRIMARY KEY (`id`),
  FOREIGN KEY(car_id) REFERENCES car(id),
  FOREIGN KEY (cost_type) REFERENCES cost_type(type)
);
