"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const db_1 = require("../config/db");
const getTasks = async () => {
    const res = await db_1.pool.query("SELECT * FROM tasks ORDER BY id DESC");
    return res.rows;
};
exports.getTasks = getTasks;
const createTask = async (title, description) => {
    const res = await db_1.pool.query("INSERT INTO tasks(title, description) VALUES($1,$2) RETURNING *", [title, description]);
    return res.rows[0];
};
exports.createTask = createTask;
const updateTask = async (id, title, description) => {
    const res = await db_1.pool.query("UPDATE tasks SET title=$1, description=$2 WHERE id=$3 RETURNING *", [title, description, id]);
    return res.rows[0];
};
exports.updateTask = updateTask;
const deleteTask = async (id) => {
    await db_1.pool.query("DELETE FROM tasks WHERE id=$1", [id]);
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.model.js.map