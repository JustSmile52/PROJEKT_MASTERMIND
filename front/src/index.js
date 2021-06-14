import './style.css';


import Main from './components/Main';

console.log("siema dizala")


function zniana_koloru() {
    // console.log(document.querySelector("#kolorek"));
    // czerwona = 0
    // niebieska = 1
    // zielona = 2
    // zolta = 3
    // czarna = 4
    switch (pomocnicza) {
        case 0:
            document.querySelector("#kolorek").style.backgroundColor = "red"
            break
        case 1:
            document.querySelector("#kolorek").style.backgroundColor = "blue"
            break
        case 2:
            document.querySelector("#kolorek").style.backgroundColor = "green"
            break
        case 3:
            document.querySelector("#kolorek").style.backgroundColor = "yellow"
            break
        case 4:
            document.querySelector("#kolorek").style.backgroundColor = "black"
            break
    }
}

let pomocnicza = 0
function przod() {

    $("#przod").on("click", function () {

        if (pomocnicza < 4) {
            pomocnicza = pomocnicza + 1
            console.log(pomocnicza)
            zniana_koloru()
            return pomocnicza
        }
        else {
            pomocnicza = 0
            console.log(pomocnicza)
            zniana_koloru()
            return pomocnicza
        }
    })
}
function tyl() {

    $("#tyl").on("click", function () {
        if (pomocnicza > 0) {
            pomocnicza = pomocnicza - 1
            console.log(pomocnicza)
            zniana_koloru()
            return pomocnicza
        }
        else {
            pomocnicza = 4
            console.log(pomocnicza)
            zniana_koloru()
            return pomocnicza
        }
    })
}

function init() {
    //div
    const container = document.getElementById('root');
    //main class object
    new Main(container);
}

init();
przod()
tyl()