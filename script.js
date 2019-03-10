// store the initial variable for use later
let count = 0; 

// increment the value of count

const counter = () => {
  count = count + 1

// retrieves the dom and store its in the const 
const ptag = document.querySelector('p'); 

// change the p tag to show what is inside the variable count
ptag.textContent = count
}

// stop the default event from occuring
const reset = event => {
  event.preventDefault()

//set the count to 0
count = 0

// change the p tag to show what is inside the variable count
const ptag = document.querySelector('p')
ptag.textContent = count
}

// write all our code inside main
const main = () => {

// retrieves the p tag
const ptag = document.querySelector('p')
console.log(ptag)

// change the p tag text to whatever is inside the variable count
ptag.textContent = count

// anytime the user clicks on the button

const button = document.querySelector('button')
console.log(button)

// tell the button anytime you are clicked call the function
button.addEventListener('click', counter)

// tell the ptag anytime it is clicked, call the reset function
ptag.addEventListener('click', reset)

}

document.addEventListener('DOMContentLoaded', main)




