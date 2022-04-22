// 1. Creare in JavaScript una griglia 8x8 con numeri random da 1 a 64 non ripetuti.
//
// Ogni volta che clicco su un quadrato questo si colora di verde.

document.getElementById("start").addEventListener("click", startGame);


// MAIN FUNCTION
function startGame() {
    // 1. Genero numeri da 1 a 64 in ordine casuale e non ripetute
    const gridSize = 64;
    const gridArray = generateGridNumbers(gridSize);


    // 2. Per ogni numero creo un grid item
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridArray.length; i++) {
        const thisNumber = gridArray[i];

        const domElement = generateGridItem(thisNumber)

        // aggiungo all'elmento appena creato la gestione del click
        domElement.addEventListener("click", function() {
            this.classList.add("active");
        });

        // appendo questo elemnto al contenitore
        gridContainer.append(domElement);
    }
}


// UTILITIES FUNCTIONS
/**
 * Description crea un array contenente numeri da 1 a limite definito in ordine casuale e non ripetut
 * @param {any} gridNumberQuantity -> la quantità di numeri casuli in ordine da 1 al valore dato
 * @returns {any} -> array di numeri generati
 */
function generateGridNumbers(gridNumberQuantity) {
    // creare l'array
    const numberArray = [];

    // Creao i numeri random tramite while 
    while (numberArray.length < gridNumberQuantity) {
        // 1. genero il numero random 
        const rndNumber = getRndInteger(1, gridNumberQuantity);

        // 2. se il numero non è all'interno dell'array, allora lo pusho
        if ( !numberArray.includes(rndNumber) ) {
            numberArray.push(rndNumber);
        }
    }
    
    return numberArray;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// DOM FUNCTIONS
/**
 * Description La funzione che genera l'elmento html con numero all'interno
 * @param {any} number -> il numero che dobbiamo inserire all'interno dell'elemnto html
 * @returns {any} -> l'elemento html (il mio div)
 */
function generateGridItem(number) {
    // creo un elemnto html
    const newElement = document.createElement("div");

    // agiungo il span con il numero
    newElement.innerHTML = `<span>${number}</span>`

    // assegno la classe grid-item
    newElement.classList.add("grid-item");

    // ritorno elemnto
    return newElement;
}


