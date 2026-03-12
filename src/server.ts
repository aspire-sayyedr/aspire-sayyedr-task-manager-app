import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import taskRoutes from "./routes/task.router";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});