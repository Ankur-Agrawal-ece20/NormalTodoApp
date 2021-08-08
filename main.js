addbtn=document.getElementById("addbtn")
clrbtn=document.getElementById("clearall")
addbtn.addEventListener("click", addtodo);
clrbtn.addEventListener("click", clrtodos);
check()
function check(){
    const todolist =document.getElementById("todolist")
    var emptylist=document.getElementById("emptylist");
    if(todolist.childElementCount==0) emptylist.style="display:block";
    else emptylist.style="display:none";
}
function markdone(ele){
    var todotxt =ele.parentElement.childNodes[1]
    todotxt.classList.add("done");
    todotxt.classList.remove("progress");
}
function markprogress(ele){
    var todotxt =ele.parentElement.childNodes[1]
    todotxt.classList.add("progress");
    todotxt.classList.remove("add");
}
function deletetodo(ele){
    ele.parentElement.remove()
    check()
}
function addtodo(){
    var textval=document.getElementById("todotxt").value;
    var duedate=document.getElementById("duedate").value;
    const todolist =document.getElementById("todolist")
    if(duedate!="") textval=textval+" due at "+duedate
    const newtodo = document.createElement('div')
    newtodo.className='todo'

    newtodo.innerHTML="<button onclick='markdone(this)' class='done' title='Done'>&#10003</button>"
    const content = document.createTextNode(textval);
    const text=document.createElement('div')
    text.className='txt'
    text.appendChild(content)
    newtodo.appendChild(text)
    
    newtodo.innerHTML+="<button onclick='markprogress(this)' class='progress' title='Progress'>&#8473;</button>"
    newtodo.innerHTML+="<button onclick='deletetodo(this)' class='delete'  title='Delete'>&#9747;</button>"
    todolist.appendChild(newtodo)
    check()
}
function clrtodos(){
    const todolist =document.getElementById("todolist")
    todolist.innerHTML=""
    check()
}
