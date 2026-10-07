import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "task_manager_day4",
    password: "postgres",
    port: 5432
});

export default pool;