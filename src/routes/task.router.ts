import { Router } from "express";
import * as TaskController from "../controllers/task.controller";

const router = Router();

router.get("/", TaskController.getAllTasks);
router.post("/", TaskController.addTask);
router.put("/:id", TaskController.editTask);
router.delete("/:id", TaskController.removeTask);

export default router;