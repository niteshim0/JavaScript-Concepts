//Creating Arrays
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
//Special Quality of JS Arrays::->
//We can mix different data types in single array
const random = ["tree", 795, [0, 1, 2]];
console.log(random);
//Finding the length of the array
console.log(shopping.length)
//Accessing and modifying array items
shopping[0] = "tahini";
console.log(shopping);
//Finding the index of items in an array
console.log(shopping.indexOf("tahini"));
//Adding items
shopping.push("dalchini");//at last
shopping.unshift("masala");//at first
console.log(shopping);
//Removing items
//Removing the last item
shopping.pop();//this method returns the value it pops
console.log(shopping);
//Removing the first item
shopping.shift();
console.log(shopping);
//Removing at any index
// you know the index of an item, you can remove it from the array using splice():
//splice(), the first argument says where to start removing items, and the second argument says how many items should be removed.//
shopping.splice(0,1);
console.log(shopping);
//Accessing every item of Array
for(const item of shopping){
  console.log(item);
}
//Same functions applied to each index
//We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);
//Applying a check to every index and getting those which passes the test
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); 
//Conversion between Strings and Arrays
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const citie = data.split(",");//into Arrays
console.log(citie);
const stringData = citie.toString();//citie.join(',');//into Strings
console.log(stringData);



