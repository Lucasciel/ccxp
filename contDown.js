const dias = window.document.getElementById('dias')
const horas = window.document.getElementById('horas')
const minutos = window.document.getElementById('minutos')
const segundos = window.document.getElementById('segundos')

const dataLimite = "30 nov 2024"

function contDown () {
    const dataFinal = new Date(dataLimite)
    const dataAtual = new Date()
    const prazoEmSeg = (dataFinal - dataAtual) / 1000;

    const finalDia = Math.floor(prazoEmSeg / 60 /60 /24);
    const finalHoras = Math.floor(prazoEmSeg / 60 / 60) % 24;
    const finalMinutos = Math.floor(prazoEmSeg /60) % 60;
    const finalSegundos = Math.floor(prazoEmSeg) % 60;

    dias.innerHTML = finalDia < 10 ? "0"+finalDia : finalDia;
    horas.innerHTML = finalHoras < 10 ? "0"+finalHoras : finalHoras;
    minutos.innerHTML= zeroTempo(finalMinutos)
    segundos.innerHTML= zeroTempo(finalSegundos)
}

function zeroTempo (abacate) {
    return abacate < 10 ? `0 ${abacate}` : abacate;
}

contDown();

setInterval(contDown,1000)