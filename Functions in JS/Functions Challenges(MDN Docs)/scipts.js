/*Task1::For the first task, you have to create a simple function — chooseName() — that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.*/
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function chooseName() {
  let randomName = names[Math.floor(Math.random() * names.length)];
  para.textContent = randomName;

}
chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';
section.appendChild(para);
//Task3::
/*n this task, you return to the problem posed in Task 1, with the aim of improving it. The three improvements we want you to make are:

Refactor the code that generates the random number into a separate function called random(), which takes as parameters two generic bounds that the random number should be between, and returns the result.
Update the chooseName() function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
Print the returned result into the paragraph (para)'s textContent.*/
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function chooseName(arr) {
  let randomNo = random(0,arr.length-1);
  para.textContent = arr[randomNo];

}
chooseName(names);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
//Task4::
/*In this task, we have an array of names, and we're using Array.filter() to get an array of only names shorter than 5 characters. The filter is currently being passed a named function isShort() which checks the length of the name, returning true if the name is less than 5 characters long, and false otherwise.

We'd like you to change this into an arrow function. See how compact you can make it.*/
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');


const shortNames = names.filter((name)=>name.length<5);
para.textContent = shortNames;

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    