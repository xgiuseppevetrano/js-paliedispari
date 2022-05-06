// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Chiedo all'utente di inserire una parola
const askWord = prompt("Inserisci una parola");

// 2. Creo una funzione per invertire la mia stringa 
function stringReverse(word) {
    let stringReversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        stringReversed += word[i];
    }
    return stringReversed
}

// 3. Controllo se la parola inserita è uguale o no alla parola invertita
const askWordReversed = stringReverse(askWord);
// 3a. SE le due parole sono uguali
//     ALLORA la parola è palindroma
if (askWord === askWordReversed) {
    console.log("It is a palindrome word");
    // 3a. SE le due parole non sono uguali
   //      ALLORA la parola non è palindroma
} else {
    console.log("It is not a palindrome word");
}