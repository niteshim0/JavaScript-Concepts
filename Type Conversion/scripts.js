//Two type of type conversion happens in JavaScript
//1))Automatic Type Conversion
//2))Manually by use of some function
   //Functions used::->i)Number() ii)String() iii)Boolean()
//Need of Type Conversion
//Generally we get ouptut in certain format and we need to change into some other format to do necessary operations
          /*Manual Type Conversion Examples*/
//String to Number
let str = "55";
console.log(typeof str);
str = Number(str);
console.log(str);
console.log(typeof str);
str = "Nitesh";
str = Number(str);
console.log(str);
console.log(typeof str);//Nan is Number
//Number to string
str = 5;
console.log(typeof str);
str = String(str);
console.log(str);
console.log(typeof str);
//Boolean to Number 
str = true;
str2 = false;
str = Number(str);
str2 = Number(str2);
console.log(str +" " +  str2);
//EmptyString or Zero == false;
//NonEmptyString or NonZeroNumber = true;
  /*Automatic Type Conversion Examples*/
let man = 5 + null;//null becomes 0
console.log(man);




                       