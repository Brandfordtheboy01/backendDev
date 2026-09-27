function fetchTasks(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Tasks fetched successfully");
            } else {
                reject(new Error("Failed to fetch tasks"));
            }
        }, 1000);
    });
}

async function loadTasks(): Promise<void> {
    try {
        const result = await fetchTasks();
        console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

export { loadTasks };