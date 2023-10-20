//Default Behaviour
document.querySelector("#grandparent")
.addEventListener('click',()=>
{console.log("GrandParent Clicked!")});

document.querySelector("#parent")
.addEventListener('click',()=>
{console.log("Parent Clicked!")});

document.querySelector("#child")
.addEventListener('click',()=>
{console.log("Child Clicked!")});
//By Default :: Event Bubbling Happens means useCapture value is false;

//My Making useCapture as true::Event Capturing happens
document.querySelector("#grandparent")
.addEventListener('click',()=>
{console.log("GrandParent Clicked!")},
true);

document.querySelector("#parent")
.addEventListener('click',()=>
{console.log("Parent Clicked!")},
true);

document.querySelector("#child")
.addEventListener('click',()=>
{console.log("Child Clicked!")},
true);

//These event process are heavy operations , often for our work we employs mix and match of these two types

document.querySelector("#grandparent")
.addEventListener('click',()=>
{console.log("GrandParent Clicked!")},
true);

document.querySelector("#parent")
.addEventListener('click',()=>
{console.log("Parent Clicked!")},
false);

document.querySelector("#child")
.addEventListener('click',()=>
{console.log("Child Clicked!")},
true);

//Event Capturing or Trickling down happens first followed by Event Bubbling Cycle

//What if we want to stop propagation at a DOM element.
//use stopPropagation API of events

document.querySelector("#grandparent")
.addEventListener('click',()=>
{console.log("GrandParent Clicked!")},
true);

document.querySelector("#parent")
.addEventListener('click',(e)=>{
  console.log("Parent Clicked!");
  e.stopPropagation();
},
true);

document.querySelector("#child")
.addEventListener('click',()=>
{console.log("Child Clicked!")},
true);

