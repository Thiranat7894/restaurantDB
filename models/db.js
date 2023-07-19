const mysql = require('mysql');
const dbconfig = require("../config/db.config");
const dbConfig = require('../config/db.config');
const { error } = require('console');

//Create a connection to the database server
const connection = mysql.createConnection(
    {
     host: dbConfig.HOST,
     user: dbConfig.USER,
     password: dbConfig.PASSWORD,
     database: dbConfig.DB
    }
);

//open mysql connection
connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("Succesfully connected to the database....");
    }
);

module.exports = connection;