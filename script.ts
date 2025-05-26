// 1) Quali sono i tipi primitivi principali in TypeScript?

// strings, numbers, boolean, undefined, null, any, never

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const myName: string = "Ivan";
const age: number = 33;
const student: boolean = true;

/*  3) Tipizza il parametro della seguente funzione:
const greet = (name) => {
  return "Ciao " + name;
}; */

const greet = (name: string): string => {
  return "Hello" + name;
};
console.log(greet(" " + myName));

/*  4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => {
  return a + b;
}; */
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(10, 20));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const priceWithIVA = (price: number): number => {
  return price * 1.22;
};
console.log(priceWithIVA(100));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const totalLength = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

console.log(totalLength("I", "C"));

// 7) Cos'è un Type Union e come si scrive?

// in few words, it can be that or the other one

let userId: string | number;

userId: "abc123"; // ok
userId: 123; // ok

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let myVar: number | null | undefined;

myVar = 33;
myVar = null;
myVar = undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
// A string literal union type lets you restrict a value to be only one of a specific set of strings.
type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
const today: Weekday = "Monday"; // ok
const tomorrow: Weekday = "Funday"; // wrong, it's not on Weekday

/*  10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]; */

const numbers: number[] = [1, 2, 3]; // more common
const numbers: Array<number> = [1, 2, 3]; // more complex, used for example: Array<string | number> or Array<Array<number>>

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
const myTuple: [string, string, string, number, number] = ["one", "two", "three", 4, 5];

// 12) Qual è la differenza tra type e interface?

// type and interface can both define object types.
// It means you can describe the structure of an object - what properties it has, and what types those properties are.

// type - best for:
// union types ("a" | "b")
// Primitive combinations (string | number)
// Tuples [string, number]
// Advanced or composed types (A & B)

type Status = "loading" | "success" | "error";

type RGB = [number, number, number];

type User = {
  name: string;
  age: number;
};

// you can also use interface instead of type
// Both of these define an object type called User

const me: User = {
  name: "Ivan",
  age: 33
};
// me is an object, that has a name(string) and an age(number)
// If you forget a property or put the wrong type, it gives you an error.

//interface - best for:
// Objects, classes, when you want to extend or implement types
interface User2 {
  name: string;
  number: number;
}

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

const user: Person = {
  firstname: "Mario",
  lastname: "Rossi",
  age: 35
};

console.log(user);

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User3 {
  email: string; //required
  phone?: number; // optional
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

const students: { name: string; score: number }[] = [
  { name: "Mario", score: 9 },
  { name: "Lucia", score: 7 }
];
// or with interface:
interface Student {
  name: string;
  score: number;
}

const students2: Student[] = [
  { name: "Mario", score: 9 },
  { name: "Lucia", score: 7 }
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Vehicle {
  brand: string;
  model: string;
}

interface Car extends Vehicle {
  doors: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const myCar: Car = {
  brand: "Fiat",
  model: "127",
  doors: 3
};

// 18) Cosa sono i Generics in TypeScript?
// Generics = "Write reusable, type-safe code that works with any data type."
// Generics allow you to create reusable components (functions, types, interfaces, classes)
//  that work with any data type, while still keeping type safety.

// Write once, use with many types.

function identityNumber(value: number): number {
  return value;
}

function identityString(value: string): string {
  return value;
}

// You’d have to repeat the same logic for every type.

function identity<T>(value: T): T {
  return value;
}

// You can now use the same function with any type:
identity<number>(123); // returns a number
identity<string>("hello"); // returns a string
identity<boolean>(true); // returns a boolean

// T is a type variable (stands for “Type”).
// It’s a placeholder that gets replaced when the function is called.
// You can name it anything (T, U, K, V, etc.).

// Example with arrays:
function firstItem<T>(arr: T[]): T {
  return arr[0];
}

firstItem<string>(["a", "b", "c"]); // returns "a"
firstItem<number>([1, 2, 3]); // returns 1

// 19) È possibile avere più tipi generici in un'interfaccia?
// Yes.

interface Pair<T, U> {
  first: T; // T = type first value
  second: U; // U = type second value
}

const numberStringPair: Pair<number, string> = {
  first: 42,
  second: "hello"
};

console.log(numberStringPair);

const userDatePair: Pair<{ name: string }, Date> = {
  first: { name: "Alice" },
  second: new Date()
};
console.log(userDatePair);

// 20) Crea un'interfaccia generica per una risposta API.
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// T is the generic type.
// data can be any type depending on the API response.
// message is optional (?) — it's often used for errors or feedback.

// Example:
const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: { name: "Alice", age: 30 }
};
console.log(userResponse);

const productsResponse: ApiResponse<string[]> = {
  success: true,
  data: ["Laptop", "Mouse", "Keyboard"]
};
console.log(productsResponse);
