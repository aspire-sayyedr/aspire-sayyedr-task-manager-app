import { Request, Response } from "express";
import * as TaskModel from "../models/task.model";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await TaskModel.getTasks();
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task = await TaskModel.createTask(title, description);
  res.json(task);
};

export const editTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, description } = req.body;

  const task = await TaskModel.updateTask(id, title, description);
  res.json(task);
};

export const removeTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await TaskModel.deleteTask(id);
  res.json({ message: "Task deleted" });
};