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
      // checks if input is empty and displays a console alert if true
      // still need to find a way to make it an alert which aborts the function
      checkInput(newPara)
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
    element.classList.add("note-el", "mt-10", "center-el");
    }

  function clearInput() {
    let inputElement = document.getElementById("invoer");
    inputElement.value = "";
  }

  function checkInput(inputElement) {
    if (inputElement.innerHTML == "") {
      console.log("No input detected");
  } else {
    return inputElement;
  }
}


// Console message for user
console.log(
  "Hi there!"
);
