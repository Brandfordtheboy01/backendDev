import { Task } from "../models/task";

const tasks: Task[] = [
    {
        id: 1,
        title: "Build login page",
        status: "in-progress",
        priority: "high",
        assignee: "Henry"
    },
    {
        id: 2,
        title: "Design dashboard",
        status: "completed",
        priority: "medium",
        assignee: "Michael"
    },
    {
        id: 3,
        title: "Create database schema",
        status: "pending",
        priority: "high",
        assignee: "Sarah"
    }
];

function getTasks(): Task[] {
    return tasks;
}

function getTaskById(id: number): Task | undefined {
    return tasks.find(task => task.id === id);
}

function createTask(task: Task): Task {
    tasks.push(task);
    return task;
}

function updateTask(id: number, updates: Partial<Task>): Task | undefined {
    const task = getTaskById(id);

    if (!task) {
        return undefined;
    }

    Object.assign(task, updates);

    return task;
}

function deleteTask(id: number): boolean {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return false;
    }

    tasks.splice(index, 1);

    return true;
}

export {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};