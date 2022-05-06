// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Chiedo all'utente di inserire una parola
const askWord = prompt("Inserisci una parola");

// 2. Creo una funzione per capire se la parola è palindroma 

function checkPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[word.length - 1 - i]) {
            return "La parola è palindroma";
        }
    }
    return "La parola non è palindroma";
}

console.log(checkPalindrome(askWord));