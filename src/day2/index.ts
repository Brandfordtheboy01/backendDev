import {
    addTask,
    findTaskById,
    filterByStatus,
    updateTask,
    deleteTask,
    getTaskSummary
} from "./taskService";

import { loadTasks } from "./asyncDemo";

console.log(findTaskById(1));

console.log(filterByStatus("pending"));

console.log(updateTask(1, { status: "completed" }));

console.log(deleteTask(8));

console.log(getTaskSummary());

addTask({
    id: 9,
    title: "Test TypeScript",
    status: "pending",
    priority: "low",
    assignee: "Henry"
});

console.log(findTaskById(9));

loadTasks();