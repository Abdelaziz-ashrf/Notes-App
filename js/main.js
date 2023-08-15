let noteContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll('.input-box');
let counter = 0;

window.onload = ()=> {
    noteContainer.innerHTML = localStorage.getItem('notes')
}

function saveData(){
    localStorage.setItem("notes", noteContainer.innerHTML)
}


createBtn.addEventListener("click", ()=> {
    if(counter == 6){
        return false
    }else {
    
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className  = `input-box`;
    inputBox.setAttribute('contenteditable', 'true')
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
        saveData()
}
})


noteContainer.addEventListener("click", (e)=> {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        saveData()
    }else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=> {
            nt.onkeyup  = ()=> {
            saveData()
            }
        })
    }
})




