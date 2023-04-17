const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const tempo = document.getElementById("tempo1");


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

    if (hr >= 12 && hr < 18) {
        document.body.style.backgroundImage = "linear-gradient(to bottom, #f8b334, #eb3f57)";
    } else if (hr >= 18 && hr <= 24) {
        document.body.style.backgroundImage = "linear-gradient(to bottom, #01031a, #243e7b)";
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec

})