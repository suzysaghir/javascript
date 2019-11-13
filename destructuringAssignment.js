[a, b, ...rest] = [10, 20, 30, 40, 50];   // a = 10, b = 20, rest = [30, 40, 50]



// ( ) around the assignment is intead of declaration
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});   // a = 10, b = 20, rest = {c: 30, d: 40}
// var {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};

//Swaping Variables
var a = 1;
var b = 3;
[a, b] = [b, a]; // a = 3, b = 1

//assigned to a variable new name 
var {a: aa = 10, b: bb = 15} = {a: 3}; // aa = 3, bb = 15, print(a)//error 
