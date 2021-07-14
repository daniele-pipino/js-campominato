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
//* 2- Fare in modo che i  umeri siano diversi l'uno dall'altro
//* 3- Chiedere al giocatore di inserire 100 - 16 volte un numero casuale che verra inserito in un array
//* 4- Fare in modo che l'utente non scelga due numeri uguali
//* 5- Per ogni numero che l'utente indovina guadagan un punto
//* 6- Se il numero scelto dall'utente e tra l'array delle bombe la partita termina
//* 7- Se la partita termina indicare all'utente il suo punteggio finale

//? -----------------------------------------SVOLGIMENTO---------------------------------------------------------

// Creazione dei vari array
const bomb = [];
const userChoice = [];


// Generazione dei 16 numeri randomici
var startNumber = 1;
var endNumber = 100;

function generateBomb(min, max) {

    for (var i = 0; i <= 15; i++) {
        var randomBombnumber = Math.floor(Math.random() * (max - min) + min);

        //* Validazione per verificre che nell'array non siano presentinumeri uguali
        if (!bomb.includes(randomBombnumber)) {
            bomb.push(randomBombnumber);
        } else {
            randomBombnumber = Math.floor(Math.random() * (max - min) + min);
            bomb.push(randomBombnumber);
        }
    }

    console.log(bomb);
}


//* Invocazione funzione
generateBomb(startNumber, endNumber);

// --------------Scelta numeri utente--------------------

for (var i = 0; i < 10; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
    // todo Validazione
    userChoice.push(userNumber);
}
console.log(userChoice);







