DROP DATABASE IF EXISTS forum;

CREATE DATABASE forum
    WITH 
    OWNER = postgres
    TEMPLATE = postgres
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
DROP USER IF EXISTS postgres;

CREATE USER postgres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON forum TO postgres;