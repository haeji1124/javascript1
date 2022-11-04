//  const loginForm = document.querySelector("#login-form");
//  const loginInput = loginForm.querySelector("input")
//  const loginButton = loginForm.querySelector("button")
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector(".greeting")
// const toDoForm = document.querySelector("#todo-form")

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

// const link = document.querySelector("a")

loginForm.classList.add('greeting')
loginInput.classList.add('loginInput')

function onLoginSubmit (event){
    event.preventDefault(); // 기본적인 기능을 막는다. 여기서는 submit하면 자동으로 새로고침되는것을 막았다.
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username )
    paintGreeting(username)
    // console.log(username);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(){
    alert("clicked!!")
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerHTML=`Hello ${username}`
}

const saveUsername=localStorage.getItem(USERNAME_KEY)

if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    paintGreeting(saveUsername)
}
// link.addEventListener("click", handleLinkClick)
