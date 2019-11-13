//Arrow function 
var sum = (a, b) => a+b; 
sum(1,3) // 4


var greetings = [
  'hello',
  'hi',
  'merhaba',
  'hey'
];
var greetingLen = str  => {
    return str.length;
}
var len = greetingLen(greetings[1])   //len = 2


//function invocation
var obj = {
  a:1,
  b:2,
  sum: function () {
    return this.a + this.b;
   }
}
console.log(obj.sum());

