import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import requestLogger from "./middleware/requestLogger.js";
const app = express();
app.use(express.json());
app.use(requestLogger);
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});
app.use("/tasks", taskRoutes);
export default app;
