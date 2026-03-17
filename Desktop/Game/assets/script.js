//variables

const puntucionJugador = document.querySelector("#pointJugador");
const puntucionComputadora = document.querySelector("#pointComputadora");
const btns = document.querySelectorAll(".botones");

const textResult = document.querySelector("#text-result");
const reset = document.querySelector("#reset");

const options = ["piedra","papel", "tijera"];

const randomOption = ()=>{
const randmNumber = Math.floor(Math.random() * options.length) 
return options[randmNumber];

}

reset.disabled = true;

let pntJ = 0;
let pntC = 0

const jugadorWin = (j, c)=>{
return (( j === "piedra" && c === "tijera" )||
(j === "tijera" && c === "papel" )||
( j === "papel" && c === "piedra"))
}

btns.forEach((btn) =>{
btn.addEventListener('click', ()=>{
const jugadorChoice = btn.value;
console.log(jugadorChoice);
const computerChoice = randomOption()
console.log(computerChoice);

if(jugadorWin(jugadorChoice, computerChoice)){
    pntJ++;
    textResult.textContent = "Gana el Jugador"
    puntucionJugador.textContent = pntJ;
    textResult.style.color = "green";

}
else if(computerChoice === jugadorChoice){
    textResult.textContent = "El resultado es empate";
    textResult.style.color = "grey";
    
}
else {
    pntC++;
    textResult.textContent = "Gana la computadora"
    textResult.style.color = "red" 
     puntucionComputadora.textContent = pntC;
}


if (pntJ === 3 || pntC === 3){
    btns.forEach ((btn) => {
    btn.disabled = true;
reset.disabled = false;
    const ganador = pntJ > pntC ? textResult.textContent = "El ganador es : el jugador" : textResult.textContent = "El ganador es: la computadora";
     return ganador    

})
    
    
}
})})



reset.addEventListener('click', ()=>{
btns.forEach ((btn) => {
btn.disabled = false;
    })
    
    pntJ = 0;
pntC = 0;
textResult.textContent = "Empieza el juego, mucha suerte";
puntucionJugador.textContent = pntJ;
puntucionComputadora.textContent = pntC;
})

