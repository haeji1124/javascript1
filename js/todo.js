const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")
const toDo = document.querySelector("#todo")


let toDos=[];
const TODOS_KEY="todos"

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}


function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    // localStorage.removeItem(TODOS_KEY, li.id)
    toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newToDoObj){
    const li = document.createElement("li");
    li.id=newToDoObj.id
    const span = document.createElement("span")
    const btn = document.createElement("button");

    btn.innerText="❌";
    btn.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(btn);
    span.innerText=newToDoObj.text;

    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log('ttttttt')
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function patinTodos(item){
    paintTodo(item)
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(patinTodos)
    
}
