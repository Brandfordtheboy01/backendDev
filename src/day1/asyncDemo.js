
function fetchTasks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;

            if (success) {
                resolve("Tasks fetched successfully");
            } else {
                reject(new Error("Failed to fetch tasks"));
            }
        }, 1000);
    });
}

async function loadTasks() {
    try {
        const result = await fetchTasks();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

loadTasks()