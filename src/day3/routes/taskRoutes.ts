import { Router } from "express";
import {
    listTasks,
    getOneTask,
    addTask,
    editTask,
    removeTask
} from "../controllers/taskController";

const router = Router();

router.get("/", listTasks);
router.get("/:id", getOneTask);
router.post("/", addTask);
router.patch("/:id", editTask);
router.delete("/:id", removeTask);

export default router;