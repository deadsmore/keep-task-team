let notesContainer = document.getElementById("notes-container")

let noteInput = document.getElementById("note-content")

let addNoteBtn = document.querySelector(".add-note")

function showNotes(){
    getNotes().forEach((note)=>{
        let noteElement = createNote(note.id, note.content ,note.color,note.colort,note.fixed)

        notesContainer.appendChild(noteElement)
    })
}

function addNote(){
    let notes = getNotes()
    valueInSecond()
    changeFont()
    if(currentColor===null || currentColor === undefined){
        currentColor="#ffffff"
    }

    if(CurrCol===null || CurrCol===undefined){
        CurrCol="#ffffff"
    }

    let noteObject = {
        id:generateId(),

        content: noteInput.value,
        fixed: false,
        color: currentColor,
        colort: CurrCol,
        selectd:select
    }

    let noteElement = createNote(noteObject.id, noteObject.content,noteObject.color,noteObject.colort,noteObject.selectd)

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)

    noteInput.value = "";
}

function generateId(){
    return Math.floor(Math.random()*5000)
}
// let element
// let textarea

function createNote(id, content, currentColor, CurrCol,select,fixed){

    let element = document.createElement("div")



    element.classList.add("note")



    let  textarea = document.createElement("textarea")

    textarea.value = content

    textarea.placeholder = "Пустая нотатка"
    element.style.backgroundColor=currentColor
    textarea.style.color=CurrCol
    textarea.style.fontFamily=select
    let btn = document.createElement("button")
    btn.innerText = "X"
    btn.classList.add("delete")
    let a=document.getElementById("notes-container")
    a.appendChild(element)
    element.appendChild(btn)

    element.appendChild(textarea)

    btn.addEventListener("click",()=>{
        deleteNote(id,element)
    })

    return element

}

function deleteNote(id, element){

    let notes = getNotes().filter((note) => note.id !== id)

    saveNotes(notes)

    notesContainer.removeChild(element)
}




function getNotes(){
    let notes = JSON.parse(localStorage.getItem("notes") || "[]")
    return notes
}


function saveNotes(notes){
    localStorage.setItem("notes",JSON.stringify(notes))
}
// Ultra razrabotka
    let input=document.createElement("input")
    input.type="color"
    input.style.width="25px"
    input.style.height="25px"
    input.style.backgroundColor="blue"
    document.getElementById("add-note-container").appendChild(input)
    input.addEventListener("input",()=>{

        currentColor=input.value

    })

    let currentColor




    let inputCol=document.createElement("input")
    inputCol.type="color"
    inputCol.style.width="25px"
    inputCol.style.height="25px"
    inputCol.style.backgroundColor="grey"
    document.getElementById("add-note-container").appendChild(inputCol)
    inputCol.addEventListener("input",()=>{

        CurrCol=inputCol.value

    })
    let  CurrCol





function changeFont(){

    let  text =select.options[select.selectedIndex].text

}
let select =document.getElementById("selectFont")
function valueInSecond(){
    let el=document.getElementById("note-content").value
    let now=new Date().getTime()
    let start=new Date(document.getElementById("time").value).getTime();
    setTimeout(()=>{new Notification(`${el}`)
    },start-now)
    alert((start-now))
}
Notification.requestPermission().then(function(permission)
{
    console.log('permiss', permission)
});


addNoteBtn.addEventListener("click",()=>{
    addNote()
})


showNotes()
