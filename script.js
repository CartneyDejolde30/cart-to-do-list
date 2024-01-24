const inputtxt = document.getElementById("inputtxt");
const listcontainer = document.getElementById("listcontainer");
const deleteall = document.getElementById("deleteall");

function addTask(){
    if(inputtxt.value == ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputtxt.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       
        console.log("hi");

    }
    inputtxt.value = "";
    console.log("hi");
    
}


listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
    },false);

    deleteall.addEventListener("click", function(e){
        while (listcontainer.firstChild) {
            listcontainer.removeChild(listcontainer.firstChild);
        }
    },true);

