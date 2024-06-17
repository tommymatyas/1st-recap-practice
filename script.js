let variable = "valami";
const constantVariable = "konstans valami";
// console.log(variable, constantVariable);

variable = "uj valami";
// constantVariable = "uj konstans valami"; // nem valtoztathato / ERROR
// console.log(variable, constantVariable);

// primitivek
let number = 10;
let text = "text";
let boolean = true;
let variable4 = undefined;

// adastrukturak
let array = ["one", "two", "three"];
let obj = {
  key1: "value",
  key2: 10,
};

// fugvenyek

function myFunc() {
  console.log("Hello world");
}

// console.log("first");
// myFunc();
// myFunc();
/* myFunc();
myFunc();
myFunc(); */
// console.log("last");

function greetings(name) {
  if (name === "Lajos") {
    console.log("Szia Lajos!"); // CL nem visszateresi ertek
  } else {
    console.log(`Hello ${name}!`);
  }
}

/* greetings("Tomi");
greetings("Codecool");
greetings("Lajos"); */

// const result = greetings("Lajos");
// console.log(result);

function betterGreetings(name) {
  if (name === "Lajos") {
    console.log("Szia Lajos!"); // CL nem visszateresi ertek
    return "Szia Lajos!"; // VISSZATERESI ERTEKE A FUGVENYNEK, ha should return akkor kell benne a return szo
  } else {
    console.log(`Hello ${name}!`);
    return `Hello ${name}`;
  }
}

// const result2 = betterGreetings("Lajos");
// console.log("Result: ", result2);

// Nyilfuggveny
const arrowFunc = (name) => {
  console.log(`Hello ${name}, I am an arrow function`); // UNDEFINED / NEM VISSZATERESI ERTEK
  return "return value"; // VISSZATERESI ERTEK
};

// arrowFunc("Tomi");
// console.log(arrowFunc("Tomi"));

// tomb
const array2 = [
  "two",
  13,
  false,
  null,
  NaN,
  ["element1", "element2"],
  { key: "value" },
];

// console.log(array2);
// console.log(array2[0]);
// console.log(array2[1]);
// console.log(array2[array2.length - 1]); // utolso elem a tombbe

// objektum
const obj2 = {
  key: "value",
  key2: 10,
  key3: true,
  key4: ["elem1", "elem2", "elem3"],
  key5: { nestedKey: "valami" },
  "key-6": "valid kulcs nev",
};

// console.log(obj2["key"]);
// console.log(obj2.key);

// // console.log(obj2.key - 6);
// console.log(obj2["key-6"]);
// console.log(obj2.key4[0]);

const testArr = ["elem1", "ekem2"];

/*
const testArr = {
0: "elem1",
1: "elem2",
length: 2
push: () => {},
join: () => {}
}
*/

console.log(typeof ["one", "two"].join(" "));
