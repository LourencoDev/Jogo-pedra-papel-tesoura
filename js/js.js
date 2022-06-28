const elementos = document.querySelectorAll(".player-options div > img");
const playerOpt = "";
const inimigoOpt = "";

// ---------------- Validações para decidir de quem pertece a vitória, empate ou quem perdeu.

function validarVitoria(){
    const vencedor = document.querySelector(".vencedor");

    // ---------------- Validação papel.
                 
    if (playerOpt === "papel") {
        switch (inimigOpt) {
            case "papel":
                vencedor.innerHTML = "Empate";
                break;
            case "tesoura":
                vencedor.innerHTML = "O adversário ganhou";
                break;
            case "pedra":
                vencedor.innerHTML = "Parabéns! Você ganhou :)";
                break;
        }
    }

// ---------------- Validação tesoura.


    if (playerOpt === "tesoura") {
        switch (inimigOpt) {
            case "papel":
                vencedor.innerHTML = "Parabéns! Você ganhou :)";
                break;
            case "tesoura":
                vencedor.innerHTML = "Empate";
                break;
            case "pedra":
                vencedor.innerHTML = "O adversário ganhou";
                break;
        }
    }

// ---------------- Validação pedra.

    if (playerOpt === "pedra") {
        switch (inimigOpt) {
            case "papel":
                vencedor.innerHTML = "O adversário ganhou";
                break;
            case "tesoura":
                vencedor.innerHTML = "Parabéns! Você ganhou :)";
                break;
            case "pedra":
                vencedor.innerHTML = "Empate";
                break;
        }
    }
}

// ---------------- Inimigo.

function resetInimigo(){
    const enemyOptions = document.querySelectorAll(".enemy-options div");
    for (let i = 0; i < enemyOptions.length; i++) {         
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar() {
    let rand = Math.floor(Math.random() * 3);

    const enemyOptions = document.querySelectorAll(".enemy-options div");
    resetInimigo();
    for (let i = 0; i < enemyOptions.length; i++){
        if (i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
        }
    }

    validarVitoria();            
}

// ---------------- Player(No caso, VOCÊ).

function resetOpacityPlayer(){
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (t) => {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute("opt");
        inimigoJogar();
    });
}
