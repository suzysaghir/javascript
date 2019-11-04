const player = {
  level: 10
};

Object.defineProperty(player, "health", {
  configurable: true,
  enumerable: false,
  get: function() {
    console.log('Inside the get function');
    return 10 + (player.level * 15);
  }
});

console.log(player.health);
//-------------------------------------

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

//-------------------------------------

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 77
