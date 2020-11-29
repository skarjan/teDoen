var x = document.getElementById("pri-knop");
x.addEventListener("click", addNote);
// x.addEventListener("click", someOtherFunction);

function getInput(){
console.log(document.getElementById("invoer").value);

}

function addNote(){

var newP = document.createElement("p");
newP.innerHTML = document.getElementById("invoer").value;
document.getElementById("div").appendChild(newP);

};

// document.body.appendChild(newNoteElement);
