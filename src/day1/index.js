import {
    addTask,
    findTaskById,
    filterByStatus,
    updateTask,
    deleteTask,
    getTaskSummary
} from "./taskService.js";
console.log("prints, id 1 object");

console.log(findTaskById(1));
console.log("prints tasks with pendsing");


console.log(filterByStatus("pending"));
console.log("Updates task of id 1 to completed");


console.log(updateTask(1, { status: "completed" }));
console.log("Deletes tasks 8");


console.log(deleteTask(8));
console.log("SUmmarizes everything ");


console.log(getTaskSummary());

