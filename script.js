// 1) Quali sono i tipi primitivi principali in TypeScript?
// strings, numbers, boolean, undefined, null, any, never
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Ivan";
var age = 33;
var student = true;
/*  3) Tipizza il parametro della seguente funzione:
const greet = (name) => {
  return "Ciao " + name;
}; */
var greet = function (name) {
    return "Hello" + name;
};
console.log(greet(" " + myName));
/*  4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => {
  return a + b;
}; */
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var priceWithIVA = function (price) {
    return price * 1.22;
};
console.log(priceWithIVA(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var totalLength = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(totalLength("I", "C"));
// 7) Cos'è un Type Union e come si scrive?
// in few words, it can be that or the other one
var userId;
userId: "abc123"; // ok
userId: 123; // ok
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var myVar;
myVar = 33;
myVar = null;
myVar = undefined;
var today = "Monday"; // ok
var tomorrow = "Funday"; // wrong, it's not on Weekday
/*  10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]; */
var numbers = [1, 2, 3]; // more common
var numbers = [1, 2, 3]; // more complex, used for example: Array<string | number> or Array<Array<number>>
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
var myTuple = ["one", "two", "three", 4, 5];
// you can also use interface instead of type
// Both of these define an object type called User
var me = {
    name: "Ivan",
    age: 33
};
var user = {
    firstname: "Mario",
    lastname: "Rossi",
    age: 35
};
console.log(user);
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
var students = [
    { name: "Mario", score: 9 },
    { name: "Lucia", score: 7 }
];
var students2 = [
    { name: "Mario", score: 9 },
    { name: "Lucia", score: 7 }
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myCar = {
    brand: "Fiat",
    model: "127",
    doors: 3
};
// 18) Cosa sono i Generics in TypeScript?
// Generics = "Write reusable, type-safe code that works with any data type."
// Generics allow you to create reusable components (functions, types, interfaces, classes)
//  that work with any data type, while still keeping type safety.
// Write once, use with many types.
function identityNumber(value) {
    return value;
}
function identityString(value) {
    return value;
}
// You’d have to repeat the same logic for every type.
function identity(value) {
    return value;
}
// You can now use the same function with any type:
identity(123); // returns a number
identity("hello"); // returns a string
identity(true); // returns a boolean
// T is a type variable (stands for “Type”).
// It’s a placeholder that gets replaced when the function is called.
// You can name it anything (T, U, K, V, etc.).
// Example with arrays:
function firstItem(arr) {
    return arr[0];
}
firstItem(["a", "b", "c"]); // returns "a"
firstItem([1, 2, 3]); // returns 1
var numberStringPair = {
    first: 42,
    second: "hello"
};
console.log(numberStringPair);
var userDatePair = {
    first: { name: "Alice" },
    second: new Date()
};
console.log(userDatePair);
// T is the generic type.
// data can be any type depending on the API response.
// message is optional (?) — it's often used for errors or feedback.
// Example:
var userResponse = {
    success: true,
    data: { name: "Alice", age: 30 }
};
console.log(userResponse);
var productsResponse = {
    success: true,
    data: ["Laptop", "Mouse", "Keyboard"]
};
console.log(productsResponse);
