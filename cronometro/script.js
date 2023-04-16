const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const tempo = document.getElementById("tempo1");
let body = document.body;
let imagem;

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (horas.innerHTML < 2) {
        tempo.innerHTML = "Hora";
    } else {
        tempo.innerHTML = "Horas"
    }
    
    if (hr < 10) {
        hr = "0" + hr;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (hr >=2 && hr < 12) {
        imagem = "linear-gradient(120deg, #2e9690d8, #54be39da)";
    }

    body.style.backgroundImage = "linear-gradient(120deg, #2e9690d8, #54be39da)" + imagem + "linear-gradient(120deg, #2e9690d8, #54be39da)";

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec

})