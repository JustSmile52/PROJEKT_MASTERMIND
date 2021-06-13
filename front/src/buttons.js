// dodac onclicki na oba buttony, zmieniac nimi styl diva posrodku na odpowiedni kolor w zaleznosci od miejsca na tablicy ktore zmienia button (switch case)
// importowac zmienną z kolorkiem wybranym
//button onclick => +/- pomocnicza zakres od 0 do 4. import pomocnicza i w rendererze switch case zmieniającego styl diva
//
//
//
// czerwona = 0
// niebieska = 1
// zielona = 2
// zolta = 3
// czarna = 4
window.onload = (function () {
    console.log("siema dizala")
    przod()
    tyl()

})
console.log("siema dizala")
let pomocnicza = 0
function przod() {

    $("#przod").on("click", function () {

        if (pomocnicza <= 4) {
            pomocnicza = pomocnicza + 1
            console.log(pomocnicza)
            return pomocnicza
        }
        else {
            pomocnicza = 0

        }

        console.log(pomocnicza)


    })


}
function tyl() {

    $("#tyl").on("click", function () {



    })


}