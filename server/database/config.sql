/** within postgres shell, run these commands
/** make sure you are using postgres user, 
/** if not, reconfigure the config.js file to
/** suit your needs

/** within the database, there will be a table
/** storing saved values for your own saved page 

/*1*/
CREATE DATABASE find_my_uni;

/*2*/ 
/* \c find-my-uni; */
/*3*/
CREATE TABLE saved_university_data(
    uni_id INTEGER NOT NULL UNIQUE,
    name VARCHAR(200),
    location VARCHAR(200),
    students INTEGER NOT NULL,
    undergrads INTEGER NOT NULL,
    postgrads INTEGER NOT NULL
);