export const createTask = async (
title:string,
description:string,
due:string,
status:string
)=>{
const res=await pool.query(
`INSERT INTO tasks(title,description,due,status)
VALUES($1,$2,$3,$4) RETURNING *`,
[title,description,due,status]
)

return res.rows[0]
}