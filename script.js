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
console.log(greet(" " + "Epicode"));
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
// 12) Qual è la differenza tra type e interface?
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.
