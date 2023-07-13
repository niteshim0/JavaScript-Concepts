//You know about loops from different programming languages here we will only see
//What's new in JavaScript
//Looping through the Collection
//1))for...of loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
//specialized loop for collections
//1))map() - to do something to each item in a collection and create a new collection containing the changed items:
function toUpper(string) {
  return string.toUpperCase();
}
const upperCats = cats.map(toUpper);
console.log(upperCats);
//Working of Map
/*map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.*/
//2))filter(): to test each item in a collection, and create a new collection containing only items that match:
function lCat(cat) {
  return cat.startsWith("L");
}
const filtered = cats.filter(lCat);
console.log(filtered);
//Working of filter
/*This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array.*/
//Traditional for loop
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
//Exiting Loops :: break statement
/*a break statement will immediately exit the loop and make the browser move on to any code that follows it.*/
//Skipping Interations :: continue
/*The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. */
for (let i = 0; i < cats.length; i++) {
  if(i == 5){
    break;
  }
  if(i==2){
    continue;
  }
  console.log(cats[i]);
};
//while and do_while loop
/*The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed at least once. That's because the condition comes after the code inside the loop. So we always run that code, then check to see if we need to run it again. In while and for loops, the check comes first, so the code might never be executed.*/
let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
//dowhile
do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

