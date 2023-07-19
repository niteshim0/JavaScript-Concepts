//We will discuss only those points which is other than other languages
//Random Number Generator
function random(number) {
  return Math.floor(Math.random() * number);
}
//Default Parameters
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}
hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
//Anonymous Functions
//a function that doesn't have a name
//It is often seen  when a function expects to receive another function as a parameter.
(function () {
  alert("hello");
});
//Example how it can be implemented  into the code
//Normal Way
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
//Anonymous Function way
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
//Alternative Form of Anonymous Functions :: Arrow Functions
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
//Recommended way ::arrow functions, as they can make your code shorter and more readable
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

