function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mezclarTarjetas() {
    let iteraciones = 100;
    let origen, destino;
    let contenidos = document.querySelectorAll('.tarjeta');

    for (let i = 0; i < iteraciones; i++) {
        origen = aleatorioEntre(0, 35);
        destino = aleatorioEntre(0, 35);
        if (origen != destino) {
            let auxiliar = contenidos[origen].innerHTML;
            contenidos[origen].innerHTML = contenidos[destino].innerHTML;
            contenidos[destino].innerHTML = auxiliar;
        }
    }
}

function clickEnTarjeta(event) {
    let tarjeta = event.target;
    console.log(tarjeta.chi)
}

document.querySelectorAll('.tarjeta').forEach(t => {
    t.addEventListener('click', clickEnTarjeta);
});