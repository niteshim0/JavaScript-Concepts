//String Initialization
const string = "The revolution will not be televised.";
console.log(string);
//Escaping Characters
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
//Concating Strings
//Two Methods::->1)Template Literal 2)By Using Addition Operator
/*const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);*/
const greeting = "Hello";
const nameC = "Chris";
console.log(greeting + ", " + nameC);
//Numbers v/s Strings
//The Number() function converts anything passed to it into a number, if it can
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
//Conversely, every number has a method called toString() that converts it to the equivalent string.
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
//String is not simple plain variable in JavaScript unlike C++ ,it is object in JS same as in Java which gives us access to lot of methods
let str = "Nitesh";
//1)length property
console.log(str.length);
//2)Retrieving a char at specific position
console.log(str[0]+" "+str[str.length-1]);
//3)Testing if a string contains a substring
//includes() method
if(str.includes("esh")){
  console.log(true);
}else{
  console.log(false);
}
//startsWith and endsWith
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
//Finding the position of a substring in a string
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);//2nd parameter is the index from where our search starts
console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
//Extracting a substring from a string::->slice() method
console.log(str.slice(1, 4)); // 
//Changing Case
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
//Updating parts of a string::-> replace() method
const updated = browserType.replace("moz", "van");
console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
//replaceAll::-> replaces all the occurences not only the first one
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote)
//Removing the whiteSpaces
let stri = "This is Nitesh Kushwaha    ";
stri = str.trim();
console.log(stri);
//Taking out a Substring
let subst = stri.substr(8,8);//(startingIndex,length);
console.log(subst);
let substr = stri.substring(8,17);//(startingIndex,endingIndex);
console.log(substr);
//Concating two string using function
let s = "Nitesh";
let t = "Kushwaha";
let combined = s.concat(" ",t);
console.log(combined);
