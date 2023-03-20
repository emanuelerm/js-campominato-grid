/*
Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

//Creiamo una costante per indicare la select
const selectDifficulty = document.getElementById("difficulty");

//Creaiamo un array dove inserire le option della select
const difficultyOptions = ["Easy", "Medium", "Hard"];

//Creaiamo le tre option
for (let i = 0; i < difficultyOptions.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = difficultyOptions[i];
    selectDifficulty.appendChild(option);
}

//Creaiamo un array per indicare le tre quantità di box a seconda della difficoltà
const numbersBox = [100, 81, 49];

//Creiamo i box per ogni costante
for (let i = 1; i <= numbersBox; i++) {
    let box = document.createElement("div");
    let sqrtBox = Math.sqrt(numbersBox);
    box.style.width = `calc(100% / ${sqrtBox})`;
    box.style.height = box.style.width;
}

//Creiamo una costante per identificare il form
const formValider = document.querySelector("form");

//Aggiungiamo l'eventListener al form per far cambiare selezione all'utente
formValider.addEventListener("select", function(e) {
    e.preventDefault();
    
})