export interface Task {
    id: number;
    title: string;
    status: "pending" | "completed" | "in-progress";
    priority: "low" | "medium" | "high";
    assignee: string;
}