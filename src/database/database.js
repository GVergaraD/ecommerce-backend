import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    port: config.port,
    user: config.user,
    password: config.passwords
});

const getConnection =() => {
    return connection;
}

module.exports = {
    getConnection
}