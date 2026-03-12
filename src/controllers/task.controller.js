"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTask = exports.editTask = exports.addTask = exports.getAllTasks = void 0;
const express_1 = require("express");
const TaskModel = __importStar(require("../models/task.model"));
const getAllTasks = async (req, res) => {
    const tasks = await TaskModel.getTasks();
    res.json(tasks);
};
exports.getAllTasks = getAllTasks;
const addTask = async (req, res) => {
    const { title, description } = req.body;
    const task = await TaskModel.createTask(title, description);
    res.json(task);
};
exports.addTask = addTask;
const editTask = async (req, res) => {
    const id = Number(req.params.id);
    const { title, description } = req.body;
    const task = await TaskModel.updateTask(id, title, description);
    res.json(task);
};
exports.editTask = editTask;
const removeTask = async (req, res) => {
    const id = Number(req.params.id);
    await TaskModel.deleteTask(id);
    res.json({ message: "Task deleted" });
};
exports.removeTask = removeTask;
//# sourceMappingURL=task.controller.js.map