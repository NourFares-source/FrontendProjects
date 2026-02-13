const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value ;
        listCont.append(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    save() ;

}
listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
save();
    }
},false) ;

function save(){
    localStorage.setItem("data",listCont.innerHTML);
}
function show(){
    listCont.innerHTML = localStorage.getItem("data");
}

show();