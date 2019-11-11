var array1 = [0, 1, 2];
var array2 = [3, 4, 5];
arr = [...array2, ...array1]; // arr = [3,4,5,0,1,2]


var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };


var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }


