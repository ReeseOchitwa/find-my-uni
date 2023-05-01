/** within postgres shell, run these commands
/** make sure you are using postgres user, 
/** if not, reconfigure the config.js file to
/** suit your needs

/*1*/
CREATE DATABASE find_my_uni;

/*2*/ 
/* \c find-my-uni; */

/*3*/ 
CREATE TABLE university_data(
    uni_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    location VARCHAR(200),
    students INTEGER NOT NULL,
    undergrads INTEGER NOT NULL,
    postgrads INTEGER NOT NULL
);