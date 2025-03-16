const pool = require("./pool")

const createTable = async()=>{
    await pool.query(`
        CREATE TABLE IF NOT EXISTS messages (
            message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            message VARCHAR (255),
            name VARCHAR (255),
            time VARCHAR (255)
        )
    `);
    console.log("Message table created")
}

createTable();

const logMessage = async(name, message)=>{
    const time = new Date();
    await pool.query(`
        INSERT INTO messages (message,name,time)
        VALUES ($1,$2,$3)
    `,[message,name,time]);
    console.log("new message logged")
}

const getAllMessages = async()=>{
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
}

module.exports = {
    logMessage,
    getAllMessages
}