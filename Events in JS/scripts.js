// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);
// btn.removeEventListener("click", changeBackground);
// btn.onclick = () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// };
// btn.onclick = bgChange;
// Event Objects//keydown event//which key is pressed
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}".`;
// });
// //Preventing Default Behaviour of an Event
// const form = document.querySelector("form");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const para = document.querySelector("p");

// form.addEventListener("submit", (e) => {
//   if (fname.value === "" || lname.value === "") {
//     e.preventDefault();
//     para.textContent = "You need to fill in both names!";
//   }
// });
// //Event Bubbling
// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);
// //Pausing and Playing the video--Event Bubbbling Example
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// // video.addEventListener("click", () => video.play());
// //stopping the event from bubbling up
// video.addEventListener("click", (event) => {
//   event.stopPropagation();
//   video.play();
// });
// box.addEventListener("click", () => box.classList.add("hidden"));
//The use case of Event Bubbling::Event Delegation
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});


