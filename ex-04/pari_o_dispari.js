//Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array
//con solo i numeri pari o solo i numeri dispari (su richiesta dell'utente)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let userChoice;

do {
    userChoice = prompt("PARI o DISPARI: ");
} while (userChoice !== "PARI" && userChoice !== "DISPARI");

const even = (userChoice === "PARI" ? true : false);

if (even) {
    const evenNums = nums.filter((num) => num % 2 === 0);
    console.log(evenNums);
} else {
    const oddNums = nums.filter((num) => num % 2 !== 0);
    console.log(oddNums);
}