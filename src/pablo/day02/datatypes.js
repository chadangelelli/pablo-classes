#!/usr/bin/env node

/* *************************************************************** *
 * Lesson: Basic introduction to Javascript datatypes.
 *
 * Topics:
 *     1. JS "Scalars" (numbers, strings, booleans, null)
 *     2. JS Variables
 *     3. JS Arrays
 *     4. JS Objects
 *     5. JS Functions
 *     6. That goofy '#!' thing ("shebang")
 * *************************************************************** */

// variables in JS

//........Scalars ("singular")
var x = 1;
var y = 2.0;

//.....booleans
var b = true;

var f = false;
var u = undefined;
var z = null;

//........strings
var s = "Hello, world!"
var s2 = "Hello, world, again!"

//................ Aggregates ("plural")

//arrays
var a = [x,y];

// objects ("hash maps")
var o = {n: 3, p: 4};

var m = {
  a: a,
  b: b,
  f: f,
  x: x,
  y: y,
  u: u,
  z: z,
  s: s,
  s2: s2,
  o: o
};

console.log("a:" , m.a);
console.log("b:" , m.b);
console.log("f:" , m.f);
console.log("x:" , m.x);
console.log("y:" , m.y);
console.log("u:" , m.u);
console.log("z:" , m.z);
console.log("s:" , m.s);
console.log("s2;" , m.s2);
console.log("o:" , m.o);

// basic array access
console.log("--> first element of a:", a[0]);
console.log("--> second element of a:", a[1]);

// nested map access
console.log("--> nested access of maps-in-maps:", m.o.p);

var r = {
  arr1: [52, 123, x, 456, y],
  hash1:
  {
    o:o,
    a: 99,
    b: 678,
    c: "some string",
    d: true,
    e: false,
    f: null,
  },
};

console.log("--> r:", r);

console.log("|> add second value of r.arr1 to r.hash1.b :",
  r.arr1[3] + r.hash1.b
);

for (let i = 0 ; i < r.arr1.length; i++) {
  console.log("!> r.arr1[", i, "] = ", r.arr1[i]);
}

