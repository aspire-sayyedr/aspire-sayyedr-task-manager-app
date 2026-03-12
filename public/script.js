const API="/api/tasks"

let tasks=[]

async function loadTasks(){

const res=await fetch(API)
tasks=await res.json()

renderTasks()

}

function renderTasks(){

const todo=document.getElementById("todoList")
const progress=document.getElementById("progressList")
const done=document.getElementById("doneList")

todo.innerHTML=""
progress.innerHTML=""
done.innerHTML=""

let todoCount=0
let progressCount=0
let doneCount=0

const search=document.getElementById("search").value.toLowerCase()

tasks
.filter(t=>t.title.toLowerCase().includes(search))
.forEach(task=>{

const card=document.createElement("li")

card.className="bg-white p-3 rounded shadow"

card.innerHTML=`
<div class="flex justify-between">

<div>

<h3 class="font-bold">${task.title}</h3>

<p class="text-sm text-gray-600">
${task.description || ""}
</p>

<p class="text-xs text-gray-400">
Due: ${task.due || "N/A"}
</p>

</div>

<div class="flex gap-2">

<button onclick="editTask(${task.id})"
class="text-blue-500 text-sm">
Edit
</button>

<button onclick="deleteTask(${task.id})"
class="text-red-500 text-sm">
Delete
</button>

</div>

</div>
`

if(task.status==="todo"){
todo.appendChild(card)
todoCount++
}

if(task.status==="progress"){
progress.appendChild(card)
progressCount++
}

if(task.status==="done"){
done.appendChild(card)
doneCount++
}

})

document.getElementById("todoCount").innerText=todoCount
document.getElementById("progressCount").innerText=progressCount
document.getElementById("doneCount").innerText=doneCount

}

async function addTask(){

const title=document.getElementById("title").value
const desc=document.getElementById("desc").value
const due=document.getElementById("due").value
const status=document.getElementById("status").value

await fetch(API,{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({title,description:desc,due,status})
})

loadTasks()

}

async function deleteTask(id){

await fetch(API+"/"+id,{method:"DELETE"})

loadTasks()

}

function editTask(id){

const task=tasks.find(t=>t.id===id)

const title=prompt("Edit title",task.title)

if(!title) return

fetch(API+"/"+id,{
method:"PUT",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({...task,title})
}).then(loadTasks)

}

document.getElementById("search").addEventListener("input",renderTasks)

function toggleDark(){
document.body.classList.toggle("bg-gray-900")
}

loadTasks()