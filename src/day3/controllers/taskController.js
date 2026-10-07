import { getTasks, getTaskById, createTask, updateTask, deleteTask } from "../services/taskService.js";
function listTasks(req, res) {
    res.status(200).json(getTasks());
}
function getOneTask(req, res) {
    const id = Number(req.params.id);
    const task = getTaskById(id);
    if (!task) {
        res.status(404).json({ message: "Task not found" });
        return;
    }
    res.status(200).json(task);
}
function addTask(req, res) {
    const task = createTask(req.body);
    res.status(201).json(task);
}
function editTask(req, res) {
    const id = Number(req.params.id);
    const task = updateTask(id, req.body);
    if (!task) {
        res.status(404).json({ message: "Task not found" });
        return;
    }
    res.status(200).json(task);
}
function removeTask(req, res) {
    const id = Number(req.params.id);
    const deleted = deleteTask(id);
    if (!deleted) {
        res.status(404).json({ message: "Task not found" });
        return;
    }
    res.status(204).send();
}
export { listTasks, getOneTask, addTask, editTask, removeTask };
