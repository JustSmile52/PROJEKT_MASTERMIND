import './style.css';


import Main from './components/Main';

console.log("siema dizala")
let pomocnicza = 0
function przod() {

    $("#przod").on("click", function () {

        if (pomocnicza < 4) {
            pomocnicza = pomocnicza + 1
            console.log(pomocnicza)
            return pomocnicza
        }
        else {
            pomocnicza = 0
            console.log(pomocnicza)
            return pomocnicza
        }



    })


}
function tyl() {

    $("#tyl").on("click", function () {
        if (pomocnicza > 0) {
            pomocnicza = pomocnicza - 1
            console.log(pomocnicza)
            return pomocnicza
        }
        else {
            pomocnicza = 4
            console.log(pomocnicza)
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