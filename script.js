let numero = document.getElementById("numero");
let btnAumentar = document.getElementById("aumentar");
let btnRestar = document.getElementById("restar");

let contador = 0;

btnAumentar.onclick = function() {
    contador = contador + 1;
    numero.textContent = contador;
    if (contador >= 10) {
        numero.style.color = "red";
    }
    else {
        numero.style.color = "black";
}
}

btnRestar.onclick = function() {
    contador = contador - 1;
    numero.textContent = contador;
}

