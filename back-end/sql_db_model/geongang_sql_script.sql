-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema geongang
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema geongang
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `geongang` ;
USE `geongang` ;

-- -----------------------------------------------------
-- Table `geongang`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`brand` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`product` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `price` VARCHAR(10) NULL,
  `rating` FLOAT NULL DEFAULT 0,
  `num_of_reviews` INT NULL DEFAULT 0,
  `ingredients` TEXT NULL,
  `tag` VARCHAR(255) NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `brand_id` INT UNSIGNED NOT NULL,
  `img_src` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_category_id_idx` (`category_id` ASC),
  INDEX `fk_brand_id_idx` (`brand_id` ASC),
  CONSTRAINT `fk_product_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `geongang`.`category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_brand_id`
    FOREIGN KEY (`brand_id`)
    REFERENCES `geongang`.`brand` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`user_credential`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`user_credential` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`review` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `rating` FLOAT NULL DEFAULT 0,
  `num_of_likes` INT NULL DEFAULT 0,
  `product_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_id_idx` (`product_id` ASC),
  INDEX `fk_review_user_id_idx` (`user_id` ASC),
  CONSTRAINT `fk_review_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `geongang`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_review_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`user_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`user_info` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(15) NOT NULL,
  `age` INT NOT NULL,
  `skin_color` VARCHAR(45) NOT NULL,
  `skin_type` VARCHAR(45) NOT NULL,
  `climate` VARCHAR(3) NOT NULL,
  `skin_condition` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_info_user_id_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_info_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`record`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`record` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `overall_score` FLOAT NOT NULL,
  `tag` VARCHAR(20) NOT NULL,
  `moisture` FLOAT NOT NULL,
  `dirt` FLOAT NOT NULL,
  `uv` FLOAT NOT NULL,
  `pigmentation` FLOAT NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `recommended_text` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_record_user_id_idx` (`user_id` ASC),
  CONSTRAINT `fk_record_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`friend`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`friend` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user1_id` INT UNSIGNED NOT NULL,
  `user2_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_friend_user1_id_idx` (`user1_id` ASC),
  INDEX `fk_friend_user2_id_idx` (`user2_id` ASC),
  CONSTRAINT `fk_friend_user1_id`
    FOREIGN KEY (`user1_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_friend_user2_id`
    FOREIGN KEY (`user2_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`product_added`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`product_added` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_id_idx` (`product_id` ASC),
  INDEX `fk_product_added_user_id_idx` (`user_id` ASC),
  CONSTRAINT `fk_product_added_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_added_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `geongang`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geongang`.`product_recommended`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geongang`.`product_recommended` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_id_idx` (`product_id` ASC),
  INDEX `fk_product_recommended_user_id_idx` (`user_id` ASC),
  CONSTRAINT `fk_product_recommended_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `geongang`.`user_credential` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_recommended_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `geongang`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
