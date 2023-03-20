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

//Creiamo due const, la prima per identificare la select, la seconda per creare un arrey di options
const selectDifficulty = document.getElementById("difficulty");
const difficultyOptions = ["Easy", "Medium", "Hard"];

// Due const, con la prima identifichiamo il div in cui andranno i quadrati del gioco, il secondo per identificare il bottone a cui assegnare l'event listner
const playGround = document.querySelector(".playground");
const btnSubmit = document.querySelector("button");

//Creaiamo una funzione per creare le caselle in base al livello di difficoltà selezionato
btnSubmit.addEventListener("click", choosenOption);

//Ciclo for, per creare tre options e assegnare ad ognuna il rispettivo indice dell'arrey difficultyOptions
for (let i = 0; i < difficultyOptions.length; i++) {
    let optionElement = document.createElement("option");
    optionElement.innerText = difficultyOptions[i];
    selectDifficulty.appendChild(optionElement);
}


function choosenOption(e) { 
    e.preventDefault();
    let choosenDifficulty = selectDifficulty.value;
    switch (choosenDifficulty) {
        case "Easy":
            for (let i = 1; i < 101; i++) {
                let createBox = document.createElement("div");
                createBox.innerText = i;
                createBox.style.width = "calc(100% / 10)";
                createBox.style.height = createBox.style.width;
                createBox.style.textAlign = "center";
                createBox.style.verticalAlign = "middle";
                playGround.appendChild(createBox);
            }
            break;

        case "Medium":
            for (let i = 1; i < 82; i++) {
                let createBox = document.createElement("div");
                createBox.innerText = i;
                createBox.style.width = "calc(100% / 9)";
                createBox.style.height = createBox.style.width;
                createBox.style.textAlign = "center";
                createBox.style.verticalAlign = "middle";
                playGround.appendChild(createBox);
            }
            break;

        case "Hard":
            for (let i = 1; i < 50; i++) {
                let createBox = document.createElement("div");
                createBox.innerText = i;
                createBox.style.width = "calc(100% / 7)";
                createBox.style.height = createBox.style.width;
                createBox.style.textAlign = "center";
                createBox.style.verticalAlign = "middle";
                playGround.appendChild(createBox);
            }
            break;
    }
}
