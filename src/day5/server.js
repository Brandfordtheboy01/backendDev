import express from "express";
import { getAllTasks } from "./taskService.js";

const app = express();

app.use(express.json());

app.get("/tasks", async (req, res) => {
    const tasks = await getAllTasks();
    res.json(tasks);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});