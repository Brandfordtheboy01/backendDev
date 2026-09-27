import {tasks} from './data.js'

function addTask(task){
    tasks.push(task)
    return task;
}

function findTaskById(id){
    return tasks.find(task => task.id === id)
}

function filterByStatus(status){
    return tasks.filter(task => task.status === status)
}

function updateTask(id, updates){
    const task = findTaskById(id)

    if(!task){return null}

    Object.assign(task, updates);

    return task;
}

function deleteTask(id){
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
