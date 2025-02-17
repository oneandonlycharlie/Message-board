const pool = require("./pool")

const createTable = async()=>{
    await pool(`
        CREATE TABLE IF NOT EXISTS messages (
            massage_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            massage VARCHAR (255),
            name VARCHAR (255)
        )
    `);
    console.log("Message table created")
}


const logMessage = async(name, message)=>{
    await pool.query(`
        CREATE TABLE IF NOT EXISTS messages (
            massage_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            message VARCHAR (255),
            name VARCHAR (255)
        )
    `);
    await pool.query(`
        INSERT INTO messages (message,name)
        VALUES ($1,$2)
        `,[message,name]);
    console.log("new message logged!")
}

const getAllMessages = async()=>{
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
}

module.exports = {
    logMessage,
    getAllMessages
}