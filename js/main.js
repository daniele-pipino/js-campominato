/*Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio. */

// ---------------------------------------------------------------------------------------------------

//todo Suddivisione della traccia

//* 1- Creare un array conteneneti i 16 numeri generati randomicamente
//* 2- Fare in modo che i numeri siano diversi l'uno dall'altro
//* 3- Chiedere al giocatore di inserire 100 - 16 volte un numero casuale che verra inserito in un array
//* 4- Fare in modo che l'utente non scelga due numeri uguali
//* 5- Per ogni numero che l'utente indovina guadagan un punto
//* 6- Se il numero scelto dall'utente e tra l'array delle bombe la partita termina
//* 7- Se la partita termina indicare all'utente il suo punteggio finale

// todo BONUS SECTION
/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

//? -----------------------------------------SVOLGIMENTO---------------------------------------------------------

// recupero elemento html per dichiarare il punteggio

var score = document.getElementById('score');

// Creazione dei vari array
const bomb = [];
const userChoice = [];
const difficulty = ['facile', 'normale', 'difficile'];

// Generazione dei 16 numeri randomici
var startNumber = 1;
var endNumber = 0;


//! BONUS 
// Scelta difficoltà

var userDifficulty = userDifficulty.toLowerCase().trim();

do {
    var userDifficulty = prompt('Scegli la difficoltà', 'normale');
} while (!userDifficulty || userDifficulty.toLowerCase().trim() === '' || userDifficulty.toLowerCase().trim() !== 'facile' && userDifficulty.toLowerCase().trim() !== 'difficile' && userDifficulty.toLocaleLowerCase().trim() !== 'normale');

switch (userDifficulty.toLowerCase().trim()) {

    case 'facile':
        endNumber = 100;
        break;
    case 'difficile':
        endNumber = 50;
        break;
    default:
        endNumber = 80;
        break;
}




//* Generazione numeri randomici
function generateBomb(min, max) {
    var randomBombnumber = 0;
    while (bomb.length < 16) {
        randomBombnumber = Math.floor(Math.random() * (max - min + 1) + min);

        //? Validazione per verificre che nell'array non siano presentinumeri uguali
        if (!bomb.includes(randomBombnumber)) {
            bomb.push(randomBombnumber);
        }
    }

    console.log(bomb);
}

//* Invocazione funzione
generateBomb(startNumber, endNumber);

// Numeri presenti in gioco
var totalNumber = endNumber - bomb.length;
console.log('Numeri in gioco', totalNumber);

// Punteggio
var scoreCounter = 0;
score.innerText = scoreCounter;

// --------------Scelta numeri utente --------------------

while (userChoice.length < 5/*da sostituire con totalnumber */) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);

    // validazione 
    if (isNaN(userNumber)) {
        alert('Carattere non valido')
    } else if (bomb.includes(userNumber)) {
        alert('Hai preso una bomba');
        score.innerText = scoreCounter;
        break;
    } else if (!userChoice.includes(userNumber)) {
        userChoice.push(userNumber);
        // dichiarazione del punteggio
        scoreCounter++;
        score.innerText = scoreCounter;
        console.log('Punti: ', scoreCounter);
    } else {
        alert('Questo numero è stato già inserito');
    }


}

console.log(userChoice);













