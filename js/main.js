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
const userChoiceLenght = 10;


// Generazione dei 16 numeri randomici
var startNumber = 1;
var endNumber = 100;

function generateBomb(min, max) {
    var randomBombnumber = 0;
    while (bomb.length < 16) {
        randomBombnumber = Math.floor(Math.random() * (max - min) + min);

        //? Validazione per verificre che nell'array non siano presentinumeri uguali
        if (!bomb.includes(randomBombnumber)) {
            bomb.push(randomBombnumber);
        }
    }

    console.log(bomb);
}

//* Invocazione funzione
generateBomb(startNumber, endNumber);



// --------------Scelta numeri utente--------------------

while (userChoice.length < 3) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);

    if (isNaN(userNumber)) {
        alert('Carattere non valido')
        var userNumber = parseInt(prompt('Inserisci un numero'));
    } else if (!userChoice.includes(userNumber)) {
        userChoice.push(userNumber);
    } else if (bomb.includes(userNumber)) {
        alert('Hai preso una bomba');
    } else {
        alert('Questo numero è stato già inserito');
        userNumber = parseInt(prompt('Inserisci un numero'));
    }
}


console.log(userChoice);












