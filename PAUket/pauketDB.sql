CREATE DATABASE pauketDB;
USE pauketDB;
/* Table to store user data */
CREATE TABLE Users 
(
	userID INT,
    userFname VARCHAR(50),
    userLname VARCHAR(50),
    userEmail VARCHAR(50),
    Occupation VARCHAR(8), /* (Student/Faculty/Security) */
    safety_level INT
);
/* Table to store location data */
CREATE TABLE Location
(
    Latitude FLOAT,
    Longitude FLOAT,
    Altitude FLOAT,
    created_at DATETIME,
    userID INT
);
