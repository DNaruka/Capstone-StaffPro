import mysql from 'mysql'


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ',',
    database: 'staffpro'
});

conn.connect(function(err) {
    if(err) {
        console.log("Connection error")
    } else {
        console.log("Connected")
    }
});

export default conn;