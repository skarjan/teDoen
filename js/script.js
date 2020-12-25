// teDoen app
//
// 1 -  functions
//
//



//
//    - addNote function which collects the user input and displays it on the
//      the page.
//

// called when button 'add note' is clicked
function addNote() {
  return createNote();
}

  function createNote() {
    // create a blank "p" element
    let newPara = document.createElement("p");
      // collect user input to store in newly created element
      getInput(newPara);
      // add note-el class for note style
      addClass(newPara);
      // returns attached element to parent in the DOM and become visible
      clearInput();
        return  appendElement(newPara);
  }

  function getInput(paraElement) {
    // collect user input to store in function argument (p element)
    paraElement.innerHTML = document.getElementById("invoer").value;
      return paraElement;
  }

  function appendElement(paraElement) {
    // attach function argument (p element) to parent element in DOM and becomes
    // visible
    return document.getElementById("div").appendChild(paraElement);
  }

  function addClass (element) {
    element.classList.add("note-el", "mt-10");
    }

  function clearInput() {
    let inputElement = document.getElementById("invoer");
    inputElement.value = "";
  }

console.log(
  "Hi there!" +
  "\nThanks for using the teDoen app. \nI hope it helps you."
  + "\ncreated by A. van der Veen from avdveen.nl"
);
