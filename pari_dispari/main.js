// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/*---------------
    FUNCTION
---------------*/
// 3. Creo una funzione per generare un numero random tra 1 e max
function genericNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 5. Creo una funzione per stabilire se il numero è pari
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

/*-----------
    MAIN
-----------*/
// 1. Chiedo all'utente di scegliere tra pari e dispari
const userChoice = prompt("Scegli fra pari e dispari"); 

// 2. Chiedo all'utente di inserire un numero tra 1 e 5
const userNumber = Number(prompt("Inserisci un numero tra 1 e 5"));

// 4. Sommo il numero scelto e il numero random
const sum = userNumber + genericNumber(1, 5);
console.log(sum);

// 6. Dichiaro con un alert chi ha vinto
if (isEven(sum)) {
    if (userChoice === "pari") {
        alert("L'utente ha vinto");
    } else {
        alert("Il computer ha vinto");
    }
} else {
    if (userChoice === "dispari") {
        alert("L'utente ha vinto");
    } else {
        alert("Il computer ha vinto");
    }
}