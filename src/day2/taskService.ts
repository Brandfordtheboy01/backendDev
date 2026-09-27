import { Task } from "./types";
import { tasks } from "./data";

function addTask(task: Task): Task{
    tasks.push(task)
    return task;
}

function findTaskById(id: number): Task | undefined{
    return tasks.find(task => task.id === id)
}

function filterByStatus(status: "pending" | "completed" | "in-progress"): Task[]{
    return tasks.filter(task => task.status === status)
}

function updateTask(id: number, updates: Partial<Task>): Task | null{
    const task = findTaskById(id)

    if(!task){return null}

    Object.assign(task, updates);

    return task;
}
function deleteTask(id: number): Task | null{
    const index = tasks.findIndex(task => task.id === id);

    if(index === -1){
        return null
    }

    return tasks.splice(index, 1)[0];
}

function getTaskSummary(){
    const summary = {
        total: tasks.length,
        pending: tasks.filter(task => task.status === 'pending').length,
        completed: tasks.filter(task => task.status === "completed").length,
        inProgress: tasks.filter(task => task.status === "in-progress").length
    }

    return summary;
}


export {
  addTask,
  findTaskById,
  filterByStatus,
  updateTask,
  deleteTask,
  getTaskSummary
};
