   
const addbtn=document.getElementById("add");

addbtn.onclick=()=>{
    addNewNote()
     
}



function addNewNote(text=""){
    
   const note= document.createElement("div")
   note.className="note"
   note.innerHTML=`<div class="tools">
   <button class="edit"><i class="fas fa-edit"></i></button>
   <button class="delete"><i class="fas fa-trash-alt"></i></button>
   </div>
   <div class="main   ${text ? " " :"hidden"}"></div>
   <textarea  class= ${text? "hidden" :""}></textarea>
   `
   document.body.appendChild(note)

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
   

    textArea.value = text;
    main.innerHTML = text;
    


    editBtn.addEventListener("click",()=>{
        main.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
        updateLS();

    })

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
     })

     textArea.addEventListener("input", (e) => {
                const value  = e.target.value;
                  console.log("hi");
                main.innerHTML = value;
                updateLS();
            });

            

}



function updateLS() {
    const notesText = document.querySelectorAll("textarea");
// console.log(notesText);
    const notes = [];

    notesText.forEach((note) => {
        
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}






