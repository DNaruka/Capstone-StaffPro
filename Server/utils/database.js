import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'staffpro'
});

conn.connect(function(err) {
    if(err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Connected to the database!");
    }
});

export default conn;
