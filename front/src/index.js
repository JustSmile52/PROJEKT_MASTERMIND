import './style.css';
let rzad = 0
let pomocnicza = 0
let main = null
let tura = 0
let wygrana = false
import do_wyslania from './components/Raycasting'
import Main from './components/Main';
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
function wyslij() {
    $("#wysylka").on("click", function () {
        let sprawdzak = 0
        let tablica = main.getArray()
        for (let i = 0; i < 4; i++) {
            if (tablica[i] == null) {
                sprawdzak = sprawdzak + 1
            }
        }
        if (sprawdzak == 0) {
            for (let i = 0; i < 4; i++) {
                main.tab2[i + rzad * 4].active = false
            }
            rzad = rzad + 1
            for (let i = 0; i < 4; i++) {
                main.tab2[i + rzad * 4].active = true
                console.log(main.tab2[i + rzad * 4])
            }
            console.log(main.tab2)
            fetch("/gra", { method: "POST", body: JSON.stringify({ data: tablica, tura: tura }), headers: { "Content-type": "application/json" } })
                .catch(err => console.log(err))
            tura++
            fetch("/porownywarka", { method: "GET" })
                .then(res => res.text())
                .then(res => {
                    let tr = document.createElement("tr")
                    let td = document.createElement("td")
                    let tabelka = document.getElementById("tabelka")
                    tabelka.appendChild(tr)
                    let pierwsza = parseInt(res)
                    td.innerText = ` ${pierwsza} `
                    tr.appendChild(td)
                    let td2 = document.createElement("td")
                    let pomoc = 4 - parseInt(res)
                    td2.innerText = ` ${pomoc} `
                    tr.appendChild(td2)
                    
                    if (parseInt(res) == 4) {
                        wygrana = true
                    }
                    
                    

                })
                .catch(err => console.log(err))

                tablica = []
                setTimeout(()=> {
                    fetch("/wygrana", { method: "POST", body: JSON.stringify({ wygranko: wygrana }), headers: { "Content-type": "application/json" } })
                    .catch(err => console.log(err))
                },2000)
                
            //wysylanko na serwer tablicy

        }

        else {
            console.log('tablica jest niepelna')
        }



    })
}
function przod() {

    $("#przod").on("click", function () {

        if (pomocnicza < 4) {
            pomocnicza = pomocnicza + 1
            console.log(pomocnicza)
            zniana_koloru()
            document.getElementById("pom").value = pomocnicza
            return pomocnicza
        }
        else {
            pomocnicza = 0
            console.log(pomocnicza)
            zniana_koloru()
            document.getElementById("pom").value = pomocnicza
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
            document.getElementById("pom").value = pomocnicza
            return pomocnicza

        }
        else {
            pomocnicza = 4
            console.log(pomocnicza)
            zniana_koloru()
            document.getElementById("pom").value = pomocnicza
            return pomocnicza
        }

    })
}

// function getPom(){
//     $("#tyl").on("click", function () {
//         return pomocnicza

//     })
//     $("#przod").on("click", function () {
//         return pomocnicza

//     })
//     return pomocnicza

// }

function init() {
    //div
    const container = document.getElementById('root');
    //main class object
    main = new Main(container);
}

init();
przod()
tyl()
wyslij()