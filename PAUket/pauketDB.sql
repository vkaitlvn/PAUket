CREATE DATABASE pauketDB;
USE pauketDB;
CREATE TABLE Student 
(
	studentID INT,
    studentFname VARCHAR(50),
    studentLname VARCHAR(50),
    studentEmail VARCHAR(50)
);
CREATE TABLE Faculty 
(
	facultyID INT,
    facultyFname VARCHAR(50),
    facultyLname VARCHAR(50),
    facultyEmail VARCHAR(50)
);
CREATE TABLE Cops 
(
	CopsID INT,
    CopsFname VARCHAR(50),
    CopsLname VARCHAR(50),
    CopsEmail VARCHAR(50)
);
CREATE TABLE Location
(
	Latitude FLOAT,
    Longitude FLOAT,
    Altitude FLOAT
);
