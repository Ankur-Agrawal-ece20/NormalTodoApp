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
    var todotxt =ele.parentElement.childNodes[2]
    todotxt.classList.add("done");
    todotxt.classList.remove("progress");
}
function markprogress(ele){
    var todotxt =ele.parentElement.childNodes[2]
    todotxt.classList.add("progress");
    todotxt.classList.remove("add");
}
function deletetodo(ele){
    ele.parentElement.remove()
    check()
}
function editmode(ele){
    var nodes=ele.childNodes
    nodes[0].style="display:grid";
    nodes[1].style="display:none";
    nodes[2].style="display:none";
    nodes[3].style="display:none";
    nodes[4].style="display:none";
}
function update(ele){
    var nodes=ele.parentElement.parentElement.childNodes
    nodes[0].style="display:none";
    nodes[2].innerHTML=nodes[0].childNodes[0].value;
    nodes[1].style="display:unset";
    nodes[2].style="display:unset";
    nodes[3].style="display:unset";
    nodes[4].style="display:unset";
}
function addtodo(){
    var textval=document.getElementById("todotxt").value;
    var duedate=document.getElementById("duedate").value;
    const todolist =document.getElementById("todolist")
    if(duedate!="") textval=textval+" due at "+duedate
    const newtodo = document.createElement('div')
    newtodo.className='todo'
    newtodo.setAttribute('onDblClick',"editmode(this)")
    newtodo.innerHTML="<div class='updatebox' title='Update'><input class='updatedtxt' value='"+textval+"'></input><button class='done' onclick='update(this)'>&#10003</button></div>"
    newtodo.innerHTML+="<button onclick='markdone(this)' class='done' title='Done'>&#10003</button>"
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
