import pool from "./db.js";

export async function getAllTasks() {
    const result = await pool.query("SELECT * FROM tasks");
    return result.rows;
}