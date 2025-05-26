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
console.log(greet(" " + "Epicode"));

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

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

// 17) Crea un oggetto che implementi l'interfaccia Auto.

// 18) Cosa sono i Generics in TypeScript?

// 19) È possibile avere più tipi generici in un'interfaccia?

// 20) Crea un'interfaccia generica per una risposta API.
