'use strict';

const sum = new Function('a, b', 'return a + b');

console.dir({
  name: sum.name,
  length: sum.length,
  toString: sum.toString()
});

console.log({
  name: sum.name,
  length: sum.length,
  toString: sum.toString()
});
